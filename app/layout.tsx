import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Press_Start_2P, Orbitron } from "next/font/google"
import "./globals.css"

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-retro",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tanuj Kumar Singh — Portfolio | Frontend Developer",
  description:
    "Portfolio of Tanuj Kumar Singh, a frontend developer crafting high-performance web apps with modern UX, clean architecture, and glassmorphic design.",
  generator: "v0.app",
  keywords: [
    "frontend developer",
    "portfolio",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "unique designs",
    "glassmorphism",
  ],
  openGraph: {
    title: "Tanuj Kumar Singh — Portfolio",
    description:
      "High-performance, glassmorphic portfolio showcasing projects, skills, and contact for frontend development.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    siteName: "Tanuj Kumar Singh — Portfolio",
    images: [{ url: "/premium-portfolio-website.jpg", width: 1200, height: 630, alt: "Portfolio preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanuj Kumar Singh — Portfolio",
    description: "Frontend developer portfolio with unique designs, animations, and modern web projects.",
    images: ["/premium-portfolio-website.jpg"],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanuj Kumar Singh",
    jobTitle: "Frontend Developer",
    url: siteUrl,
    sameAs: [
      "mailto:tanujkumar14122005@gmail.com",
      "https://github.com/tanuj-ui",
      "https://www.linkedin.com/in/tanuj-kumar-singh-303aa6320/",
      "https://www.instagram.com/tanuj_._singh/",
    ],
    worksFor: { "@type": "Organization", name: "Freelance" },
  }
  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tanuj Kumar Singh — Portfolio",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={siteUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${orbitron.variable} antialiased min-h-screen`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black/80 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
