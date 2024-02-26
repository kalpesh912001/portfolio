import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "../components/main/StarBackground";
import NavBar from '../components/main/Navbar';
import Footer from '../components/main/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no" />
      <meta name="viewport" content="width=1000"></meta>
      <body className={`${inter.className} relative bg-[#030014] scrollbar-hidden overflow-y-scroll overflow-x-hidden`} >
        <StarCanvas />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
