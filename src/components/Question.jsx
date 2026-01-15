import MathRender from "./MathRender";

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  showCorrect,
}) {
  const correctIndex = question.data.solution[0];

  return (
    <div>
      <div className="question-body">
        <MathRender content={question.data.body} />
      </div>

      <div className="answers">
        {question.data.answerChoices.map((choice) => {
          const isSelected = selectedAnswer === choice.index;
          const isCorrect = choice.index === correctIndex;
          const isWrong = showCorrect && isSelected && !isCorrect;

          let className = "answer-choice";
          if (isSelected) className += " selected";
          if (isCorrect && showCorrect) className += " correct";
          if (isWrong) className += " wrong";

          return (
            <button
              key={choice.id}
              className={className}
              onClick={() => onSelectAnswer(question.id, choice.index)}
            >
              <MathRender content={choice.body} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
