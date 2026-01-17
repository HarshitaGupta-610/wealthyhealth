import { Link } from 'react-router-dom'
import Card from '../components/Card'

const DietCoach = () => {
  const healthySwaps = [
    { from: 'White bread', to: 'Whole grain bread', benefit: 'More fiber, better digestion' },
    { from: 'Soda', to: 'Sparkling water with lemon', benefit: 'No added sugar, hydration' },
    { from: 'Fried snacks', to: 'Roasted nuts', benefit: 'Healthy fats, protein' },
    { from: 'Ice cream', to: 'Greek yogurt with berries', benefit: 'Probiotics, less sugar' },
    { from: 'Potato chips', to: 'Baked sweet potato chips', benefit: 'More nutrients, less oil' },
  ]

  const canteenSuggestions = [
    { meal: 'Breakfast', suggestion: 'Oatmeal with fruits and nuts', reason: 'Sustained energy, fiber' },
    { meal: 'Lunch', suggestion: 'Grilled chicken with brown rice and vegetables', reason: 'Balanced protein and carbs' },
    { meal: 'Snack', suggestion: 'Apple with peanut butter', reason: 'Fiber and healthy fats' },
    { meal: 'Dinner', suggestion: 'Dal with roti and salad', reason: 'Complete protein, fiber' },
  ]

  const moodBasedFoods = [
    { mood: 'Stressed', foods: ['Dark chocolate (70%+)', 'Green tea', 'Nuts', 'Berries'], reason: 'Magnesium and antioxidants help reduce stress' },
    { mood: 'Tired', foods: ['Banana', 'Whole grains', 'Lean protein', 'Water'], reason: 'Natural sugars and protein provide sustained energy' },
    { mood: 'Anxious', foods: ['Chamomile tea', 'Salmon', 'Yogurt', 'Leafy greens'], reason: 'Omega-3 and probiotics support mood regulation' },
    { mood: 'Low Energy', foods: ['Quinoa', 'Sweet potato', 'Eggs', 'Oranges'], reason: 'Complex carbs and vitamin C boost energy' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-wealthy-dark mb-4">AI-Powered Diet Coach</h1>
          <p className="text-xl text-gray-600">
            Personalized nutrition recommendations to improve your health and HALE
          </p>
        </div>

        {/* Healthy Swaps */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-wealthy-dark mb-6">Healthy Swaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthySwaps.map((swap, index) => (
              <Card key={index}>
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-3">🔄</span>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-red-500 line-through mr-2">{swap.from}</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-600 font-semibold ml-2">{swap.to}</span>
                    </div>
                    <p className="text-sm text-gray-600">{swap.benefit}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Canteen Suggestions */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-wealthy-dark mb-6">Canteen Meal Suggestions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {canteenSuggestions.map((item, index) => (
              <Card key={index}>
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🍽️</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-wealthy-dark mb-2">{item.meal}</h3>
                    <p className="text-lg text-gray-700 mb-2">{item.suggestion}</p>
                    <p className="text-sm text-gray-600">{item.reason}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mood-Based Food Choices */}
        <div>
          <h2 className="text-3xl font-semibold text-wealthy-dark mb-6">Mood-Based Food Choices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moodBasedFoods.map((moodFood, index) => (
              <Card key={index}>
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-wealthy-dark mb-3">
                    When you're feeling {moodFood.mood.toLowerCase()}
                  </h3>
                  <p className="text-gray-600 mb-4">{moodFood.reason}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-wealthy-dark mb-2">Recommended foods:</p>
                    <ul className="space-y-2">
                      {moodFood.foods.map((food, foodIndex) => (
                        <li key={foodIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{food}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-wealthy-dark to-wealthy-highlight text-white">
            <h2 className="text-2xl font-semibold mb-4">💡 Pro Tips</h2>
            <ul className="space-y-2">
              <li>• Eat a variety of colorful fruits and vegetables daily</li>
              <li>• Stay hydrated - aim for 8-10 glasses of water</li>
              <li>• Include protein in every meal for sustained energy</li>
              <li>• Plan your meals ahead to avoid unhealthy choices</li>
              <li>• Listen to your body's hunger and fullness cues</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DietCoach
