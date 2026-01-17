import { useState } from 'react'
import Card from '../components/Card'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder for login/signup logic
    alert(isLogin ? 'Login functionality coming soon!' : 'Sign up functionality coming soon!')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 flex items-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <img 
            src="/Images/Logo.png" 
            alt="WealthyHealth Logo" 
            className="h-16 w-16 mx-auto mb-4 object-contain"
          />
          <h1 className="text-4xl font-bold text-wealthy-dark mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-600">
            {isLogin
              ? 'Sign in to continue your health journey'
              : 'Start your preventive health journey today'}
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                required
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-wealthy-highlight hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-wealthy-highlight text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-wealthy-highlight font-semibold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-4">Or continue with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="border-2 border-gray-300 px-4 py-2 rounded-lg hover:border-wealthy-highlight transition-colors">
                Google
              </button>
              <button className="border-2 border-gray-300 px-4 py-2 rounded-lg hover:border-wealthy-highlight transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            By continuing, you agree to WealthyHealth's{' '}
            <a href="#" className="text-wealthy-highlight hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-wealthy-highlight hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
