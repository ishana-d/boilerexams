import { useEffect, useState } from "react";
import { QUESTION_IDS, fetchQuestion } from "./api/question";
import Question from "./components/Question";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const data = await Promise.all(
          QUESTION_IDS.map((id) => fetchQuestion(id))
        );
        setQuestions(data);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  function handleAnswer(questionId, choiceIndex) {
    if (submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: choiceIndex,
    }));
  }

  function calculateScore() {
    return questions.reduce((score, q) => {
      const correctIndex = q.data.solution[0];
      return answers[q.id] === correctIndex ? score + 1 : score;
    }, 0);
  }

  function handleStartOver() {
    setAnswers({});
    setSubmitted(false);
    setCurrentIndex(0);
  }

  if (loading) return <div className="app">Loading questions…</div>;
  if (!questions.length) return <div className="app">No questions found.</div>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="app">
      <div className="header">
        <div className="progress">
          {currentIndex + 1} of {questions.length}
        </div>
      </div>

      <div className="question">
        <Question
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id]}
          onSelectAnswer={handleAnswer}
          showCorrect={submitted || answers[currentQuestion.id] !== undefined}
          disabled={submitted}
        />
      </div>

      <div className="options">
        <button
          className="btn"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => i - 1)}
        >
          Previous
        </button>

        {currentIndex < questions.length - 1 ? (
          <button
            className="btn"
            onClick={() => setCurrentIndex((i) => i + 1)}
          >
            Next
          </button>
        ) : submitted ? (
          <button
            className="btn"
            onClick={handleStartOver}
          >
            Start over
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => setSubmitted(true)}
          >
            Submit
          </button>
        )}
      </div>

      {submitted && (
        <div className="score">
          Score: {calculateScore()} / {questions.length}
        </div>
      )}
    </div>
  );
}

export default App;