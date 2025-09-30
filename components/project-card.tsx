import React from 'react';
import { Project } from '@/types/project';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Racing_Sans_One } from 'next/font/google'

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-racing-sans',
})

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full cursor-pointer">
      <Image 
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="rounded-md mb-4 object-cover w-full h-48"
      />
      <h3 className={`${racingSansOne.variable} racing-sans-one-regular text-xl font-semibold mb-2 text-white text-center`}>{project.title}</h3>
      <p className="text-white/70 text-sm flex-grow mb-4 text-center">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-600/30 text-blue-300 text-xs px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mt-auto flex gap-4 justify-center">
        <a 
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer flex items-center gap-2"
        >
          <FaGithub className="w-4 h-4" />
          GitHub
        </a>
        {project.liveLink && (
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer flex items-center gap-2"
          >
            <FiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
