import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import { quizData } from '../data/quizData';

function Quiz({ onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lives, setLives] = useState(0);
  
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setLives(lives + 1);
    }
    
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz selesai
      setTimeout(() => {
        onFinish(isCorrect ? lives + 1 : lives);
      }, 1000);
    }
  };

  return (
    <div className="quiz-container">
      <div className="lives-counter">
        Nyawa: {lives}
      </div>
      <QuizQuestion 
        data={quizData[currentQuestionIndex]} 
        onAnswer={handleAnswer}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quizData.length}
      />
    </div>
  );
}

export default Quiz;