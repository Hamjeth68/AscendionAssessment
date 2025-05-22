# Mobile Assessment

This project implements three challenges:
1. Calculator that adds two numbers
2. Responsive navbar with hamburger menu
3. Two Sum II algorithm implementation

## Technologies Used
- React Native
- TypeScript
- React Navigation
- React Native Paper (Material Design)
- Context API (State Management)
- React Native Responsive Fontsize

## How to Run

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install


## 📋 Project Structure
AeonAssessment/
src/
├── components/           # Reusable UI components
│   ├── Calculator/      # Challenge 1 - Calculator component
│   ├── Navbar/         # Challenge 2 - Navigation component
│   └── TwoSum/         # Challenge 3 - Algorithm component
├── context/            # Context API providers
│   └── AppContext.tsx  # Global state management
├── screens/            # Screen components
│   ├── HomeScreen.tsx
│   ├── CalculatorScreen.tsx
│   ├── NavbarScreen.tsx
│   └── TwoSumScreen.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── algorithms.ts   # Two Sum algorithm
└── App.tsx            # Main application component