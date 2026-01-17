import { Link } from 'react-router-dom'
import Card from '../components/Card'

const PreventiveHealth = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-wealthy-dark mb-4">Preventive Health</h1>
          <p className="text-xl text-gray-600">
            Taking proactive steps to improve your Health-Adjusted Life Expectancy
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-wealthy-dark to-wealthy-highlight text-white">
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold mb-4">
                Why Preventive Healthcare Matters
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Preventive healthcare focuses on maintaining health and preventing diseases before they occur,
                rather than treating them after they develop. This approach can significantly increase your
                Health-Adjusted Life Expectancy (HALE) by adding healthy, active years to your life.
              </p>
            </div>
          </Card>
        </div>

        {/* Key Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <div className="text-5xl mb-4 text-center">🔍</div>
            <h3 className="text-2xl font-semibold text-wealthy-dark mb-4 text-center">Early Detection</h3>
            <p className="text-gray-600">
              Identifying health risks and potential issues early allows for timely intervention.
              Regular health assessments and risk tests help catch problems before they become serious,
              leading to better outcomes and lower treatment costs.
            </p>
          </Card>

          <Card>
            <div className="text-5xl mb-4 text-center">✨</div>
            <h3 className="text-2xl font-semibold text-wealthy-dark mb-4 text-center">Micro-Habits</h3>
            <p className="text-gray-600">
              Small, sustainable changes in daily behavior compound over time to create significant
              health improvements. Micro-habits are easier to maintain and more effective than
              drastic lifestyle overhauls.
            </p>
          </Card>

          <Card>
            <div className="text-5xl mb-4 text-center">🎯</div>
            <h3 className="text-2xl font-semibold text-wealthy-dark mb-4 text-center">Self-Driven Actions</h3>
            <p className="text-gray-600">
              Taking personal responsibility for your health through informed choices and consistent
              preventive actions empowers you to control your health outcomes and improve your quality of life.
            </p>
          </Card>
        </div>

        {/* Transformation Model */}
        <div className="mb-12">
          <Card>
            <h2 className="text-3xl font-semibold text-wealthy-dark mb-6">The WealthyHealth Transformation Model</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-wealthy-highlight pl-6">
                <h3 className="text-xl font-semibold text-wealthy-dark mb-2">1. Assessment</h3>
                <p className="text-gray-600">
                  Start by understanding your current health status through our HALE calculator and risk assessment tools.
                  This baseline helps identify areas for improvement.
                </p>
              </div>

              <div className="border-l-4 border-wealthy-highlight pl-6">
                <h3 className="text-xl font-semibold text-wealthy-dark mb-2">2. Personalized Recommendations</h3>
                <p className="text-gray-600">
                  Receive tailored suggestions based on your risk profile, lifestyle, and health goals.
                  Our AI-powered system provides actionable insights.
                </p>
              </div>

              <div className="border-l-4 border-wealthy-highlight pl-6">
                <h3 className="text-xl font-semibold text-wealthy-dark mb-2">3. Micro-Habit Implementation</h3>
                <p className="text-gray-600">
                  Build sustainable habits one small action at a time. Our micro-habit engine helps you
                  create a personalized routine that fits your lifestyle.
                </p>
              </div>

              <div className="border-l-4 border-wealthy-highlight pl-6">
                <h3 className="text-xl font-semibold text-wealthy-dark mb-2">4. Continuous Monitoring</h3>
                <p className="text-gray-600">
                  Track your progress through regular reports and health metrics. Monitor improvements
                  in sleep, hydration, exercise, and overall well-being.
                </p>
              </div>

              <div className="border-l-4 border-wealthy-highlight pl-6">
                <h3 className="text-xl font-semibold text-wealthy-dark mb-2">5. Long-Term Impact</h3>
                <p className="text-gray-600">
                  Over time, these preventive actions compound to significantly improve your HALE,
                  potentially adding 10 or more healthy years to your life.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <h3 className="text-2xl font-semibold text-wealthy-dark mb-4">Benefits of Preventive Healthcare</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Reduced risk of chronic diseases</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Lower healthcare costs over time</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Improved quality of life</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Increased energy and vitality</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Better mental health and well-being</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Extended healthy lifespan (HALE)</span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold text-wealthy-dark mb-4">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Ready to take control of your health? Start your preventive health journey today:
            </p>
            <div className="space-y-3">
              <Link
                to="/hale-score"
                className="block bg-wealthy-highlight text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 text-center"
              >
                Calculate Your HALE
              </Link>
              <Link
                to="/risk-test"
                className="block bg-wealthy-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 text-center"
              >
                Take Risk Assessment
              </Link>
              <Link
                to="/micro-habits"
                className="block border-2 border-wealthy-highlight text-wealthy-highlight px-6 py-3 rounded-lg font-semibold hover:bg-wealthy-highlight hover:text-white transition-colors duration-200 text-center"
              >
                Explore Micro-Habits
              </Link>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-wealthy-dark to-wealthy-highlight text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-xl mb-6">
            Join thousands of people taking proactive steps to improve their Health-Adjusted Life Expectancy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hale-score"
              className="bg-white text-wealthy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-wealthy-dark transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PreventiveHealth
