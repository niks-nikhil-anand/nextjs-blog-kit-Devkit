import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/shared/Navbar";
import { Footer } from "@/components/sections/shared/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Ticker } from "@/components/sections/home/Ticker";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Stories — Travel, Hotels & Lifestyle, by Elena Marsh",
    template: "%s — Stories",
  },
  description: "A slow travel journal kept by a writer with bad maps and good shoes.",
  openGraph: {
    title: "Stories — Travel, Hotels & Lifestyle, by Elena Marsh",
    description: "A slow travel journal kept by a writer with bad maps and good shoes.",
    url: "https://devkitblog.com",
    siteName: "Stories",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories — Travel, Hotels & Lifestyle, by Elena Marsh",
    description: "A slow travel journal kept by a writer with bad maps and good shoes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Ticker />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
