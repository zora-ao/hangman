const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

type HangmanKeyboardProps = {
    disabled?: boolean,
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

const HangmanKeyboard = ({disabled, activeLetters, inactiveLetters,  addGuessedLetter} : HangmanKeyboardProps) => {

    return (
        <div className="flex flex-wrap gap-2 p-2">
            {KEYS.map((letter, index) => {
                const isActive = activeLetters.includes(letter);
                const isInactive = inactiveLetters.includes(letter);
                return (
                    <button 
                    disabled={disabled || isActive || isInactive}
                    onClick={() => addGuessedLetter(letter)}
                    className={`${isActive ? "bg-blue-400" : ""} ${isInactive ? "opacity-30" : ""} hover:bg-blue-400 focus:outline-1 focus:outline-blue-950 border uppercase font-bold text-xl md:text-2xl w-[30px] h-[30px] md:h-[50px] md:w-[50px] rounded`} key={index}>
                        {letter}
                    </button>
                )
            })}
        </div>
    );
}

export default HangmanKeyboard
