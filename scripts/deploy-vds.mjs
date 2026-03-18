/**
 * VDS deployment script — connects via SSH and sets up the server.
 * Requires: npm install ssh2
 * Usage:   node scripts/deploy-vds.mjs
 */
import { Client } from "ssh2";

const SERVER = {
  host: "109.107.189.30",
  port: 22,
  username: "root",
  password: "JiTOniFsUOA4",
  readyTimeout: 30000,
};

const REPO_URL = "https://github.com/zemir03/Vibe-Coding-Playground.git";
const APP_DIR = "/var/www/vibe-coding-playground";
const APP_PORT = 3000;

/**
 * Run a single command on the remote host and stream output.
 * Resolves with exit code.
 */
function exec(conn, command, label) {
  return new Promise((resolve, reject) => {
    console.log(`\n\x1b[36m▶ [${label}]\x1b[0m ${command}`);
    conn.exec(command, { pty: false }, (err, stream) => {
      if (err) return reject(err);

      stream.on("data", (data) => process.stdout.write(data.toString()));
      stream.stderr.on("data", (data) => process.stderr.write(`\x1b[33m${data.toString()}\x1b[0m`));
      stream.on("close", (code) => {
        if (code !== 0) {
          console.error(`\x1b[31m✗ [${label}] exit code: ${code}\x1b[0m`);
        } else {
          console.log(`\x1b[32m✓ [${label}] done\x1b[0m`);
        }
        resolve(code);
      });
    });
  });
}

async function runDeploy(conn) {
  // ── 1. Update system ──────────────────────────────────────────────────────
  await exec(conn, "export DEBIAN_FRONTEND=noninteractive && apt-get update -y && apt-get upgrade -y", "apt upgrade");

  // ── 2. Install curl, git ──────────────────────────────────────────────────
  await exec(conn, "apt-get install -y curl git", "install curl+git");

  // ── 3. Install Node.js 22 LTS via NodeSource ──────────────────────────────
  await exec(
    conn,
    "curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -y nodejs",
    "install Node.js 22"
  );
  await exec(conn, "node -v && npm -v", "verify node+npm");

  // ── 4. Install pm2 globally ───────────────────────────────────────────────
  await exec(conn, "npm install -g pm2", "install pm2");

  // ── 5. Clone / pull repo ──────────────────────────────────────────────────
  await exec(
    conn,
    `if [ -d "${APP_DIR}/.git" ]; then
       cd ${APP_DIR} && git pull origin main;
     else
       git clone ${REPO_URL} ${APP_DIR};
     fi`,
    "clone/pull repo"
  );

  // ── 6. Install deps & build ───────────────────────────────────────────────
  await exec(conn, `cd ${APP_DIR} && npm ci`, "npm ci");
  await exec(
    conn,
    `cd ${APP_DIR} && npm run build`,
    "npm build"
  );

  // ── 7. Start / restart via pm2 ────────────────────────────────────────────
  await exec(
    conn,
    `cd ${APP_DIR} && \
     pm2 delete vibe-playground 2>/dev/null || true && \
     PORT=${APP_PORT} pm2 start npm --name vibe-playground -- start && \
     pm2 save && \
     pm2 startup systemd -u root --hp /root | tail -1 | bash`,
    "pm2 start"
  );

  // ── 8. Show running processes ─────────────────────────────────────────────
  await exec(conn, "pm2 list", "pm2 list");

  // ── 9. Print access URL ───────────────────────────────────────────────────
  console.log(`\n\x1b[32m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m`);
  console.log(`\x1b[32m✅  Приложение доступно: http://${SERVER.host}:${APP_PORT}\x1b[0m`);
  console.log(`\x1b[32m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n`);
}

// ── Entry point ──────────────────────────────────────────────────────────────
const conn = new Client();

conn.on("ready", async () => {
  console.log("\x1b[32m✓ SSH connected to", SERVER.host, "\x1b[0m");
  try {
    await runDeploy(conn);
  } catch (err) {
    console.error("\x1b[31m✗ Deploy error:\x1b[0m", err.message);
    process.exitCode = 1;
  } finally {
    conn.end();
  }
});

conn.on("error", (err) => {
  console.error("\x1b[31m✗ SSH connection error:\x1b[0m", err.message);
  process.exitCode = 1;
});

conn.connect(SERVER);
