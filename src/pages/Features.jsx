import { Link } from 'react-router-dom'
import FeatureBox from '../components/FeatureBox'

const Features = () => {
  const features = [
    {
      icon: '📊',
      title: 'HALE Calculator',
      description: 'Calculate your Health-Adjusted Life Expectancy and see how preventive actions can add healthy years to your life.'
    },
    {
      icon: '🔍',
      title: 'Risk Test',
      description: 'Comprehensive assessment of your health risks based on lifestyle, diet, exercise, and stress factors.'
    },
    {
      icon: '✨',
      title: 'Micro-Habit Engine',
      description: 'Build sustainable health habits one small action at a time with our curated micro-habit library.'
    },
    {
      icon: '🍎',
      title: 'Diet Coach',
      description: 'AI-powered nutrition recommendations including healthy swaps, canteen suggestions, and mood-based food choices.'
    },
    {
      icon: '😴',
      title: 'Sleep Debt Meter',
      description: 'Track your sleep patterns and understand your sleep debt to improve rest quality and duration.'
    },
    {
      icon: '😊',
      title: 'Mood Tracker',
      description: 'Monitor your emotional well-being and identify patterns that affect your overall health.'
    },
    {
      icon: '💧',
      title: 'Hydration Monitor',
      description: 'Stay on top of your daily water intake with smart reminders and progress tracking.'
    },
    {
      icon: '🗺️',
      title: 'Health Map',
      description: 'Visualize your health journey and see how different habits contribute to your overall well-being.'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-wealthy-dark mb-4">Our Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to help you take control of your health and increase your Health-Adjusted Life Expectancy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your preventive health journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hale-score"
              className="bg-wealthy-highlight text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              Calculate Your HALE
            </Link>
            <Link
              to="/risk-test"
              className="bg-wealthy-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              Take Risk Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
