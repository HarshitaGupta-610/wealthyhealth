# WealthyHealth

A preventive-health platform built around the theme: **"Increasing India's Health-Adjusted Life Expectancy (HALE) through self-driven preventive actions."**

## 🚀 Features

- **HALE Calculator**: Calculate your Health-Adjusted Life Expectancy and see how preventive actions can add healthy years
- **Risk Test**: Comprehensive health risk assessment with personalized recommendations
- **Micro-Habits**: Build sustainable health habits one small action at a time
- **Diet Coach**: AI-powered nutrition recommendations
- **Progress Reports**: Track your health journey with detailed analytics
- **Preventive Health Education**: Learn about the importance of preventive healthcare

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **React Router** - Navigation
- **Recharts** - Data visualization

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Ensure your logo is accessible:
   - **Important**: Vite serves static files from the `public` folder
   - Move your logo from `Images/Logo.png` to `public/Images/Logo.png`
   - Or create a symlink/copy: The logo must be accessible at `/Images/Logo.png` when the app runs
   - The logo is used as both favicon and navbar logo

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
WealthyHealth/
├── public/
│   └── Images/
│       └── Logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── FeatureBox.jsx
│   │   └── RiskBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Halescore.jsx
│   │   ├── RiskTest.jsx
│   │   ├── MicroHabits.jsx
│   │   ├── DietCoach.jsx
│   │   ├── Reports.jsx
│   │   ├── PreventiveHealth.jsx
│   │   ├── About.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Theme Colors

- **Dark Blue**: `#0a1a3f`
- **White**: `#ffffff`
- **Highlight**: `#1e3a8a`

## 📄 Pages

1. **Home** - Hero section with CTAs and feature highlights
2. **Features** - Overview of all platform features
3. **HALE Score** - Calculator with form and comparison charts
4. **Risk Test** - Multi-step questionnaire with risk assessment
5. **Micro-Habits** - Habit library with localStorage persistence
6. **Diet Coach** - Nutrition recommendations and meal suggestions
7. **Reports** - Weekly progress with charts and insights
8. **Preventive Health** - Educational content about preventive healthcare
9. **About** - Mission, vision, and platform information
10. **Login** - Authentication page (prototype)

## 🔧 Configuration

The logo path is configured in:
- `index.html` (favicon)
- `src/components/Navbar.jsx` (navbar logo)
- `src/components/Footer.jsx` (footer logo)

Make sure the logo is accessible at `/Images/Logo.png` when running the app.

## 📱 Responsive Design

All pages are fully responsive and work on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🚀 Deployment

Build the project:
```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.

## 📝 Notes

- HALE calculation uses dummy logic for demonstration
- Risk test results are based on simplified scoring
- Micro-habits are saved to localStorage
- Reports use sample data
- Login functionality is a prototype

## 🎯 Future Enhancements

- Backend integration for real data persistence
- User authentication and profiles
- Real-time health tracking
- Integration with health devices
- Advanced AI recommendations
- Social features and community

---

Copyright © 2026 WealthyHealth. All rights reserved.
