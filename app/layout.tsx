import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Escoterio 30",
  description: "Site para o grupo escoteiro 30 Mathias de alburquerque",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 flex flex-col items-center min-h-screen`}
    >
      <body className="h-screen w-full flex flex-col justify-between items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
