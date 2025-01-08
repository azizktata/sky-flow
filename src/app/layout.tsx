import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyFlow",
  description: "Import & Export Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo} antialiased`}>
        <Toaster position="top-right" />

        {children}
      </body>
    </html>
  );
}
