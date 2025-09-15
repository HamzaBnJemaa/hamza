"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      
      <div className="text-left">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-ngetic text-6xl md:text-7xl font-normal tracking-tight">Hamza Ben Jemaa</span>
          <br />
          <span className="font-light tracking-wider text-white/80 text-lg uppercase mt-2 inline-block">Software developer</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed max-w-md">
          Hi, I'm a Web Developer, skilled in ReactJs, Next.js, JavaScript, React Native, Tailwind, 
          focused on building clean, scalable applications. From front-end design to seamless database 
          integration with mySQL, I create efficient solutions for dynamic user experiences.
          Let's build something great together!
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            View Work
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  )
}
