# Boilerexams Application Project

## Tech Stack
* React
* Vite
* JavaScript
* CSS
* KaTeX (for LaTeX rendering)
* Vercel (deployment)

## File Overview
src/api/question.js
* Hardcoded question IDs used to build the quiz
* fetchQuestion helper function that retrieves question data from the API

api/questions/[id].js 
* Added to support the deployed version of the app.
* Frontend makes requests to /api/questions/:id, and this function forwards them to the Boilerexams API and returns the response.
* I added this after deploying to Vercel as it was only working locally before. Used AI to debug that.

src/components/Question.jsx
* Renders the question text, answer choices, visual feedback for answer state (ex. green on correct)
* Receives all data from App.jsx.

src/components/MathRender.jsx
* Handles rendering Markdown content that includes LaTeX

src/App.jsx
* Fetches questions on load
* Tracks the current question
* Stores selected answers
* Handles submission and review state
* Calculates and displays the final score
* Allows restarting the quiz
* All core application state and logic

src/App.css and src/index.css
* Contain global and feature-specific styling

## AI Usage
* Understanding how to render LaTeX math correctly using KaTeX (this was my first time working with LaTeX in a React application)
* Debugging deployment issues related to CORS and understanding how to use a Vercel serverless function as an API proxy. Not really an issue locally but after deployed to Vercel.
* Styling ideas such as spacing, colors, and simple hover/transition effects for buttons and answer choices

## Running the Project Locally

To run the project locally:
```bash
git clone https://github.com/ishana-d/boilerexams.git
cd boilerexams
npm install
npm run dev
```

The app will be available at the local URL shown in the terminal (typically http://localhost:5173).

## Deployed Version

Click here:
<https://boilerexams-r1y4.vercel.app/>
