import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const location = useLocation()

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Width', path: '/width' },
    { name: 'Height', path: '/height' },
    { name: 'Colors', path: '/colors' },
    { name: 'Spacing', path: '/spacing' },
    { name: 'Positions', path: '/positions' },
    { name: 'Container', path: '/container' },
    { name: 'Background', path: '/background' },
    { name: 'Responsive', path: '/responsive' },
    { name: 'Columns', path: '/columns' },
    { name: 'Flex', path: '/flex' },
    { name: 'Grid', path: '/grid' },
    { name: 'Animations', path: '/animations' },
  ]

  const quickLinks = pages.slice(0, 5)

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <nav className="bg-slate-900 text-white shadow-md border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">

        {/* Brand Logo + Version Badge */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 text-2xl font-bold tracking-wide text-emerald-400"
        >
          <span>TailwindApp</span>
          <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
            v4
          </span>
        </Link>

        {/* Quick Links (Visible on Desktop) */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {quickLinks.map((page) => {
            const isActive = location.pathname.toLowerCase() === page.path.toLowerCase()
            return (
              <li key={page.path}>
                <Link
                  to={page.path}
                  className={`transition ${
                    isActive
                      ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1'
                      : 'text-gray-300 hover:text-emerald-400'
                  }`}
                >
                  {page.name}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right Side: Search Bar + Three-Line Menu Button */}
        <div className="flex items-center gap-3">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              if (!isOpen) setIsOpen(true)
            }}
            placeholder="Find a page..."
            className="hidden sm:block w-44 md:w-56 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-gray-200 hover:text-emerald-400 transition cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="text-xl leading-none">{isOpen ? '✕' : '☰'}</span>
            <span className="text-sm font-medium hidden sm:inline">All Pages</span>
          </button>
        </div>

      </div>

      {/* Dropdown Menu showing all pages */}
      {isOpen && (
        <div className="bg-slate-800/95 border-t border-slate-700 px-6 py-4">
          <div className="max-w-7xl mx-auto">
            {filteredPages.length === 0 ? (
              <p className="text-center text-gray-400 text-sm py-2">No pages match "{search}"</p>
            ) : (
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {filteredPages.map((page) => {
                  const isActive = location.pathname.toLowerCase() === page.path.toLowerCase()
                  return (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        onClick={() => {
                          setIsOpen(false)
                          setSearch('')
                        }}
                        className={`block px-4 py-2 rounded-lg transition font-medium text-center text-sm ${
                          isActive
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-900 hover:bg-emerald-600 hover:text-white text-gray-200'
                        }`}
                      >
                        {page.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
