import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-wealthy-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Images/Logo.png" 
                alt="WealthyHealth Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold">WealthyHealth</span>
            </div>
            <p className="text-gray-300 text-sm">
              Increasing India's Health-Adjusted Life Expectancy (HALE) through self-driven preventive actions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/preventive-health" className="text-gray-300 hover:text-white transition-colors">
                  Preventive Health
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hale-score" className="text-gray-300 hover:text-white transition-colors">
                  HALE Calculator
                </Link>
              </li>
              <li>
                <Link to="/risk-test" className="text-gray-300 hover:text-white transition-colors">
                  Risk Test
                </Link>
              </li>
              <li>
                <Link to="/micro-habits" className="text-gray-300 hover:text-white transition-colors">
                  Micro-Habits
                </Link>
              </li>
              <li>
                <Link to="/diet-coach" className="text-gray-300 hover:text-white transition-colors">
                  Diet Coach
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/reports" className="text-gray-300 hover:text-white transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>Copyright © 2026 WealthyHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
