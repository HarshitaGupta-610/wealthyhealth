import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Halescore from './pages/Halescore'
import RiskTest from './pages/RiskTest'
import MicroHabits from './pages/MicroHabits'
import DietCoach from './pages/DietCoach'
import Reports from './pages/Reports'
import PreventiveHealth from './pages/PreventiveHealth'
import About from './pages/About'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/hale-score" element={<Halescore />} />
            <Route path="/risk-test" element={<RiskTest />} />
            <Route path="/micro-habits" element={<MicroHabits />} />
            <Route path="/diet-coach" element={<DietCoach />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/preventive-health" element={<PreventiveHealth />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
