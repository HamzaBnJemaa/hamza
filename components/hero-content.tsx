"use client"

import { useEffect, useRef } from "react"

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
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
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
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span 
            ref={textRef}
            className="font-splash text-6xl md:text-7xl tracking-tight"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'gradient 8s ease infinite',
            }}
          >
            Hamza Ben Jemaa
          </span>
          <br />
          <span className="font-light tracking-wider text-white/80 text-lg uppercase mt-2 inline-block">Software developer</span>
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
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  )
}
