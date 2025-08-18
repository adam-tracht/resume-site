import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/layout/ThemeProvider";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Tracht | Ecommerce & Digital Product Leader",
  description: "Ecommerce and digital leader with 7+ years driving user-centric growth, expertise in UX, and AI implementation experience.",
  keywords: "Adam Tracht, Ecommerce, Digital Product, UX, AI Implementation, Product Management, A/B Testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="adam-tracht-theme" forceDarkMode={true}>
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
