"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import TechStack from "@/components/tech-stack"

export default function TechStackPage() {
  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen text-white p-8 relative z-10">
        <div className="max-w-6xl mx-auto pt-20">
          <div className="mb-12 relative flex flex-col items-center md:flex-row md:justify-between md:items-start">
            {/* Showing Sticker */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 mb-4 md:mb-0 md:mr-8">
              <img 
                src="/showing.png"
                alt="Showing Sticker"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center md:text-left flex-grow">
              <h1 
                className={`racing-sans-one-regular text-5xl sm:text-6xl md:text-7xl tracking-tight font-light text-white mb-2`}
                style={{
                  color: 'white',
                  lineHeight: '1.1',
                }}
              >
                My Tech Stack
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-white to-transparent mx-auto md:mx-0"></div>
            </div>
          </div>
          
          <TechStack />
        </div>
      </div>
    </ShaderBackground>
  )
}
