import React, { useState, useEffect, useRef } from 'react';
import { feedbackSounds } from '../data/quizData';

function QuizQuestion({ data, onAnswer, currentQuestion, totalQuestions }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const audioRef = useRef(null);
  const feedbackAudioRef = useRef(null);
  
  useEffect(() => {
    // Putar audio pertanyaan
    audioRef.current = new Audio(data.song);
    
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Error playing quiz audio:", error);
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if (feedbackAudioRef.current) {
        feedbackAudioRef.current.pause();
        feedbackAudioRef.current.currentTime = 0;
      }
    };
  }, [data.song]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const isCorrect = option === data.correctAnswer;
    
    // Hentikan audio pertanyaan untuk menghindari tumpang tindih
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    // Putar suara feedback dengan cara yang lebih konsisten
    try {
      // Pastikan feedbackAudioRef bersih
      if (feedbackAudioRef.current) {
        feedbackAudioRef.current.pause();
        feedbackAudioRef.current.currentTime = 0;
      }
      
      // Buat audio baru untuk feedback
      feedbackAudioRef.current = new Audio(isCorrect ? feedbackSounds.correct : feedbackSounds.wrong);
      
      // Log untuk debugging
      console.log("Playing feedback sound:", isCorrect ? "correct" : "wrong");
      console.log("Sound path:", isCorrect ? feedbackSounds.correct : feedbackSounds.wrong);
      
      // Tambahkan event listener untuk menangani error
      feedbackAudioRef.current.addEventListener('error', (e) => {
        console.error("Error playing feedback sound:", e);
      });
      
      // Mainkan suara
      feedbackAudioRef.current.play().catch(error => {
        console.error("Failed to play feedback sound:", error);
      });
    } catch (error) {
      console.error("Error setting up feedback sound:", error);
    }
    
    // Perlambat transisi ke pertanyaan berikutnya untuk memastikan suara sempat diputar
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedOption(null);
    }, 2000); // Diperpanjang untuk memberi waktu audio diputar
  };

  return (
    <div className="quiz-question">
      <div className="question-counter">
        Pertanyaan {currentQuestion} dari {totalQuestions}
      </div>
      <div className="question-image-container">
        <img src={data.image} alt="Quiz" className="question-image" />
      </div>
      <h2 className="question-text">{data.question}</h2>
      <div className="options-container">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option 
              ? option === data.correctAnswer 
                ? 'correct' 
                : 'incorrect' 
              : ''}`}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;