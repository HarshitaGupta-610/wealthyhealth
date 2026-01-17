import { Link } from 'react-router-dom'
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Card from '../components/Card'

const Reports = () => {
  // Sample weekly data
  const weeklyData = [
    { day: 'Mon', water: 6, sleep: 7, habits: 3 },
    { day: 'Tue', water: 8, sleep: 7.5, habits: 4 },
    { day: 'Wed', water: 7, sleep: 6.5, habits: 5 },
    { day: 'Thu', water: 9, sleep: 8, habits: 4 },
    { day: 'Fri', water: 8, sleep: 7, habits: 6 },
    { day: 'Sat', water: 7, sleep: 8.5, habits: 5 },
    { day: 'Sun', water: 8, sleep: 8, habits: 4 },
  ]

  const habitCompletion = [
    { name: 'Completed', value: 31, color: '#10b981' },
    { name: 'Missed', value: 9, color: '#ef4444' },
  ]

  const COLORS = ['#10b981', '#ef4444']

  const totalHabits = 40
  const completedHabits = 31
  const completionRate = Math.round((completedHabits / totalHabits) * 100)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-wealthy-dark mb-4">Your Health Reports</h1>
          <p className="text-xl text-gray-600">
            Track your progress and see how small habits add up
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="text-center">
              <div className="text-4xl mb-2">💧</div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Average Water Intake</h3>
              <p className="text-3xl font-bold text-wealthy-dark">7.6 glasses</p>
              <p className="text-sm text-gray-500 mt-1">Target: 8 glasses</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-4xl mb-2">😴</div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Average Sleep</h3>
              <p className="text-3xl font-bold text-wealthy-dark">7.4 hours</p>
              <p className="text-sm text-gray-500 mt-1">Target: 7-9 hours</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-4xl mb-2">✨</div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Habits Completed</h3>
              <p className="text-3xl font-bold text-wealthy-dark">{completionRate}%</p>
              <p className="text-sm text-gray-500 mt-1">{completedHabits} of {totalHabits} habits</p>
            </div>
          </Card>
        </div>

        {/* Weekly Progress Chart */}
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-wealthy-dark mb-6">Weekly Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="water" stroke="#3b82f6" name="Water (glasses)" />
              <Line type="monotone" dataKey="sleep" stroke="#8b5cf6" name="Sleep (hours)" />
              <Line type="monotone" dataKey="habits" stroke="#10b981" name="Habits Completed" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Habit Completion Pie Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-2xl font-semibold text-wealthy-dark mb-6">Habit Completion</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={habitCompletion}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {habitCompletion.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-wealthy-dark mb-6">This Week's Highlights</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">✓ Best Day</h3>
                <p className="text-gray-700">Friday - Completed 6 habits!</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">💧 Hydration</h3>
                <p className="text-gray-700">You met your water goal on 4 out of 7 days</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">😴 Sleep</h3>
                <p className="text-gray-700">Your best sleep was on Saturday (8.5 hours)</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">📈 Progress</h3>
                <p className="text-gray-700">You're on track! Keep up the great work.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Insights */}
        <Card className="mt-8 bg-gradient-to-r from-wealthy-dark to-wealthy-highlight text-white">
          <h2 className="text-2xl font-semibold mb-4">💡 Insights & Recommendations</h2>
          <ul className="space-y-2">
            <li>• Your water intake is slightly below target. Try setting hourly reminders.</li>
            <li>• Sleep quality is good, but aim for more consistent bedtimes.</li>
            <li>• You're doing great with habit completion! Consistency is key.</li>
            <li>• Consider adding 2-3 more micro-habits to your routine for even better results.</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default Reports
