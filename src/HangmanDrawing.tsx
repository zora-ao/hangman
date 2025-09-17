const HEAD = (
    <div
    className="h-[25px] w-[25px] top-[30px] -right-[10px] rounded-full border-2 border-black absolute">
    </div>
);

const BODY = (
    <div
    className="h-[50px] w-[4px] bg-black absolute right-0 top-[55px]">

    </div>
);

const LEFT_ARM = (
    <div
    className="h-[30px] w-[4px] bg-black absolute -right-[10px] top-[55px] rotate-45">

    </div>
);

const RIGHT_ARM = (
    <div
    className="h-[30px] w-[4px] bg-black absolute right-[10px] top-[55px] -rotate-45">

    </div>
);

const LEFT_LEEG = (
    <div
    className="h-[30px] w-[4px] bg-black absolute -right-[10px] top-[100px] -rotate-45">

    </div>
);

const RIGHT_LEEG = (
    <div
    className="h-[30px] w-[4px] bg-black absolute right-[10px] top-[100px] rotate-45">

    </div>
);

type HangmanDrawingProps = {
    wrongGuess: number
}

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEEG, RIGHT_LEEG]

const HangmanDrawing = ({wrongGuess} : HangmanDrawingProps) => {
    return (
        <div className='relative'>
            {BODY_PARTS.slice(0, wrongGuess)}
            <div className="h-[30px] w-[5px] bg-black right-0 top-0 absolute"></div>
            <div className="w-[80px] h-[5px] ml-[75px] bg-black"></div>
            <div className="h-[200px] w-[5px] bg-black mx-auto"></div>
            <div className='h-[5px] w-[150px] bg-black'></div>
        </div>
    )
}

export default HangmanDrawing
