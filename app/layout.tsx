import type { Metadata } from "next"
import { Figtree, Splash } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import { Racing_Sans_One } from 'next/font/google'
import { ngetic } from "./fonts"
import Spline from '@splinetool/react-spline';
import "./globals.css"
import { PageTransition } from "@/components/page-transition"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

const splash = Splash({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-splash",
  display: "swap",
})

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
})

export const metadata: Metadata = {
  title: "Hamza Ben Jemaa - Web Developer",
  description: "Personal portfolio of Hamza Ben Jemaa, a web developer creating beautiful and functional web experiences.",
  generator: "Next.js",
  icons: {
    icon: "/h-2.png",
    apple: "/h-2.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          :root {
            --font-sans: ${figtree.variable};
            --font-mono: ${GeistMono.variable};
            --font-instrument-serif: ${instrumentSerif.variable};
            --font-ngetic: ${ngetic.variable};
            --font-racing-sans: ${racingSansOne.variable};
          }
        `}</style>
      </head>
      <body className={`${figtree.variable} ${instrumentSerif.variable} ${splash.variable} ${GeistMono.variable} ${ngetic.variable} font-sans antialiased bg-black text-white min-h-screen relative`}>
        <Spline className="absolute top-0 left-0 w-full h-full object-cover z-0" scene="https://prod.spline.design/8Bt6EhbjS1FSdH-R/scene.splinecode" />
        <div className="relative z-10">
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </body>
    </html>
  )
}
