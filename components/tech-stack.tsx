"use client"

import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoDocker,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3
} from 'react-icons/bi';
import { SiNextdotjs, SiLaravel, SiAstro } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

const technologies = [
  { name: "React", icon: <BiLogoReact className="w-8 h-8 mx-auto" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 mx-auto" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="w-8 h-8 mx-auto" /> },
  { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="w-8 h-8 mx-auto" /> },
  { name: "Node.js", icon: <BiLogoNodejs className="w-8 h-8 mx-auto" /> },
  { name: "Laravel", icon: <SiLaravel className="w-8 h-8 mx-auto" /> },
  { name: "Astro", icon: <SiAstro className="w-8 h-8 mx-auto" /> },
  { name: "JavaScript", icon: <BiLogoJavascript className="w-8 h-8 mx-auto" /> },
  { name: "HTML5", icon: <BiLogoHtml5 className="w-8 h-8 mx-auto" /> },
  { name: "CSS3", icon: <BiLogoCss3 className="w-8 h-8 mx-auto" /> },
  { name: "MongoDB", icon: <BiLogoMongodb className="w-8 h-8 mx-auto" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="w-8 h-8 mx-auto" /> },
  { name: "MySQL", icon: <DiMysql className="w-8 h-8 mx-auto" /> },
  { name: "Docker", icon: <BiLogoDocker className="w-8 h-8 mx-auto" /> },
  { name: "Git", icon: <BiLogoGit className="w-8 h-8 mx-auto" /> },
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {technologies.map((tech) => (
        <div 
          key={tech.name}
          className="text-center p-4 hover:bg-white/5 rounded-lg transition-colors"
        >
          <div className="text-2xl mb-2">{tech.icon}</div>
          <div className="text-white/80 text-sm">{tech.name}</div>
        </div>
      ))}
    </div>
  )
}
