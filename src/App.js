import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import Curtains from './components/Curtains';
import Reward from './components/Reward';
import './styles.css';

function App() {
  const [gameState, setGameState] = useState('home');
  const [lives, setLives] = useState(0);
  const [selectedCurtain, setSelectedCurtain] = useState(null);
  const [openedCurtains, setOpenedCurtains] = useState([]);

  const startGame = () => {
    setGameState('quiz');
    setLives(0);
    setOpenedCurtains([]);
  };

  const finishQuiz = (totalLives) => {
    setLives(totalLives);
    setGameState('curtains');
  };

  const selectCurtain = (curtainId) => {
    setSelectedCurtain(curtainId);
    setGameState('reward');
  };

  const backToCurtains = () => {
    // Tambahkan tirai yang baru dibuka ke daftar
    setOpenedCurtains([...openedCurtains, selectedCurtain]);
    
    // Kurangi 1 nyawa setelah membuka tirai
    setLives(lives - 1);
    
    // Jika masih punya nyawa, kembali ke pilihan tirai
    // Jika tidak, kembali ke home
    if (lives > 1) {
      setGameState('curtains');
    } else {
      setGameState('home');
      setLives(0);
      setOpenedCurtains([]);
    }
    
    setSelectedCurtain(null);
  };

  const backToHome = () => {
    setGameState('home');
    setLives(0);
    setSelectedCurtain(null);
    setOpenedCurtains([]);
  };

  return (
    <div className="app">
      {gameState === 'home' && <HomePage onStartGame={startGame} />}
      {gameState === 'quiz' && <Quiz onFinish={finishQuiz} />}
      {gameState === 'curtains' && 
        <Curtains 
          lives={lives} 
          onSelectCurtain={selectCurtain} 
          openedCurtains={openedCurtains} 
        />
      }
      {gameState === 'reward' && 
        <Reward 
          curtainId={selectedCurtain} 
          onBackToCurtains={backToCurtains}
          onBackToHome={backToHome}
          hasMoreLives={lives > 1}
        />
      }
    </div>
  );
}

export default App;