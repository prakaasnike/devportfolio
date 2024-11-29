import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script"; // Import the Script component from next
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: DATA.name,
    card: "summary_large_image",
    creator: "@erprakashnayak",
    description: DATA.description,
  },
  verification: {
    google: "3u6CqWdH_8H56EydwIPN5t62nxcPVMyeL-a7Vykd5V8", // Add your Google verification code if necessary
    yandex: "", // Add your Yandex verification code if necessary
  },
  keywords: [
    "Prakash Nayak",
    "Prakash Nayak Nepal",
    "Web Developer Nepal",
    "Frontend Developer Nepal",
    "React Developer",
    "Next.js Developer",
    "Developer Portfolio Nepal",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        {/* Add the Umami script using next/script */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="b7cb989e-b4a3-409d-b659-1fb6b9f61d39"
          strategy="lazyOnload" // Ensures the script loads lazily
        />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
