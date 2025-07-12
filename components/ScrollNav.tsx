'use client'

import { useState, useEffect } from 'react'

interface ScrollNavProps {
  sections: Array<{
    id: string
    label: string
  }>
}

export default function ScrollNav({ sections }: ScrollNavProps) {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const sectionIndex = Math.round(scrollY / windowHeight)
      setActiveSection(Math.min(sectionIndex, sections.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections.length])

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          className={`group relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
            activeSection === index
              ? 'bg-white border-white scale-125'
              : 'bg-transparent border-white/50 hover:border-white hover:scale-110'
          }`}
          aria-label={`跳转到${section.label}`}
        >
          <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  )
} 