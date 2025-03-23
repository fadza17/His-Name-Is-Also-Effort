import React from 'react';
import './HomePage.css'; // Tambahkan file CSS terpisah untuk styling

function HomePage({ onStartGame }) {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="title-container">
          <h1 className="title">His Name Is Also Effort</h1>
          <div className="hearts-decoration">
            <span className="heart">💖</span>
            <span className="heart">✨</span>
            <span className="heart">💫</span>
            <span className="heart">💕</span>
            <span className="heart">✨</span>
          </div>
        </div>
        
        <div className="message-container">
          <div className="message-bubble">
            <p className="message-text">Sebelum kamu UTS bagaimana kalau kita healing atau jalan-jalan dulu bareng? Walaupun bukan pasangan tapi gada salahnya juga kan ngedate atau jalan-jalan bareng, hehehe <span className="emoji">😚</span> Biar otak fresh, hati senang, dan UTS pun bisa ditaklukkan dengan lancar!</p>
          </div>
          
          <div className="message-bubble">
            <p className="message-text">Tapii... aku punya cara seru buat nentuin ke mana kita bakal pergi! <span className="emoji">🎮💖</span></p>
          </div>
          
          <div className="game-description">
            <h3 className="subtitle">Aku udah bikin game spesial buat kamu:</h3>
            <ul className="feature-list">
              <li className="feature-item">
                <div className="feature-icon">❓</div>
                <div className="feature-text">Jawab 5 pertanyaan spesial dari aku</div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">🎁</div>
                <div className="feature-text">Setiap jawaban benar = 1 kesempatan membuka tirai misteri</div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">🚪</div>
                <div className="feature-text">Di balik tirai ada destinasi wisata + challenge seru yang harus kita lakukan!</div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">💡</div>
                <div className="feature-text">Kamu ga bakal tau isinya sampai kamu membukanya!</div>
              </li>
            </ul>
          </div>
          
          <div className="message-bubble highlight">
            <p className="message-text">Jadi, siap untuk main dan menemukan kejutan seru sebelum kita UTS? <span className="emoji">🥰</span></p>
          </div>
          
          <div className="message-bubble">
            <p className="message-text">Pilih tirai dengan baik, ya! Siapa tahu ada sesuatu yang lebih spesial menunggu di baliknya... <span className="emoji">💖✨</span></p>
          </div>
        </div>
        
        <div className="button-container">
          <button className="start-button" onClick={onStartGame}>
            <span className="button-text">Start Game</span>
            <span className="button-icon">🎮</span>
          </button>
        </div>
        
        <div className="decorations">
          <div className="decoration left">🌈</div>
          <div className="decoration right">🎀</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;