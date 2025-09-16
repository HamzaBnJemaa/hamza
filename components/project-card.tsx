import React from 'react';
import { Project } from '@/types/project';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <Image 
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="rounded-md mb-4 object-cover w-full h-48"
      />
      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-white/70 text-sm flex-grow mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-600/30 text-blue-300 text-xs px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mt-auto flex gap-4">
        <a 
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <FaGithub className="w-5 h-5" />
          GitHub
        </a>
        {project.liveLink && (
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
