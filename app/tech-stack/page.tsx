"use client"

import { motion, Variants } from "framer-motion"
import ShaderBackground from "@/components/shader-background"
import TechStack from "@/components/tech-stack"
import Link from "next/link"

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function TechStackPage() {
  const categories = [
    {
      title: "Frontend",
      description: "Building beautiful, responsive user interfaces with modern frameworks and libraries.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      description: "Robust server-side solutions and API development.",
      tech: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"]
    },
    {
      title: "Mobile",
      description: "Cross-platform mobile app development.",
      tech: ["React Native", "Expo"]
    },
    {
      title: "Database",
      description: "Data storage and management solutions.",
      tech: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      description: "Development workflow and deployment tools.",
      tech: ["Docker", "Git", "GitHub Actions", "AWS", "Vercel"]
    },
    {
      title: "Design",
      description: "UI/UX design and prototyping tools.",
      tech: ["Figma", "Adobe XD", "Sketch"]
    }
  ]

  return (
    <ShaderBackground>
      <div className="min-h-screen text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              My Tech Stack
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life and solve complex problems.
              Each tool is carefully selected to ensure the best results for every project.
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-8"></div>
          </motion.div>

          <div className="mb-20">
            <TechStack />
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <h3 className="text-xl font-medium mb-3">{category.title}</h3>
                <p className="text-white/70 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-xl font-light mb-6">Want to see these technologies in action?</h3>
            <Link 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors group"
            >
              View My Projects
              <svg 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </ShaderBackground>
  )
}
