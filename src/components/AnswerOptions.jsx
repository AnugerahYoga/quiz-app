function AnswerOptions({ option, onAnswer, correctAnswer, selectedOption }) {
  let resultClass = "";

  if (selectedOption !== null) {
    if (option === correctAnswer) {
      resultClass = "correct";
    } else if (option === selectedOption) {
      resultClass = "incorrect";
    }
  }

  return (
    <button
      className={resultClass}
      disabled={selectedOption !== null}
      onClick={() => onAnswer(option)}
    >
      {option}
    </button>
  );
}

export default AnswerOptions;
