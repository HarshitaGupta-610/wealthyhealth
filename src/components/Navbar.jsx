import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/hale-score', label: 'HALE Score' },
    { path: '/risk-test', label: 'Risk Test' },
    { path: '/micro-habits', label: 'Micro-Habits' },
    { path: '/diet-coach', label: 'Diet Coach' },
    { path: '/reports', label: 'Reports' },
    { path: '/preventive-health', label: 'Preventive Health' },
    { path: '/about', label: 'About' },
  ]

  return (
    <nav className="bg-wealthy-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Images/Logo.png" 
              alt="WealthyHealth Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold">WealthyHealth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-wealthy-highlight transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-wealthy-highlight px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 hover:bg-wealthy-highlight rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-4 py-2 bg-wealthy-highlight rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
