import { useCallback, useEffect, useState, useRef } from "react"
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanWord from "./HangmanWord";
import Footer from "./Footer";

import relapseSong from './assets/snaptik_7439119275677224208_v2.mp4';

const App = () => {
  const wordToGuess = 'missu';
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const incorrectGuess = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));
  const isLosser = incorrectGuess.length >= 6; 

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLosser || isWinner) return

    setGuessedLetters(prevLetter => [...prevLetter, letter]);

  }, [guessedLetters, isWinner, isLosser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault();

      addGuessedLetter(key);

    }

    document.addEventListener('keypress', handler);

    return () => document.removeEventListener('keypress', handler);
    
  }, [guessedLetters])

  useEffect(() => {
    if (isWinner && videoRef.current) {
      videoRef.current.currentTime = 0; // restart from beginning
      videoRef.current.play();
    }
  }, [isWinner]);

  return (
    <div 
    className='md:w-[800px] w-full flex flex-col items-center mx-auto gap-8'>
      <div className="text-2xl text-center">
        {isWinner && "You win mother fucker"}
        {isLosser && "What a fuckin losser"}
      </div>

      {isWinner && (
        <video
          ref={videoRef}
          src={relapseSong}
          className="md:w-[400px] w-full rounded-lg absolute top-[100px] md:top-10 px-2"
          controls
        />
      )}
      
        <HangmanDrawing wrongGuess={incorrectGuess.length}  />
        <HangmanWord 
        wordToGuess={wordToGuess} 
        guessedLetters={guessedLetters}
        reveal={isLosser}
        />
        <HangmanKeyboard
        disabled={isWinner || isLosser}
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectGuess}
        addGuessedLetter={addGuessedLetter}
        />
        
        <Footer />
    </div>
  )
}

export default App
