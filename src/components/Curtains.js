import React, { useState, useEffect, useRef } from 'react';
import { curtainData } from '../data/quizData';
import { playSound, stopSound } from '../utils/audioUtils';

function Curtains({ lives, onSelectCurtain, openedCurtains = [] }) {
  const [hoveredCurtain, setHoveredCurtain] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedCurtainId, setSelectedCurtainId] = useState(null);
  const [shuffledCurtains, setShuffledCurtains] = useState([]);
  const audioRef = useRef(null);

  // Initialize shuffled curtains once when component mounts
  useEffect(() => {
    // Create a shuffled array but save it in state to keep it consistent
    setShuffledCurtains([...curtainData].sort(() => 0.5 - Math.random()));
    
    // Cleanup function to stop any playing audio when component unmounts
    return () => {
      if (audioRef.current) {
        stopSound(audioRef.current);
      }
    };
  }, []);

  const handleCurtainClick = (curtainId) => {
    // Jangan lakukan apa-apa jika tirai sudah dibuka
    if (openedCurtains.includes(curtainId)) {
      return;
    }
    
    // Jika tirai belum dibuka dan masih punya nyawa
    if (lives > 0) {
      // Hentikan audio tirai sebelumnya jika ada
      if (audioRef.current) {
        stopSound(audioRef.current);
      }
      
      // Putar sound tirai yang dipilih
      const curtain = curtainData.find(item => item.id === curtainId);
      audioRef.current = playSound(curtain.sound);
      
      setSelectedCurtainId(curtainId);
      setShowConfirmation(true);
    }
  };

  const confirmSelection = () => {
    setShowConfirmation(false);
    // Kita tidak menghentikan audio disini karena akan terus diputar saat transisi ke Reward
    onSelectCurtain(selectedCurtainId);
  };

  const cancelSelection = () => {
    // Hentikan audio saat membatalkan
    if (audioRef.current) {
      stopSound(audioRef.current);
    }
    
    setSelectedCurtainId(null);
    setShowConfirmation(false);
  };

  return (
    <div className="curtains-container">
      <h2>Pilih Tirai Misterimu!</h2>
      <p className="lives-info">Kamu punya {lives} kesempatan untuk membuka tirai</p>
      
      {openedCurtains.length > 0 && (
        <div className="opened-curtains-info">
          <p>Tirai yang sudah dibuka: {openedCurtains.map(id => {
            const curtain = curtainData.find(c => c.id === id);
            return curtain ? curtain.destination : '';
          }).join(', ')}</p>
        </div>
      )}
      
      <div className="curtains-grid">
        {shuffledCurtains.map((curtain, index) => (
          <div 
            key={curtain.id}
            className={`curtain 
              ${hoveredCurtain === curtain.id ? 'hovered' : ''} 
              ${openedCurtains.includes(curtain.id) ? 'opened' : ''}`
            }
            onMouseEnter={() => setHoveredCurtain(curtain.id)}
            onMouseLeave={() => setHoveredCurtain(null)}
            onClick={() => handleCurtainClick(curtain.id)}
          >
            <div className="curtain-number">{index + 1}</div>
            {openedCurtains.includes(curtain.id) && (
              <div className="opened-label">Sudah Dibuka</div>
            )}
          </div>
        ))}
      </div>

      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <h3>Apakah kamu yakin?</h3>
            <p>Mau membuka tirai ini dan bukan tirai lainnya?</p>
            <div className="confirmation-buttons">
              <button onClick={cancelSelection}>Tidak, pilih lagi</button>
              <button onClick={confirmSelection}>Ya, saya yakin!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Curtains;