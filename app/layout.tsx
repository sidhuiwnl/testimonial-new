import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./_components/Navbar";
import ConditionalDashboard from "./_components/ConditionalDashboard";
  
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Collection",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col h-screen`}>
        
          <Navbar/>
          <div className="flex flex-1 overflow-hidden">
            <ConditionalDashboard/>
            <main className="flex-1">
              {children}
              </main>
            <Toaster />
          </div>
        
      </body>
    </html>
  );
}
