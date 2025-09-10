# Copilot Instructions for cronos

## Project Overview
This is a React + Vite project for managing and timing usage of machines, with a UI for creating and tracking multiple named timers (cronómetros). The app uses Tailwind CSS for styling and React Icons for UI elements.

## Key Components & Data Flow
- **App.jsx**: Main entry point. Manages the list of timers (`cronometers`) and the input for new timer names. Passes state and handlers to child components.
- **NewCrono.jsx**: Input form for creating new timers. Updates parent state via props.
- **Dashboard.jsx**: Renders a list of `Crono` components, one for each timer in state.
- **Crono.jsx**: Individual timer logic. Handles play, pause, stop, and reset actions using React state and intervals. Displays formatted time and controls.

## Patterns & Conventions
- **State Management**: Timers are managed in the parent (`App.jsx`) and passed down. Each `Crono` manages its own running state and elapsed time.
- **Component Communication**: Props are used for all parent-child communication. No context or external state libraries are used.
- **Timer Logic**: Each timer uses `useRef` to store its interval ID, ensuring intervals are properly cleared to avoid memory leaks.
- **Styling**: Tailwind CSS utility classes are used throughout for layout and colors.
- **Icons**: React Icons are used for button visuals.

## Developer Workflows
- **Start Dev Server**: `npm run dev` (uses Vite)
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Lint**: `npm run lint` (ESLint with React rules)

## External Dependencies
- **React**: UI library
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **React Icons**: UI icons

## Example: Adding a New Timer
1. User enters a name in `NewCrono` and clicks the button.
2. `App.jsx` adds a new timer object to `cronometers` state.
3. `Dashboard.jsx` renders a new `Crono` with the given name and ID.
4. `Crono.jsx` manages its own timer logic and UI.

## Important Files
- `src/App.jsx`: App state and layout
- `src/components/NewCrono.jsx`: Timer creation
- `src/components/Dashboard.jsx`: Timer list
- `src/components/Crono.jsx`: Timer logic
- `vite.config.js`: Vite and Tailwind config
- `.eslintrc.cjs`: ESLint config

## Project-Specific Notes
- No backend or API integration; all state is local.
- No test files or test workflow present.
- No custom hooks or context usage.
- All timer logic is encapsulated in the `Crono` component.

---
If any section is unclear or missing, please provide feedback to improve these instructions.
