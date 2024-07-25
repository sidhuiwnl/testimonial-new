import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dashboard from "./_components/Dashboard";
import Navbar from "./_components/Navbar";

  
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col h-screen`}>
        
          <Navbar/>
          <div className="flex flex-1 overflow-hidden">
            <Dashboard />
            <main className="flex-1 overflow-y-auto p-4">
              {children}
              </main>
            <Toaster />
          </div>
        
      </body>
    </html>
  );
}
