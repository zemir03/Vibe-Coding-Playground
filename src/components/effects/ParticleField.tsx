const PARTICLES = [
  { left: "8%",  top: "12%", size: 2, color: "var(--color-accent-cyan)",   duration: "7s",  delay: "0s"    },
  { left: "22%", top: "35%", size: 1, color: "var(--color-accent-violet)", duration: "9s",  delay: "1.2s"  },
  { left: "38%", top: "18%", size: 3, color: "var(--color-accent-cyan)",   duration: "6s",  delay: "0.5s"  },
  { left: "55%", top: "68%", size: 1, color: "var(--color-accent-green)",  duration: "8s",  delay: "2s"    },
  { left: "72%", top: "25%", size: 2, color: "var(--color-accent-violet)", duration: "11s", delay: "0.8s"  },
  { left: "88%", top: "45%", size: 2, color: "var(--color-accent-cyan)",   duration: "7s",  delay: "1.5s"  },
  { left: "15%", top: "72%", size: 1, color: "var(--color-accent-green)",  duration: "10s", delay: "3s"    },
  { left: "48%", top: "42%", size: 2, color: "var(--color-accent-cyan)",   duration: "8s",  delay: "2.5s"  },
  { left: "65%", top: "78%", size: 1, color: "var(--color-accent-violet)", duration: "12s", delay: "0.3s"  },
  { left: "92%", top: "15%", size: 2, color: "var(--color-accent-green)",  duration: "9s",  delay: "1.8s"  },
  { left: "5%",  top: "55%", size: 1, color: "var(--color-accent-cyan)",   duration: "7s",  delay: "4s"    },
  { left: "32%", top: "85%", size: 2, color: "var(--color-accent-violet)", duration: "10s", delay: "1s"    },
  { left: "78%", top: "60%", size: 1, color: "var(--color-accent-cyan)",   duration: "8s",  delay: "2.2s"  },
  { left: "95%", top: "82%", size: 2, color: "var(--color-accent-green)",  duration: "6s",  delay: "0.7s"  },
  { left: "43%", top: "5%",  size: 1, color: "var(--color-accent-violet)", duration: "9s",  delay: "3.5s"  },
] as const;

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map(({ left, top, size, color, duration, delay }, i) => (
        <span
          key={i}
          className="particle-float absolute rounded-full"
          style={{
            left,
            top,
            width: size,
            height: size,
            background: color,
            boxShadow: `0 0 ${size * 4}px ${color}`,
            "--particle-duration": duration,
            "--particle-delay": delay,
          } as React.CSSProperties}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
