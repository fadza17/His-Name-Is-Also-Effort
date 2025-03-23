export const playSound = (soundPath) => {
    try {
      const audio = new Audio(soundPath);
      
      // Jalankan audio dan tangani potensi error
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Error playing sound:", error);
        });
      }
      
      return audio;
    } catch (error) {
      console.error("Failed to play sound:", error);
      return null;
    }
  };
  
  export const stopSound = (audioElement) => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  };