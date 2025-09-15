"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background Shaders */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#93c5fd", "#dbeafe", "#1e3a8a", "#1e40af"]}
        speed={0.3}
        backgroundColor="#000000"
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#dbeafe", "#93c5fd", "#000000"]}
        speed={0.2}
        wireframe="true"
        backgroundColor="transparent"
      />

      {/* Theme Provider Implementation */}
      <div className="theme-blue-pastel">
        {children}
      </div>

      <style jsx global>{`
        .theme-blue-pastel {
          --color-primary: #93c5fd;
          --color-secondary: #dbeafe;
          --color-accent: #1e40af;
          --color-dark: #1e3a8a;
          --color-background: #000000;
          --color-text: #ffffff;
          
          --gradient-blue: linear-gradient(135deg, var(--color-primary) 0%, var(--color-dark) 100%);
          --gradient-subtle: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 50%);
        }
        
        .theme-blue-pastel h1,
        .theme-blue-pastel h2,
        .theme-blue-pastel h3,
        .theme-blue-pastel h4,
        .theme-blue-pastel h5,
        .theme-blue-pastel h6 {
          color: white;
        }
        
        .theme-blue-pastel p,
        .theme-blue-pastel span,
        .theme-blue-pastel div {
          color: white;
        }
        
        .theme-blue-pastel .text-primary {
          color: var(--color-primary);
        }
        
        .theme-blue-pastel .text-secondary {
          color: var(--color-secondary);
        }
        
        .theme-blue-pastel .bg-primary {
          background-color: var(--color-primary);
        }
        
        .theme-blue-pastel .bg-secondary {
          background-color: var(--color-secondary);
        }
        
        .theme-blue-pastel .bg-accent {
          background-color: var(--color-accent);
        }
        
        .theme-blue-pastel .bg-gradient-blue {
          background: var(--gradient-blue);
        }
        
        .theme-blue-pastel .border-primary {
          border-color: var(--color-primary);
        }
      `}</style>
    </div>
  )
}