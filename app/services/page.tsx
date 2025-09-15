"use client"

import React from 'react'
import ShaderBackground from "@/components/shader-background"
import Link from "next/link"

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  gradient: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript. Focused on performance, accessibility, and SEO.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "#3b82f6", // blue-500
    gradient: "#3b82f6, #22d3ee", // blue-500 to cyan-400
    link: "/services/web-development"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native for both iOS and Android. Native performance with shared codebase for faster development.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "#a855f7", // purple-500
    gradient: "#a855f7, #ec4899", // purple-500 to pink-500
    link: "/services/mobile-development"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces with a focus on user experience. From wireframes to high-fidelity prototypes and design systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a8 8 0 1111.314 11.314L11 21.5" />
      </svg>
    ),
    color: "#10b981", // green-500
    gradient: "#10b981, #34d399", // green-500 to emerald-400
    link: "/services/ui-ux-design"
  },
  {
    title: "Backend Development",
    description: "Robust backend systems and RESTful/GraphQL APIs using Node.js, Express, and various databases. Scalable and secure solutions for your applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "#eab308", // yellow-500
    gradient: "#eab308, #fbbf24", // yellow-500 to amber-400
    link: "/services/backend-development"
  },
  {
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, containerization with Docker, and cloud infrastructure on AWS, GCP, or Azure. Automate your development workflow and deployment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: "#ef4444", // red-500
    gradient: "#ef4444, #f97316", // red-500 to orange-500
    link: "/services/devops"
  },
  {
    title: "Consulting",
    description: "Technical consulting and architecture design. Let's discuss your project requirements and find the best technical solutions for your needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "#6366f1", // indigo-500
    gradient: "#6366f1, #8b5cf6", // indigo-500 to violet-500
    link: "/services/consulting"
  }
]

export default function ServicesPage() {
  return (
    <ShaderBackground>
      <div className="min-h-screen text-white p-6 sm:p-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              My Services
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs. From concept to deployment, I've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.link}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient})`
                  }}
                />
                <div className="relative p-6 h-full flex flex-col">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradient})`
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-white group-hover:to-white transition-colors">
                    Learn more →
                  </div>
                </div>
              </Link>
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
