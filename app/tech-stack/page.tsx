"use client"

import Header from "@/components/header"
import TechStack from "@/components/tech-stack"
import { Racing_Sans_One } from 'next/font/google'
// import Spline from '@splinetool/react-spline'; // Import Spline component

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
})

export default function TechStackPage() {
  return (
    // <ShaderBackground>
    <>
      <Header />
      <div className="min-h-screen text-white p-8 relative z-10">
        <div className="max-w-4xl mx-auto pt-16 sm:pt-20 text-center relative">
          <div className="mb-12 relative flex flex-col items-center md:flex-row md:justify-between md:items-start">
            <div className="text-center flex-grow">
              <h1 
                className={`${racingSansOne.variable} racing-sans-one-regular text-5xl sm:text-6xl md:text-7xl tracking-tight font-light text-white mb-2`}
                style={{
                  color: 'white',
                  lineHeight: '1.1',
                  // Removed: fontFamily: '"Racing Sans One" !important',
                }}
              >
                
                My Tech Stack
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-white to-transparent mx-auto"></div>
            </div>
            {/* Showing Sticker */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 mb-3 md:mb-0 md:mr-8">
              {/* <Spline scene="https://prod.spline.design/5kkP7FG2ZmnbZ7sO/scene.splinecode" /> */}
              {/* The Spline scene is now managed globally by SplineCanvas.tsx */}
            </div>
          </div>
          
          <TechStack />
        </div>
      </div>
    </>
    // </ShaderBackground>
  )
}
