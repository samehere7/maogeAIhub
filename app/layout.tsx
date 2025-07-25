import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // This is an existing shadcn/ui component
import MobileScrollBlocker from "@/components/mobile-scroll-blocker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maoge AI Hub - Discover AI Tools",
  description: "A curated list of AI tools to enhance your productivity and creativity.",
  keywords: ["AI tools", "artificial intelligence", "Maoge AI Hub", "productivity", "creativity"],
  manifest: "/manifest.json", // For PWA
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "black" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EBDWTE27P5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EBDWTE27P5');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <MobileScrollBlocker />
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
