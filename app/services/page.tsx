"use client"

import React, { JSX } from 'react'
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Link from "next/link"

type Service = {
  name: string;
  icon: string;
  description: string;
}

const services: Service[] = [
  {
    name: "Web Development",
    icon: "🌐",
    description: "Custom websites and web applications with modern technologies"
  },
  {
    name: "Mobile Apps",
    icon: "📱",
    description: "Cross-platform mobile applications for iOS and Android"
  },
  {
    name: "UI/UX Design",
    icon: "🎨",
    description: "Beautiful and intuitive user interfaces and experiences"
  },
  {
    name: "Backend",
    icon: "⚙️",
    description: "Robust server-side solutions and APIs"
  },
  {
    name: "DevOps",
    icon: "🔧",
    description: "CI/CD pipelines and cloud infrastructure"
  },
  {
    name: "Consulting",
    icon: "💡",
    description: "Expert advice on technology and architecture"
  }
]

export default function ServicesPage() {
  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen text-white p-8 relative z-10">
        <div className="max-w-6xl mx-auto pt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              My Services
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-white to-transparent mb-8"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="text-center p-6 hover:bg-white/5 rounded-lg transition-colors"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-medium mb-2">{service.name}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-light mb-6">Looking for something else?</h3>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors group"
            >
              Let's discuss your project
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </ShaderBackground>
  )
}
