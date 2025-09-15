"use client"

import { useEffect, useRef } from "react"
import { Racing_Sans_One } from 'next/font/google'

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
})

export default function HeroContent() {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current.textContent || ''
      textRef.current.innerHTML = text.split('').map((char, i) => 
        `<span class="liquid-char" style="--i:${i}">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('')
    }
  }, [])

  return (
    <main className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-auto z-20 max-w-lg w-[calc(100%-2rem)] sm:w-auto">
      <div className="text-center sm:text-left">
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span 
            ref={textRef}
            className={`${racingSansOne.variable} racing-sans-one-regular text-5xl sm:text-6xl md:text-7xl`}
            style={{
              display: 'inline-block',
              color: 'white'
            }}
          >
            Hamza Ben Jemaa
          </span>
          <br />
          <span className="font-light tracking-wider text-white/80 text-base sm:text-lg uppercase mt-2 inline-block">Software developer</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed max-w-md">
          Hi, I'm a Web Developer, skilled in ReactJs, Next.js, JavaScript, React Native, Tailwind, 
          focused on building clean, scalable applications. From front-end design to seamless database 
          integration with mySQL, I create efficient solutions for dynamic user experiences.
          Let's build something great together!
        </p>

        {/* Add custom styles */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Borel&family=Cairo:wght@200..1000&family=Playpen+Sans+Arabic:wght@100..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Racing+Sans+One&family=Zen+Dots&display=swap');
          .racing-sans-one-regular {
            font-family: "Racing Sans One", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            View Work
          </button>
          <div className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
            <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-16 z-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
            <a 
              href="/contact"
              className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
