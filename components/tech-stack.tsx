"use client"

import React from 'react'

type TechItem = {
  name: string;
  icon: string;
  color: string;
  gradient: string;
}

const techStack: TechItem[] = [
  { 
    name: "JavaScript", 
    icon: "JS",
    color: "#f7df1e",
    gradient: "#f7df1e, #f0db4f"
  },
  { 
    name: "TypeScript", 
    icon: "TS",
    color: "#3178c6",
    gradient: "#3178c6, #5d9cec"
  },
  { 
    name: "React", 
    icon: "⚛️",
    color: "#61dafb",
    gradient: "#61dafb, #a5d8ff"
  },
  { 
    name: "Next.js", 
    icon: "N",
    color: "#000000",
    gradient: "#000000, #3d3d3d"
  },
  { 
    name: "Node.js", 
    icon: "N",
    color: "#68a063",
    gradient: "#68a063, #8cc84b"
  },
  { 
    name: "React Native", 
    icon: "📱",
    color: "#61dafb",
    gradient: "#61dafb, #764abc"
  },
  { 
    name: "Tailwind CSS", 
    icon: "T",
    color: "#38b2ac",
    gradient: "#38b2ac, #81e6d9"
  },
  { 
    name: "mySQL", 
    icon: "SQL",
    color: "#4479a1",
    gradient: "#4479a1, #5d8bb4"
  },
  { 
    name: "Git", 
    icon: "G",
    color: "#f05032",
    gradient: "#f05032, #f77d69"
  },
  { 
    name: "GitHub", 
    icon: "GH",
    color: "#181717",
    gradient: "#181717, #4b4b4b"
  },
  { 
    name: "HTML5", 
    icon: "H5",
    color: "#e34f26",
    gradient: "#e34f26, #f06529"
  },
  { 
    name: "CSS3", 
    icon: "C3",
    color: "#1572b6",
    gradient: "#1572b6, #33a9dc"
  },
  { 
    name: "Astro", 
    icon: "A",
    color: "#ff5d01",
    gradient: "#ff5d01, #ff9e01"
  },
  { 
    name: "Framer Motion", 
    icon: "FM",
    color: "#0055ff",
    gradient: "#0055ff, #00f"
  },
  { 
    name: "Express", 
    icon: "E",
    color: "#000000",
    gradient: "#000000, #4e4e4e"
  },
  { 
    name: "MongoDB", 
    icon: "M",
    color: "#47a248",
    gradient: "#47a248, #b8e994"
  },
  { 
    name: "GraphQL", 
    icon: "GQL",
    color: "#e10098",
    gradient: "#e10098, #ff87b3"
  },
  { 
    name: "Docker", 
    icon: "🐳",
    color: "#2496ed",
    gradient: "#2496ed, #7ec1ff"
  }
]

export default function TechStack() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Here are some of the technologies and tools I use to build amazing web experiences.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
              transition-all duration-300 hover:border-white/20 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${tech.gradient})`,
                }}
              />
              <div className="relative p-4 flex flex-col items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${tech.gradient})`,
                  }}
                >
                  {tech.icon}
                </div>
                <span className="text-white text-sm font-light group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  )
}
