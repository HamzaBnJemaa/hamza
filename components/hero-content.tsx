"use client"

import { useEffect, useRef } from "react"
import { Racing_Sans_One } from 'next/font/google'
// import Spline from '@splinetool/react-spline';

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
})

export default function HeroContent() {
  const hamzaRef = useRef<HTMLSpanElement>(null)
  const benJemaaRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hamzaRef.current) {
      const text = hamzaRef.current.textContent || ''
      hamzaRef.current.innerHTML = text.split('').map((char, i) => 
        `<span class="liquid-char" style="--i:${i}">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('')
    }
    if (benJemaaRef.current) {
      const text = benJemaaRef.current.textContent || ''
      benJemaaRef.current.innerHTML = text.split('').map((char, i) => 
        `<span class="liquid-char" style="--i:${i}">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('')
    }
  }, [])

  return (
    <main className="absolute inset-0 z-10 w-full h-full">
      {/* <Spline className="absolute top-0 left-0 w-full h-full object-cover" scene="https://prod.spline.design/8Bt6EhbjS1FSdH-R/scene.splinecode" /> */}
      <div className="absolute bottom-8 left-0 right-0 z-20 w-full px-4 sm:left-8 sm:right-auto sm:w-auto sm:px-0">
        
        <div className="text-center sm:text-left relative">
          {/* SVG Filter for Liquid Effect */}
          <svg className="absolute w-0 h-0">
            <defs>
              <filter id="liquid">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="liquid" />
                <feComposite in="SourceGraphic" in2="liquid" operator="atop"/>
              </filter>
            </defs>
          </svg>

          {/* Main Heading */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight font-light text-white mb-2">
              <span 
                ref={hamzaRef}
                className={`${racingSansOne.variable} racing-sans-one-regular text-center sm:text-left block`}
                style={{
                  color: 'white',
                  lineHeight: '1.1',
                }}
              >
                Hamza
              </span>
              <span 
                ref={benJemaaRef}
                className={`${racingSansOne.variable} racing-sans-one-regular text-center sm:text-left block -mt-2`}
                style={{
                  color: 'white',
                  lineHeight: '1.1',
                }}
              >
                Ben Jemaa
              </span>
            </h1>
            <span className="font-light tracking-wider text-white/80 text-base sm:text-lg uppercase mt-2 inline-block">
              Software developer
            </span>
          </div>

          {/* Description */}
          <p className="text-xs font-light text-white/70 mb-4 leading-relaxed max-w-md">
            Hi, I'm a Web Developer, skilled in ReactJs, Next.js, JavaScript, React Native, Tailwind, 
            focused on building clean, scalable applications. From front-end design to seamless database 
            integration with mySQL, I create efficient solutions for dynamic user experiences.
            Let's build something great together!
          </p>

          {/* Add custom styles */}

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center sm:justify-start gap-4 mt-8">
            <button className="px-6 py-2.5 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer whitespace-nowrap">
              View Work
            </button>
            <a 
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer whitespace-nowrap"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
