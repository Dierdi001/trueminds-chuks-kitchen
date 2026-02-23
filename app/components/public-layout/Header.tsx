'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'My Orders', href: '/orders' },
    { name: 'Account', href: '/account' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          <Link href="/" className="flex items-center space-x-2">
            <span 
              className="text-[34px] font-normal text-[#FF7A18]"
              style={{ fontFamily: "'Island Moments', cursive" }}
            >
              Chuks Kitchen
            </span>
          </Link>

          <div className="hidden md:flex justify-between items-center space-x-55">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-[#FF7A18]'
                    : 'text-[#1F2937] hover:text-[#FF7A18]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/signin"
              className="bg-[#FF7A18] text-white px-6 py-2 rounded-[10px] hover:bg-amber-700 transition-colors duration-200 font-semibold hidden md:inline-block"
            >
              Sign In
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-gray-200">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-medium py-2 transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-[#FF7A18]'
                        : 'text-gray-700 hover:text-[#FF7A18]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-[#FF7A18] text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors duration-200 font-semibold text-center md:hidden"
                >
                  Sign In
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}