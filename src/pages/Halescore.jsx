import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Card from '../components/Card'

const Halescore = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    exercise: '',
    diet: '',
    sleep: '',
    stress: '',
    smoking: '',
    alcohol: '',
  })

  const [results, setResults] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const calculateHALE = () => {
    // Dummy HALE calculation logic
    const baseHALE = 70 // Base HALE for India
    let currentHALE = baseHALE
    let improvedHALE = baseHALE

    const age = parseInt(formData.age) || 30
    const gender = formData.gender

    // Adjust for gender
    if (gender === 'male') {
      currentHALE += 2
      improvedHALE += 2
    } else if (gender === 'female') {
      currentHALE += 4
      improvedHALE += 4
    }

    // Current path adjustments (negative factors)
    if (formData.exercise === 'none') currentHALE -= 5
    if (formData.exercise === 'light') currentHALE -= 2
    if (formData.diet === 'poor') currentHALE -= 4
    if (formData.diet === 'moderate') currentHALE -= 2
    if (formData.sleep === 'poor') currentHALE -= 3
    if (formData.stress === 'high') currentHALE -= 3
    if (formData.smoking === 'yes') currentHALE -= 8
    if (formData.alcohol === 'heavy') currentHALE -= 4
    if (formData.alcohol === 'moderate') currentHALE -= 1

    // Improved path (with preventive actions)
    improvedHALE += 10 // Base improvement from preventive actions
    if (formData.exercise === 'none') improvedHALE += 3 // Improvement from starting exercise
    if (formData.exercise === 'light') improvedHALE += 2
    if (formData.diet === 'poor') improvedHALE += 4 // Improvement from better diet
    if (formData.diet === 'moderate') improvedHALE += 2
    if (formData.sleep === 'poor') improvedHALE += 3 // Improvement from better sleep
    if (formData.stress === 'high') improvedHALE += 3 // Improvement from stress management
    if (formData.smoking === 'yes') improvedHALE += 5 // Improvement from quitting
    if (formData.alcohol === 'heavy') improvedHALE += 3

    setResults({
      current: Math.max(50, Math.min(85, currentHALE)),
      improved: Math.max(60, Math.min(90, improvedHALE)),
      yearsAdded: Math.max(0, improvedHALE - currentHALE),
    })
  }

  const chartData = results
    ? [
        {
          name: 'Current Path',
          HALE: results.current.toFixed(1),
        },
        {
          name: 'Improved Path',
          HALE: results.improved.toFixed(1),
        },
      ]
    : []

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-wealthy-dark mb-4">HALE Calculator</h1>
          <p className="text-xl text-gray-600">
            Calculate your Health-Adjusted Life Expectancy and see the impact of preventive actions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card>
            <h2 className="text-2xl font-semibold text-wealthy-dark mb-6">Your Information</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); calculateHALE(); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Exercise Level</label>
                <select
                  name="exercise"
                  value={formData.exercise}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="none">None</option>
                  <option value="light">Light (1-2 times/week)</option>
                  <option value="moderate">Moderate (3-4 times/week)</option>
                  <option value="intense">Intense (5+ times/week)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Diet Quality</label>
                <select
                  name="diet"
                  value={formData.diet}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="poor">Poor</option>
                  <option value="moderate">Moderate</option>
                  <option value="good">Good</option>
                  <option value="excellent">Excellent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sleep Quality</label>
                <select
                  name="sleep"
                  value={formData.sleep}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="poor">Poor (&lt;6 hours)</option>
                  <option value="moderate">Moderate (6-7 hours)</option>
                  <option value="good">Good (7-8 hours)</option>
                  <option value="excellent">Excellent (8+ hours)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stress Level</label>
                <select
                  name="stress"
                  value={formData.stress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Smoking</label>
                <select
                  name="smoking"
                  value={formData.smoking}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alcohol Consumption</label>
                <select
                  name="alcohol"
                  value={formData.alcohol}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wealthy-highlight focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="none">None</option>
                  <option value="moderate">Moderate</option>
                  <option value="heavy">Heavy</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-wealthy-highlight text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
              >
                Calculate HALE
              </button>
            </form>
          </Card>

          {/* Results */}
          <div className="space-y-8">
            {results && (
              <>
                <Card>
                  <h2 className="text-2xl font-semibold text-wealthy-dark mb-4">Your HALE Results</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Current Path HALE</p>
                      <p className="text-3xl font-bold text-wealthy-dark">{results.current.toFixed(1)} years</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Improved Path HALE</p>
                      <p className="text-3xl font-bold text-green-700">{results.improved.toFixed(1)} years</p>
                    </div>
                    <div className="bg-wealthy-highlight text-white p-4 rounded-lg">
                      <p className="text-sm mb-1">Potential Years Added</p>
                      <p className="text-3xl font-bold">+{results.yearsAdded.toFixed(1)} years</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-xl font-semibold text-wealthy-dark mb-4">Comparison Chart</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="HALE" fill="#1e3a8a" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </>
            )}

            {!results && (
              <Card>
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600">Fill out the form and click "Calculate HALE" to see your results</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Halescore
