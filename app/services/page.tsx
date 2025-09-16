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
    name: "Full-Stack Development",
    icon: "💻",
    description: "End-to-end web applications with both frontend and backend"
  },
  {
    name: "Web Design",
    icon: "🎨",
    description: "Beautiful and responsive web designs that engage users"
  },
  {
    name: "Mobile Development",
    icon: "📱",
    description: "Cross-platform mobile applications for iOS and Android"
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
          
        </div>
      </div>
    </ShaderBackground>
  )
}
