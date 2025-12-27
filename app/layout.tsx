import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Fabricio Puliafico Artur — Pre-Sales Engineer, Solutions Architect & AI Strategist",
  description:
    "Fabricio Artur is a Senior Pre-Sales Engineer and Solutions Architect specialized in cloud, edge, security, and AI-driven solutions. Bridging business, technology, and innovation with a Silicon Valley mindset.",
  keywords: [
    "Fabricio Artur",
    "Pre-Sales Engineer",
    "Sales Engineer",
    "Solutions Architect",
    "AI Strategist",
    "Artificial Intelligence",
    "Cloud Architecture",
    "Edge Computing",
    "Cybersecurity",
    "Technical Sales",
    "Enterprise Architecture",
    "Silicon Valley",
    "Innovation",
    "AI-ready solutions",
    "Out-of-the-box thinking",
  ],
  authors: [{ name: "Fabricio Artur" }],
  creator: "Fabricio Artur",
  publisher: "Fabricio Artur",
  openGraph: {
    title: "Fabricio Artur — Engineering Sales, AI & Innovation",
    description:
      "Senior Pre-Sales Engineer & Solutions Architect connecting technology, AI, and business strategy. Trusted voice in cloud, security, and AI-ready enterprise solutions.",
    url: "https://fabricioartur.com",
    siteName: "Fabricio Artur",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabricio Artur — Pre-Sales, AI & Solutions Architecture",
    description:
      "Engineering sales leader and AI-focused solutions architect. Turning complexity into clarity.",
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6B74S8MR2E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6B74S8MR2E');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
