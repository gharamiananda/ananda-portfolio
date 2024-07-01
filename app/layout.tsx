
import StarsCanvas from "@/components/main/StarBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ananda Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">     <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="This is my portfolio" />
    <meta property="og:title" content="Ananda Portfolio" />
    <meta property="og:description" content="This is my portfolio" />
    <meta property="og:image" content="https://avatars.githubusercontent.com/u/86967865?v=4" />
    <meta property="og:url" content="https://avatars.githubusercontent.com/u/86967865?v=4" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ananda Portfolio" />
    <meta name="twitter:description" content="This is my portfolio" />
    <link rel="image_src" href="https://avatars.githubusercontent.com/u/86967865?v=4" /> 
    <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/86967865?v=4" />
    <title>Ananda Portfolio</title>
  </head>

      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        {children}
        <CustomCursor />
        <Toaster />

      </body>
    </html>
  );
}
