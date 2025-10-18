import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
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
  title: "Sonny Boy Fuenteblanca - Software Engineer Portfolio",
  description: "Software Engineer specializing in full-stack development, React.js, Next.js, NestJS, and AI automation. Building scalable web and mobile applications.",
  keywords: ["software engineer", "full-stack developer", "React.js", "Next.js", "NestJS", "AI automation", "React Native", "PostgreSQL", "TypeScript", "Expo"],
  authors: [{ name: "Sonny Boy Fuenteblanca" }],
  creator: "Sonny Boy Fuenteblanca",
  publisher: "Sonny Boy Fuenteblanca",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-delta-six-ikb203y6is.vercel.app",
    title: "Sonny Boy Fuenteblanca - Software Engineer Portfolio",
    description: "Software Engineer specializing in full-stack development and AI automation",
    siteName: "Sonny Boy Fuenteblanca Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonny Boy Fuenteblanca - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonny Boy Fuenteblanca - Software Engineer Portfolio",
    description: "Software Engineer specializing in full-stack development and AI automation",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
