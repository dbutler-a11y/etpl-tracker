import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Institute for AI Innovation | AI Capability Specialist Certificate",
    template: "%s | Institute for AI Innovation",
  },
  description:
    "Launch your AI career in 24 hours with our AI Capability Specialist Certificate. $8,000 program with guaranteed interview pathway, 25+ AI tools, and job placement support. WIOA eligible.",
  keywords: [
    "AI training",
    "AI certification",
    "AI career",
    "workforce development",
    "WIOA training",
    "AI tools",
    "ChatGPT training",
    "Midjourney training",
    "AI content creation",
    "Houston AI training",
    "Texas workforce training",
  ],
  authors: [{ name: "Institute for AI Innovation" }],
  creator: "Institute for AI Innovation",
  publisher: "Eula Properties LLC",
  metadataBase: new URL("https://instituteforaiinnovation.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://instituteforaiinnovation.org",
    siteName: "Institute for AI Innovation",
    title: "Launch Your AI Career in 24 Hours | AI Capability Specialist Certificate",
    description:
      "Get certified in AI tools like ChatGPT, Midjourney, and RunwayML. $8,000 program includes guaranteed interview pathway with BrandVoice. WIOA funding eligible.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Institute for AI Innovation - AI Capability Specialist Certificate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch Your AI Career in 24 Hours",
    description:
      "AI Capability Specialist Certificate - 24 hours, $8,000, guaranteed interview pathway. Master 25+ AI tools.",
    images: ["/og-image.png"],
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
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased bg-gray-50`}
      >
        <QueryProvider>{children}</QueryProvider>
        <Toaster position="bottom-right" richColors />
        <Analytics />
      </body>
    </html>
  );
}
