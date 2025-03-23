import React, { useEffect, useState, useRef } from 'react';
import { curtainData } from '../data/quizData';
import { playSound } from '../utils/audioUtils';
import confetti from 'canvas-confetti';

function Reward({ curtainId, onBackToCurtains, onBackToHome, hasMoreLives }) {
  const [reward, setReward] = useState(null);
  const [isRevealing, setIsRevealing] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Find the reward based on curtainId
    const selectedReward = curtainData.find(item => item.id === curtainId);
    
    if (selectedReward) {
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Play sound with proper error handling
      if (selectedReward.sound) {
        audioRef.current = playSound(selectedReward.sound);
      }
      
      // Animation timing
      setTimeout(() => {
        setIsRevealing(false);
        setReward(selectedReward);
        // Stop the curtain audio when we show the reward content
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 2000);
    }
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [curtainId]);

  // Fungsi untuk menangani klik tombol
  const handleBackToCurtains = () => {
    // Pastikan audio berhenti sebelum kembali ke pilihan tirai
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onBackToCurtains();
  };

  const handleBackToHome = () => {
    // Pastikan audio berhenti sebelum kembali ke home
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onBackToHome();
  };

  return (
    <div className="reward-container">
      {isRevealing ? (
        <div className="reveal-animation">
          <div className="curtain-opening"></div>
          <h2>Membuka tirai...</h2>
        </div>
      ) : reward ? (
        <div className="reward-content">
          <h2>Selamat! 🎉</h2>
          <div className="destination">
            <h3>{reward.destination}</h3>
            
            {/* Tambahkan gambar destinasi */}
            <div className="destination-image-container">
              <img 
                src={reward.image} 
                alt={reward.destination} 
                className="destination-image" 
              />
            </div>
            
            <div className="challenge-card">
              <h4>Challenge:</h4>
              <p>{reward.challenge}</p>
            </div>
          </div>
          <div className="reward-buttons">
            {hasMoreLives ? (
              <>
                <button className="continue-button" onClick={handleBackToCurtains}>
                  Buka Tirai Lainnya ({hasMoreLives ? "masih punya nyawa" : "0 nyawa"})
                </button>
                <button className="home-button" onClick={handleBackToHome}>
                  Kembali ke Home
                </button>
              </>
            ) : (
              <button className="home-button" onClick={handleBackToHome}>
                Kembali ke Home
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="loading">Loading reward...</div>
      )}
    </div>
  );
}

export default Reward;