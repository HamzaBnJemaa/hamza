"use client"

import React from 'react';
import Header from "@/components/header";
// import ShaderBackground from "@/components/shader-background";
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
    title: "KiteLab",
    description: "a team specializing in cutting-edge websites with 3D and modern technologies",
    technologies: ["Next.js", "Tailwind", "Motion Div", "Adobe Photoshop", "JWT", "Express.js", "TypeScript", "JavaScript", "MySQL"],
    image: "/kiteee.jpg",
    githubLink: "https://github.com/HamzaBnJemaa/kitelab.git",
    liveLink: "https://kitelab.vercel.app/" 
  },
  {
    title: "Hannibal Marketplace",
    description: "Your Ultimate Shopping Destination! At HANNIBAL, we redefine the way you shop by providing a seamless and enjoyable online shopping experience. Dive into a world of endless choices, unbeatable prices, and unparalleled convenience right at your fingertips",
    technologies: ["NEXT.JS", "Tailwind", "TypeScript", "Cloudinary"],
    image: "/hannibal.jpg", 
    githubLink: "https://github.com/HamzaBnJemaa/Hannibal-new-version.git",
  },

  {
    title: "Codini Project",
    description: "A digital coding school with interactive lessons, quizzes, and mentorship from elite teachers.",
    technologies: ["JavaScript", "TypeScript", "Next.js", "Tailwind", "React Native", "MongoDB", "JWT"],
    image: "/codini.jpg",
    githubLink: "https://github.com/Codini-Porject/Codini.git",
  },

  {
    title: "KiteDesk",
    description: "Developing an office management platform enabling team collaboration and account interactions across multiple offices. Building the frontend architecture with Next.js, TypeScript, Tailwind CSS, and Framer Motion for responsive UI. Implementing database schemas with MySQL and establishing foundational backend logic for future feature expansion.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MySQL"],
    image: "/kitedesk.jpg",
    githubLink: "#", // Placeholder
  },

  {
    title: "KiteLance",
    description: "A comprehensive web dashboard designed for freelancers, offering a centralized platform to manage projects, clients, invoices, and communication. It provides tools for task tracking, time management, and financial oversight, enabling freelancers to streamline their workflow and enhance productivity. Built with modern web technologies to ensure a responsive and intuitive user experience.",
    technologies: ["Next.js", "Tailwind", "Motion Div", "Adobe Photoshop", "JWT", "Express.js", "TypeScript", "JavaScript", "MySQL", "Framer Motion"],
    image: "/kitelance.jpg", // Placeholder image
    githubLink: "#", // Placeholder
  },

  {
    title: "ArveaLik",
    description: "A full-stack marketplace for natural cosmetics, part of the Arvea brand, offering premium beauty products.",
    technologies: ["Next.js", "Tailwind", "Motion Div", "Adobe Photoshop", "JWT", "Express.js", "TypeScript", "JavaScript", "MySQL", "Framer Motion", "Stripe"],
    image: "/arvealik.png", 
    githubLink: "https://github.com/HamzaBnJemaa/arvea.git",
    liveLink: "https://arvealikk.vercel.app/"
  }
];

export default function ProjectsPage() {
  return (
    // <ShaderBackground>
    <>
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
    </>
    // </ShaderBackground>
  );
}
