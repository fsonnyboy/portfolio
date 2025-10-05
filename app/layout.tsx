import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  keywords: ["software engineer", "full-stack developer", "React.js", "Next.js", "NestJS", "AI automation", "React Native", "PostgreSQL"],
  authors: [{ name: "Sonny Boy Fuenteblanca" }],
  creator: "Sonny Boy Fuenteblanca",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sonnyboyfuenteblanca.dev",
    title: "Sonny Boy Fuenteblanca - Software Engineer Portfolio",
    description: "Software Engineer specializing in full-stack development and AI automation",
    siteName: "Sonny Boy Fuenteblanca Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonny Boy Fuenteblanca - Software Engineer Portfolio",
    description: "Software Engineer specializing in full-stack development and AI automation",
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
      </body>
    </html>
  );
}
