import { Link } from 'react-router-dom'
import Card from '../components/Card'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-wealthy-dark mb-4">About WealthyHealth</h1>
          <p className="text-xl text-gray-600">
            Empowering individuals to take control of their health through preventive actions
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-wealthy-dark to-wealthy-highlight text-white">
            <div className="text-center py-8">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
                To increase India's Health-Adjusted Life Expectancy (HALE) by 10 years through
                self-driven preventive actions and AI-powered healthcare solutions.
              </p>
            </div>
          </Card>
        </div>

        {/* Why Preventive Healthcare */}
        <div className="mb-12">
          <Card>
            <h2 className="text-3xl font-semibold text-wealthy-dark mb-6">Why Preventive Healthcare Matters</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p className="text-lg">
                Traditional healthcare often focuses on treating diseases after they occur. However,
                preventive healthcare takes a proactive approach by identifying risks early and
                implementing lifestyle changes to prevent health issues before they develop.
              </p>
              <p className="text-lg">
                In India, where non-communicable diseases are on the rise, preventive healthcare
                becomes crucial. By adopting small, sustainable habits and making informed health
                choices, individuals can significantly improve their Health-Adjusted Life Expectancy
                (HALE) - the number of years a person can expect to live in good health.
              </p>
              <p className="text-lg">
                WealthyHealth is designed to make preventive healthcare accessible, actionable, and
                sustainable for everyone. We believe that everyone deserves to live a long, healthy,
                and active life.
              </p>
            </div>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-wealthy-dark mb-6 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-wealthy-dark mb-2">HALE Calculator</h3>
              <p className="text-gray-600">
                Understand your current Health-Adjusted Life Expectancy and see how preventive
                actions can add healthy years to your life.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-wealthy-dark mb-2">Risk Assessment</h3>
              <p className="text-gray-600">
                Comprehensive health risk evaluation based on lifestyle factors, with personalized
                recommendations for improvement.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-wealthy-dark mb-2">Micro-Habits</h3>
              <p className="text-gray-600">
                Build sustainable health habits one small action at a time with our curated
                micro-habit library.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-semibold text-wealthy-dark mb-2">Diet Coach</h3>
              <p className="text-gray-600">
                AI-powered nutrition recommendations including healthy swaps, meal suggestions,
                and mood-based food choices.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-wealthy-dark mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your health journey with detailed reports and visualizations of your
                progress over time.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-wealthy-dark mb-2">Personalized Insights</h3>
              <p className="text-gray-600">
                Receive tailored recommendations and insights based on your unique health profile
                and goals.
              </p>
            </Card>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mb-12">
          <Card>
            <h2 className="text-3xl font-semibold text-wealthy-dark mb-6">Who This Platform Is For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-wealthy-dark mb-3">Individuals Seeking Better Health</h3>
                <p className="text-gray-600">
                  If you want to take proactive steps to improve your health and add healthy years
                  to your life, WealthyHealth provides the tools and guidance you need.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-wealthy-dark mb-3">People with Busy Lifestyles</h3>
                <p className="text-gray-600">
                  Our micro-habit approach is perfect for those who want to improve their health
                  without making drastic lifestyle changes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-wealthy-dark mb-3">Health-Conscious Families</h3>
                <p className="text-gray-600">
                  Families looking to build healthy habits together and create a culture of
                  preventive healthcare at home.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-wealthy-dark mb-3">Anyone Ready for Change</h3>
                <p className="text-gray-600">
                  Whether you're just starting your health journey or looking to optimize your
                  current routine, WealthyHealth adapts to your needs.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Vision */}
        <Card className="bg-gradient-to-r from-wealthy-dark to-wealthy-highlight text-white">
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl max-w-3xl mx-auto">
              A future where every individual in India has the knowledge, tools, and motivation
              to take control of their health, resulting in a significant increase in the nation's
              Health-Adjusted Life Expectancy and overall well-being.
            </p>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-wealthy-dark mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join us in transforming India's health landscape, one preventive action at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hale-score"
              className="bg-wealthy-highlight text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              Calculate Your HALE
            </Link>
            <Link
              to="/features"
              className="bg-wealthy-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
