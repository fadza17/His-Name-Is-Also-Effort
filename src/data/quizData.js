export const quizData = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/quiz1.jpeg`,
      question: "Pada episode berapa bucky dan tommy berciuman?",
      options: ["ep 1 s7", "ep 5 s7", "ep 4 s7", "ep 3 s7"],
      correctAnswer: "ep 4 s7",
      song: `${process.env.PUBLIC_URL}/sounds/quiz1.mp3`
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/quiz2.jpg`,
      question: "Pada urutan berapa Lagu chasing that feeling di playlist txt top 10 yang kamu kasih?",
      options: ["8", "5", "4", "7"],
      correctAnswer: "5",
      song: `${process.env.PUBLIC_URL}/sounds/quiz2.mp3`
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/quiz3.jpg`,
      question: "Berapa jumlah dimsum yang aku beliin kemarin?",
      options: ["8", "12", "10", "6"],
      correctAnswer: "10",
      song: `${process.env.PUBLIC_URL}/sounds/quiz3.mp3`
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/images/quiz4.jpeg`,
      question: "Pada episode berapa shorter wong meninggoy",
      options: ["9", "8", "12", "10"],
      correctAnswer: "9",
      song: `${process.env.PUBLIC_URL}/sounds/quiz4.mp3`
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/images/quiz5.jpg`,
      question: "Berapa menit durasi lagu imagination by shaun the sheep?",
      options: ["3 menit 37 detik", "3 menit 42 detik", "2 menit 55 detik", "4 menit 9 detik"],
      correctAnswer: "3 menit 37 detik",
      song: `${process.env.PUBLIC_URL}/sounds/quiz5.mp3`
    }
  ];
  
  export const curtainData = [
    {
      id: 1,
      destination: "Jalan di mall (Hartono, Amplaz, JCM)",
      challenge: "Jalan menyusuri mall dari ujung ke ujung atau mungkin jalan tanpa arah, masuk ke store, lihat-lihat tanpa beli, beli=opsional, cuma wisata mata, tanpa ngeluh cape or else, yang ngeluh dapet punishment traktir apapun yang diinginkan oleh pemenang",
      sound: `${process.env.PUBLIC_URL}/sounds/tirai1.mp3`,
      image: `${process.env.PUBLIC_URL}/images/destinasi1.jpg`
    },
    {
      id: 2,
      destination: "Jalan di Malioboro atau tempat alam lainnya",
      challenge: "Jalan dari ujung ke ujung tapi ga boleh duduk, atau duduk hanya 1 menit, kalah ada punishmentnya",
      sound: `${process.env.PUBLIC_URL}/sounds/tirai2.mp3`,
      image: `${process.env.PUBLIC_URL}/images/destinasi2.jpeg`
    },
    {
      id: 3,
      destination: "Nonton film",
      challenge: "Kita main batu gunting kertas, yang menang nentuin film. Challenge-nya selama film berjalan sampai selesai gaboleh ngerasa bosen, yang bosen duluan ada hukuman",
      sound: `${process.env.PUBLIC_URL}/sounds/tirai3.mp3`,
      image: `${process.env.PUBLIC_URL}/images/destinasi3.jpeg`
    },
    {
      id: 4,
      destination: "Nongkrong di angkringan depan rel kereta api Malioboro",
      challenge: "Apapun yang terjadi harus ngobrol, kalau semisal dead convo di salah satu orang, 1 menit ga mulai obrolan, orang tersebut kalah, hukumannya bayarin makan siang",
      sound: `${process.env.PUBLIC_URL}/sounds/tirai4.mp3`,
      image: `${process.env.PUBLIC_URL}/images/destinasi4.jpg`
    },
    {
      id: 5,
      destination: "Ke Kaliurang",
      challenge: "Menjelajahi Kaliurang, menikmati udara sejuk, dan foto-foto di spot instagramable. Yang gabisa foto aesthetic harus traktir es krim!",
      sound: `${process.env.PUBLIC_URL}/sounds/tirai5.mp3`,
      image: `${process.env.PUBLIC_URL}/images/destinasi5.jpg`
    }
  ];
  
  export const feedbackSounds = {
    correct: `${process.env.PUBLIC_URL}/sounds/correct.mp3`,
    wrong: `${process.env.PUBLIC_URL}/sounds/wrong.mp3`
  };