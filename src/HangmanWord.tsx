
type HangmanWordProps = {
    wordToGuess: string,
    guessedLetters: string[]
}

const HangmanWord = ({wordToGuess, guessedLetters} : HangmanWordProps) => {
    return (
        <div className="flex uppercase font-mono gap-2 font-bold text-4xl">
            
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} className="border-b-4 border-black">
                    <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord
