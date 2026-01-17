import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import RiskBar from '../components/RiskBar'

const RiskTest = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)

  const questions = [
    {
      id: 'diet',
      question: 'How would you rate your daily diet?',
      options: [
        { value: 'excellent', label: 'Excellent - Balanced, home-cooked meals' },
        { value: 'good', label: 'Good - Mostly healthy with occasional treats' },
        { value: 'moderate', label: 'Moderate - Mix of healthy and processed foods' },
        { value: 'poor', label: 'Poor - Mostly processed/fast food' },
      ],
    },
    {
      id: 'sleep',
      question: 'How many hours of sleep do you get on average?',
      options: [
        { value: 'excellent', label: '8+ hours regularly' },
        { value: 'good', label: '7-8 hours regularly' },
        { value: 'moderate', label: '6-7 hours' },
        { value: 'poor', label: 'Less than 6 hours' },
      ],
    },
    {
      id: 'exercise',
      question: 'How often do you engage in physical exercise?',
      options: [
        { value: 'excellent', label: 'Daily or 5+ times per week' },
        { value: 'good', label: '3-4 times per week' },
        { value: 'moderate', label: '1-2 times per week' },
        { value: 'poor', label: 'Rarely or never' },
      ],
    },
    {
      id: 'stress',
      question: 'How would you describe your stress levels?',
      options: [
        { value: 'low', label: 'Low - I manage stress well' },
        { value: 'moderate', label: 'Moderate - Some stress but manageable' },
        { value: 'high', label: 'High - Frequently stressed' },
        { value: 'very-high', label: 'Very High - Constant stress' },
      ],
    },
    {
      id: 'smoking',
      question: 'Do you smoke or use tobacco products?',
      options: [
        { value: 'no', label: 'No, never' },
        { value: 'occasional', label: 'Occasionally' },
        { value: 'regular', label: 'Yes, regularly' },
      ],
    },
    {
      id: 'alcohol',
      question: 'How often do you consume alcohol?',
      options: [
        { value: 'none', label: 'Never' },
        { value: 'occasional', label: 'Occasionally (1-2 times/month)' },
        { value: 'moderate', label: 'Moderately (1-2 times/week)' },
        { value: 'frequent', label: 'Frequently (3+ times/week)' },
      ],
    },
  ]

  const handleAnswer = (value) => {
    const newAnswers = {
      ...answers,
      [questions[currentStep].id]: value,
    }
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateRisk(newAnswers)
    }
  }

  const calculateRisk = (allAnswers) => {
    let riskScore = 0

    // Calculate risk score
    Object.values(allAnswers).forEach((answer) => {
      if (answer === 'poor' || answer === 'very-high' || answer === 'regular' || answer === 'frequent') {
        riskScore += 25
      } else if (answer === 'moderate' || answer === 'high' || answer === 'occasional') {
        riskScore += 15
      } else if (answer === 'good') {
        riskScore += 5
      }
    })

    const riskPercentage = Math.min(100, Math.max(0, riskScore))
    let riskLevel = 'Low'
    if (riskPercentage >= 60) {
      riskLevel = 'High'
    } else if (riskPercentage >= 30) {
      riskLevel = 'Moderate'
    }

    // Generate recommendations
    const recommendations = []
    if (allAnswers.diet === 'poor' || allAnswers.diet === 'moderate') {
      recommendations.push('Improve your diet by incorporating more fruits, vegetables, and whole grains. Reduce processed foods.')
    }
    if (allAnswers.sleep === 'poor' || allAnswers.sleep === 'moderate') {
      recommendations.push('Aim for 7-9 hours of quality sleep. Establish a consistent sleep schedule.')
    }
    if (allAnswers.exercise === 'poor' || allAnswers.exercise === 'moderate') {
      recommendations.push('Start with 10-minute daily walks and gradually increase to 150 minutes of moderate exercise per week.')
    }
    if (allAnswers.stress === 'high' || allAnswers.stress === 'very-high') {
      recommendations.push('Practice stress management techniques like meditation, deep breathing, or yoga.')
    }
    if (allAnswers.smoking === 'regular' || allAnswers.smoking === 'occasional') {
      recommendations.push('Consider quitting smoking. Seek support from healthcare professionals or support groups.')
    }
    if (allAnswers.alcohol === 'frequent' || allAnswers.alcohol === 'moderate') {
      recommendations.push('Limit alcohol consumption to recommended guidelines (1-2 drinks per day for men, 1 for women).')
    }

    if (recommendations.length === 0) {
      recommendations.push('Continue maintaining your healthy lifestyle! Consider adding preventive health screenings.')
    }

    setResults({
      level: riskLevel,
      percentage: riskPercentage,
      recommendations,
    })
  }

  const resetTest = () => {
    setCurrentStep(0)
    setAnswers({})
    setResults(null)
  }

  if (results) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-wealthy-dark mb-4">Your Risk Assessment</h1>
              <RiskBar level={results.level} value={results.percentage} />
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-wealthy-dark mb-4">Personalized Recommendations</h2>
              <ul className="space-y-3">
                {results.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={resetTest}
                className="bg-wealthy-highlight text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
              >
                Retake Test
              </button>
              <Link
                to="/micro-habits"
                className="bg-wealthy-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
              >
                Explore Micro-Habits
              </Link>
              <Link
                to="/hale-score"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-wealthy-dark transition-colors duration-200"
              >
                Calculate HALE
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-wealthy-dark mb-4">Health Risk Test</h1>
          <p className="text-xl text-gray-600">
            Answer a few questions to assess your health risks
          </p>
        </div>

        <Card>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-wealthy-highlight h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-wealthy-dark mb-6">
            {questions[currentStep].question}
          </h2>

          <div className="space-y-3">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 border-2 border-gray-300 rounded-lg bg-white text-wealthy-dark hover:border-wealthy-highlight hover:bg-wealthy-highlight hover:bg-opacity-10 hover:text-wealthy-dark transition-all duration-200 font-medium"
              >
                {option.label}
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="mt-6 text-wealthy-highlight hover:underline"
            >
              ← Previous
            </button>
          )}
        </Card>
      </div>
    </div>
  )
}

export default RiskTest
