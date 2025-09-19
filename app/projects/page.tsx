"use client"

import React from 'react';
import Header from "@/components/header";
import ShaderBackground from "@/components/shader-background";
import ProjectCard from "@/components/project-card";
import { Project } from "@/types/project";
import { Racing_Sans_One } from 'next/font/google'

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
})

// Dummy data for projects
const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built to showcase my projects and skills.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    image: "/images/portfolio.jpg", // Placeholder image
    githubLink: "https://github.com/HamzaBnJemaa/hamzaportfolio",
    liveLink: "#"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product listings, and a shopping cart.",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/images/ecommerce.jpg", // Placeholder image
    githubLink: "https://github.com/HamzaBnJemaa/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A simple task management application to help users organize their daily tasks.",
    technologies: ["React", "TypeScript", "Firebase", "Redux"],
    image: "/images/task-manager.jpg", // Placeholder image
    githubLink: "https://github.com/HamzaBnJemaa/task-management-app",
    liveLink: "#"
  },
];

export default function ProjectsPage() {
  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen text-white px-4 py-8 sm:p-8 relative z-10">
        <div className="max-w-6xl mx-auto pt-16 sm:pt-20">
          <div className="mb-8 sm:mb-12 text-center">
            <h1
              className={`${racingSansOne.variable} racing-sans-one-regular text-5xl sm:text-6xl md:text-7xl tracking-tight font-light text-white mb-2`}
              style={{
                color: 'white',
                lineHeight: '1.1',
                // Removed: fontFamily: '"Racing Sans One" !important',
              }}
            >
              My Projects
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-white to-transparent mx-auto mb-8"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in various technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </ShaderBackground>
  );
}
