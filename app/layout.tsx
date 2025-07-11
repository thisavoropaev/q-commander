import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

const font = localFont({
  src: "./ModernDOS8x16.ttf",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Q Commander - Modern File Manager",
  description:
    "A modern file manager inspired by classic DOS commanders. Navigate directories, manage files, and execute commands with an intuitive dual-panel interface built with Next.js and React.",
  keywords:
    "file manager, DOS commander, file explorer, directory navigation, dual panel",
  authors: [{ name: "Andrei Varapayeu" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
