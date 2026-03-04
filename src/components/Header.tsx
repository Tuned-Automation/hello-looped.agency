'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-950/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1.5" opacity="0.7"/>
                <circle cx="8" cy="8" r="2" fill="white"/>
              </svg>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Looped<span className="text-violet-400">.</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Team', 'Pricing'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors font-medium px-4 py-2">
              Log in
            </Link>
            <Link href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 transition-all duration-200">
              Get Started
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass rounded-2xl mb-4 overflow-hidden">
            <nav className="flex flex-col py-2">
              {['About', 'Services', 'Team', 'Pricing'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}
                  className="px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm">
                  {item}
                </Link>
              ))}
              <div className="px-5 py-3">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}
                  className="block text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
