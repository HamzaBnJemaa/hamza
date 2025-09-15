"use client"

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚀" },
  { name: "NestJS", icon: "🪶" },
  { name: "GraphQL", icon: "🟣" },
  { name: "REST APIs", icon: "🌐" },
  { name: "React Native", icon: "📱" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🐙" },
  { name: "GitHub", icon: "💻" },
  { name: "AWS", icon: "☁️" },
  { name: "Vercel", icon: "▲" },
  { name: "Figma", icon: "🎨" },
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
