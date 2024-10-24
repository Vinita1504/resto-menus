import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";
import ClientNavbar from './Component/Navbar/ClientNavbar'


export const metadata: Metadata = {
  title: "Resto-Menus",
  description: "Resto-Menus - Menus for Restaurants",
};

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${philosopher.className} `}
      >
        <ClientNavbar/>
        {children}
      </body>
    </html>
  );
}
