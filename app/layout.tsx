import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Marquee Logo Scroller",
  description: "An infinitely scrolling marquee logo component demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/30 pointer-events-none select-none tracking-widest uppercase">
          Albert Artykov
        </footer>
      </body>
    </html>
  );
}
