import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Playfair_Display } from 'next/font/google';

const playfair_display = Playfair_Display({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
});

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair_display.variable}`}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Maison l'Acacia",
  description: "Restaurant de charme la Roque Alric",
};
