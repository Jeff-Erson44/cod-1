import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./style/settings.scss";
import { Navbar } from "./components/atoms/Navbar/Navbar";

const inter = Inter ({
  subsets : ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Clash of Dev - Jeff_Erson",
  description: "Clash of dev partie 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
