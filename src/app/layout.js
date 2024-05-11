import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amrit Singh Dhillon Portfolio",
  description: "This is the portfolio website for Amrit Singh Dhillon ,pursuing software development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
