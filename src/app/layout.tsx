import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "@/app/globals.css";

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
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
