
type HangmanWordProps = {
    wordToGuess: string,
    guessedLetters: string[],
    reveal: boolean
}

const HangmanWord = ({wordToGuess, guessedLetters, reveal} : HangmanWordProps) => {
    return (
        <div className="flex uppercase font-mono gap-2 font-bold text-4xl">
            
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} className="border-b-4 border-black">
                    <span 
                    className={`${guessedLetters.includes(letter) || reveal ? "visible" : "invisible"}
                                ${!guessedLetters.includes(letter) && reveal ? "text-red-500" : "text-black"}`}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord
