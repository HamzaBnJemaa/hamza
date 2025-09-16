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
import { SiNextdotjs, SiLaravel, SiAstro, SiGithub, SiLinkedin, SiX, SiInstagram } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { FaXTwitter } from 'react-icons/fa6';

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

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/HamzaBnJemaa',
    icon: <SiGithub className="w-8 h-8 mx-auto" />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hamza-ben-jemaa-36746b2a9/',
    icon: <SiLinkedin className="w-8 h-8 mx-auto" />
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/HamzaBnjemaa',
    icon: <FaXTwitter className="w-8 h-8 mx-auto" />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hamzabnjemaa/',
    icon: <SiInstagram className="w-8 h-8 mx-auto" />
  },
  {
    name: 'Email',
    url: 'mailto:benjemaahamza09@gmail.com',
    icon: (
      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function TechStack() {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-2xl font-light mb-6 text-center">Technologies I Use</h2>
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
      </div>
      
    </>
  )
}
