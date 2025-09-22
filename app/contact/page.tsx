"use client"

import React, { useState, JSX } from "react"
import Header from "@/components/header"
// import ShaderBackground from "@/components/shader-background"
import { Racing_Sans_One } from 'next/font/google'

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
})

type SocialLink = {
  name: string
  url: string
  icon: JSX.Element
  color: string
}

export default function ContactPage() {
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/HamzaBnJemaa",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="white" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      color: "hover:opacity-80"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hamza-ben-jemaa-36746b2a9/",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="white" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:opacity-80"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/HamzaBnjemaa",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="white" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      color: "hover:opacity-80"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hamzabnjemaa/",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      color: "hover:opacity-80"
    }
  ]

  return (
    // <ShaderBackground>
    <>
      <Header />
      <div className="min-h-screen text-white px-4 py-8 sm:p-8 relative z-10">
        {/* SVG Filter for Liquid Effect */}
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="gooey-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
            </filter>
          </defs>
        </svg>
        <div className="max-w-4xl mx-auto pt-16 sm:pt-20 text-center relative">
          <div className="mb-8 sm:mb-12 text-center relative">
            <h1
              className={`${racingSansOne.variable} racing-sans-one-regular text-5xl sm:text-6xl md:text-7xl tracking-tight font-light text-white mb-2`}
              style={{
                color: 'white',
                lineHeight: '1.1',
              }}
            >
              Let's Connect
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-white to-transparent mx-auto mb-8"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms or send me an email directly.
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 px-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} transition-opacity duration-200`}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          
          {/* Email Form */}
          <div className="max-w-md mx-auto px-4 sm:px-0 text-center">
            <div className={`${racingSansOne.variable} racing-sans-one-regular text-2xl font-light mb-1`}>Email</div>
            <a 
              href="mailto:benjemaahamza09@gmail.com" 
              className="text-white/70 hover:text-white transition-colors text-lg"
            >
              benjemaahamza09@gmail.com
            </a>
            <form className="mt-4 space-y-4">
              <div className="relative flex items-center group w-fit mx-auto" style={{ filter: "url(#gooey-filter)" }}>
                <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-25 z-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
                <a
                  href="mailto:benjemaahamza09@gmail.com"
                  className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
                >
                  Open Email
                </a>
              </div>
              
              <div className="relative flex items-center group w-fit mx-auto" style={{ filter: "url(#gooey-filter)" }}>
                <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-35 z-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
                <a
                  href="/path/to/your/resume.pdf" // Placeholder for resume PDF
                  download="Hamza_Resume.pdf" // Suggested filename for download
                  className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
                >
                  Download Resume
                </a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
    // </ShaderBackground>
  )
}
