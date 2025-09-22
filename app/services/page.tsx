"use client"

import React, { JSX } from 'react'
import Header from "@/components/header"
// import ShaderBackground from "@/components/shader-background"
import Link from "next/link"
import { FaLaptopCode, FaMobileAlt, FaPalette, FaGlobe } from "react-icons/fa";
import { Racing_Sans_One } from 'next/font/google'

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
})

type Service = {
  name: string;
  icon: JSX.Element;
  description: string;
}

const services: Service[] = [
  {
    name: "Web Development",
    icon: <FaGlobe />,
    description: "Custom websites and web applications with modern technologies"
  },
  {
    name: "Full-Stack Development",
    icon: <FaLaptopCode />,
    description: "End-to-end web applications with both frontend and backend"
  },
  {
    name: "Web Design",
    icon: <FaPalette />,
    description: "Beautiful and responsive web designs that engage users"
  },
  {
    name: "Mobile Development",
    icon: <FaMobileAlt />,
    description: "Cross-platform mobile applications for iOS and Android"
  }
]

export default function ServicesPage() {
  return (
    // <ShaderBackground>
    <>
      <Header />
      <div className="min-h-screen text-white p-8 relative z-10">
        <div className="max-w-6xl mx-auto pt-20">
          <div className="mb-12">
            <h1 
              className={`${racingSansOne.variable} racing-sans-one-regular text-5xl sm:text-6xl md:text-7xl tracking-tight font-light text-white mb-2`}
              style={{
                color: 'white',
                lineHeight: '1.1',
              }}
            >
              My Services
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-white to-transparent mb-8 mx-auto"></div>
          </div>
          
          <div className="flex justify-around items-start w-full px-4">
            <div className="flex flex-col gap-8 w-1/3 pr-4">
              {services.slice(0, 2).map((service, index) => (
                <div 
                  key={index}
                  className="text-center p-6 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className={`${racingSansOne.variable} racing-sans-one-regular text-lg font-medium mb-2`}>{service.name}</h3>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-8 w-1/3 pl-4">
              {services.slice(2, 4).map((service, index) => (
                <div 
                  key={index}
                  className="text-center p-6 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className={`${racingSansOne.variable} racing-sans-one-regular text-lg font-medium mb-2`}>{service.name}</h3>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </>
    // </ShaderBackground>
  )
}
