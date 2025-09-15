"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import TechStack from "@/components/tech-stack"

export default function TechStackPage() {
  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen text-white p-8 relative z-10">
        <div className="max-w-6xl mx-auto pt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              My Tech Stack
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-white to-transparent mb-8"></div>
          </div>
          
          <TechStack />
        </div>
      </div>
    </ShaderBackground>
  )
}
