import { useState } from "react";
import economicsVocabulary from "./data/data";
import AnswerOptions from "./components/AnswerOptions";

const App = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentCard = economicsVocabulary[cardIndex];

  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    setSelectedOption(selectedAnswer);

    if (selectedOption !== null) {
      return;
    }

    if (selectedAnswer == currentCard.back) {
      setScore(score + 1);
    } else {
      if (score == 0) {
        setScore(0);
      } else {
        setScore(score - 1);
      }
    }

    setTimeout(() => {
      const randomCard = Math.floor(Math.random() * economicsVocabulary.length);
      setCardIndex(randomCard);
      setSelectedOption(null);
    }, 1000);
  };

  return (
    <main className="App">
      <header>
        <h1>Qiuz-App</h1>

        <span>
          Score <strong>{score}</strong>
        </span>
      </header>

      <div className="flashcard">
        <h2>{currentCard.front}</h2>
      </div>

      <div className="answers">
        {currentCard.option.map((option) => (
          <AnswerOptions
            key={option}
            option={option}
            onAnswer={handleAnswer}
            correctAnswer={currentCard.back}
            selectedOption={selectedOption}
          />
        ))}
      </div>

      <p className="game-hint">
        Every correct answers increase your score, Incorect answers decrease it
      </p>
    </main>
  );
};

export default App;
