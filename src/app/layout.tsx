import { Footer, Header } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge - FlavioAnd",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, "flex flex-col h-screen max-h-screen")}
      >
        <Providers>
          <>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </>
        </Providers>
      </body>
    </html>
  );
}
