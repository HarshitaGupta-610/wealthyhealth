import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const MicroHabits = () => {
  const [habits, setHabits] = useState([
    { id: 1, title: 'Drink More Water', description: 'Drink 8 glasses of water daily', icon: '💧', added: false },
    { id: 2, title: '10-Minute Walk', description: 'Take a 10-minute walk every day', icon: '🚶', added: false },
    { id: 3, title: '5-Minute Stretching', description: 'Do 5 minutes of stretching exercises', icon: '🧘', added: false },
    { id: 4, title: 'No Sugar After 8 PM', description: 'Avoid sugary foods after 8 PM', icon: '🚫', added: false },
    { id: 5, title: 'Morning Meditation', description: '5 minutes of morning meditation', icon: '🧘‍♀️', added: false },
    { id: 6, title: 'Stand Every Hour', description: 'Stand up and move every hour', icon: '🦵', added: false },
    { id: 7, title: 'Eat a Fruit', description: 'Eat at least one fruit daily', icon: '🍎', added: false },
    { id: 8, title: 'Deep Breathing', description: '3 deep breathing exercises', icon: '🫁', added: false },
    { id: 9, title: 'Limit Screen Time', description: 'Reduce screen time before bed', icon: '📱', added: false },
    { id: 10, title: 'Gratitude Journal', description: 'Write 3 things you\'re grateful for', icon: '📝', added: false },
    { id: 11, title: 'Take the Stairs', description: 'Use stairs instead of elevator', icon: '🪜', added: false },
    { id: 12, title: 'Green Tea', description: 'Replace one coffee with green tea', icon: '🍵', added: false },
  ])

  const [myRoutine, setMyRoutine] = useState([])

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('wealthyhealth-routine')
    if (saved) {
      const savedHabits = JSON.parse(saved)
      setMyRoutine(savedHabits)
      // Update habits state to reflect saved routine
      setHabits(prevHabits =>
        prevHabits.map(habit => ({
          ...habit,
          added: savedHabits.some(sh => sh.id === habit.id),
        }))
      )
    }
  }, [])

  const toggleHabit = (habit) => {
    const isAdded = myRoutine.some(h => h.id === habit.id)
    
    if (isAdded) {
      // Remove from routine
      const updated = myRoutine.filter(h => h.id !== habit.id)
      setMyRoutine(updated)
      localStorage.setItem('wealthyhealth-routine', JSON.stringify(updated))
    } else {
      // Add to routine
      const updated = [...myRoutine, habit]
      setMyRoutine(updated)
      localStorage.setItem('wealthyhealth-routine', JSON.stringify(updated))
    }

    // Update habits state
    setHabits(prevHabits =>
      prevHabits.map(h =>
        h.id === habit.id ? { ...h, added: !h.added } : h
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-wealthy-dark mb-4">Micro-Habits</h1>
          <p className="text-xl text-gray-600">
            Small, sustainable actions that compound into significant health improvements
          </p>
        </div>

        {/* My Routine Section */}
        {myRoutine.length > 0 && (
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-wealthy-dark to-wealthy-highlight text-white">
              <h2 className="text-2xl font-semibold mb-4">My Routine ({myRoutine.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {myRoutine.map((habit) => (
                  <div
                    key={habit.id}
                    className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <span className="text-2xl mr-2">{habit.icon}</span>
                      <span className="font-medium">{habit.title}</span>
                    </div>
                    <button
                      onClick={() => toggleHabit(habit)}
                      className="text-white hover:text-red-200 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* All Habits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {habits.map((habit) => (
            <Card
              key={habit.id}
              className={`cursor-pointer transition-all duration-200 ${
                habit.added
                  ? 'bg-green-50 border-2 border-green-500'
                  : 'hover:shadow-lg hover:border-wealthy-highlight'
              }`}
              onClick={() => toggleHabit(habit)}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{habit.icon}</div>
                <h3 className="text-lg font-semibold text-wealthy-dark mb-2">{habit.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{habit.description}</p>
                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-colors duration-200 ${
                    habit.added
                      ? 'bg-green-500 text-white'
                      : 'bg-wealthy-highlight text-white hover:bg-opacity-90'
                  }`}
                >
                  {habit.added ? '✓ Added to Routine' : 'Add to My Routine'}
                </button>
              </div>
            </Card>
          ))}
        </div>

        {myRoutine.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600">Select habits above to build your personalized routine</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MicroHabits
