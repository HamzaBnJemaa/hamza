"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 flex items-center justify-between p-6">
      {/* Logo - Hidden on mobile */}
      <Link href="/" className="hidden md:flex items-center">
        <img 
          src="/h-2.png" 
          alt="Logo"
          className="h-10 w-auto hover:opacity-80 transition-opacity"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-2">
        <Link href="/" className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
          Home
        </Link>
        <Link href="/services" className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
          Services
        </Link>
        <Link href="/tech-stack" className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
          Tech
        </Link>
        <Link href="/projects" className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
          Projects
        </Link>
        <Link href="/contact" className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu and GitHub Button */}
      <div className="flex items-center justify-between w-full md:hidden">
        {/* Mobile Menu Toggle with Logo */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1 rounded-full hover:opacity-80 transition-opacity flex items-center"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <img 
              src="/h-2.png" 
              alt="Menu"
              className="h-8 w-8 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQgNmgxNk00IDEyaDE2TTQgMThoMTYiLz48L3N2Zz4=';
              }}
            />
          )}
        </button>
        
        {/* GitHub Button with Arrow */}
        <div
  className="relative flex items-center group"
  style={{ filter: "url(#gooey-filter)" }}
>
  {/* Floating button */}
  <button className="absolute right-0 px-3 py-2 rounded-full bg-white text-black font-normal text-sm transition-all duration-300 cursor-pointer h-9 flex items-center justify-center -translate-x-8 group-hover:-translate-x-14 z-0">
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M7 17L17 7M17 7H7M17 7V17"
      />
    </svg>
  </button>

  {/* GitHub link */}
  <a
    href="https://github.com/HamzaBnJemaa"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 h-9 rounded-full bg-white text-black font-normal text-sm transition-all duration-300 cursor-pointer flex items-center z-10"
  >
    <svg
      className="w-5 h-5 mr-1"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  </a>
</div>


      
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 overflow-hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-4/5 max-w-xs bg-black/20 backdrop-blur-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="/h-2.png" 
                alt="Logo" 
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTE5IDE0YzAgMy43Ny0zLjU4MiA3LTggN3MtOC0zLjIzLTgtNywzLjU4Mi03LDgtNyw4LDMuMjMsOCA3WiIvPjxwYXRoIGQ9Ik0xMiAxN2E1IDUgMCAxIDAtMC0xMCIvPjwvc3ZnPg==';
                }}
              />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 -mr-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-2 px-6 space-y-3">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Tech Stack', href: '/tech-stack' },
              { name: 'Projects', href: '/projects' },
              { name: 'Contact', href: '/contact' }
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3.5 px-4 transition-all duration-200 ${
                  index === 0 
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.name}</span>
                  <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </nav>
          
          {/* Footer */}
          <div className="p-6 pt-4 mt-auto">
            <div className="flex items-center justify-center space-x-5 mb-4">
              <a 
                href="https://github.com/HamzaBnJemaa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.46-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1 .07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-center text-white/30">
              {new Date().getFullYear()} Hamza Ben Jemaa. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop GitHub Button */}
      <div id="gooey-btn" className="hidden md:flex relative items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-16 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <a 
          href="https://github.com/HamzaBnJemaa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
          </svg>
        </a>
      </div>
    </header>
  )
}
