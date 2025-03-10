import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/comman/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative font-poppins`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
