import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "@/app/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap"
});

const fontVariables = `${dmSans.variable} ${jetbrainsMono.variable} ${syne.variable}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://vibe-coding-playground.vercel.app"),
  title: "Vibe Coding Playground",
  description: "Showcase современных веб-анимаций, интерактива и визуальных эффектов.",
  openGraph: {
    title: "Vibe Coding Playground",
    description: "Modern web showcase with motion, interactivity and visual effects.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning className={fontVariables}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
