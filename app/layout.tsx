import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteProvider } from "@/components/QuoteContext";

export const metadata: Metadata = {
  title: "Maadi Marble — Egyptian Natural Stone & Marble Export",
  description:
    "Sovereign Egyptian natural stone, marble, and granite export platform. Direct quarry concessions, Italian processing, and global architectural procurement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased min-h-full flex flex-col">
        <QuoteProvider>
          <SiteHeader />
          <main className="w-full pt-20 bg-surface flex-1">{children}</main>
          <SiteFooter />
        </QuoteProvider>
      </body>
    </html>
  );
}
