import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neuron Academy",
  description: "Neuron Academy.",
  icons: {
    icon: [
      '/favicon.ico?v=1',
    ],
    apple: [
      'favicon.ico?v=4',
    ],
    shortcut: [
      'favicon.ico',
    ]
    },
    keywords: [
          "Neuron, Neuron Academy,"
    ] 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />     
        {children}
        <Footer />
        </body>
    </html>
  );
}
