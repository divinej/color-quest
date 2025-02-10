import { useEffect, useState } from "react";
import ColorBox from "./components/colorBox";
import { useToast } from "@/hooks/use-toast";
import { useOutletContext } from "react-router";


const colors: string[] = ['rgb(255, 107, 107)', 'rgb(78, 205, 196)', 'rgb(37, 141, 141)', 'rgb(76, 175, 80)', 'rgb(26, 83, 92)', 'rgb(132, 94, 194)'];
let randomNumber: number = 0;

const shuffle = (array: string[]) => {
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};


const StartGame = () => {
    const [gameScore, setScore, highScore, setHighScore] = useOutletContext<[number, React.Dispatch<React.SetStateAction<number>>, number, React.Dispatch<React.SetStateAction<number>>]>();
    
    const [colorOptions, setColor] = useState(colors);
    const [chosenColor, setChosenColor] = useState(colors[randomNumber]);
    const { toast } = useToast();
    const [isDisabled, setDisabled] = useState(true);
    const [animation , setAnimation] = useState(true);


    useEffect(() => {
        randomNumber = Math.round(Math.random() * (+colors.length - 1));
        setChosenColor(colors[randomNumber]);
        setDisabled(true);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            const shuffledColors = shuffle(colors);
            setColor(shuffledColors);
            setDisabled(false);
            setAnimation(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [chosenColor]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        setDisabled(true);
        setAnimation(true);
        if (e.currentTarget.style.backgroundColor === chosenColor) {
            toast({
                variant: "default",
                title: "You win!",
                description: "Correct guess",
              });
                setScore((prev:number) => prev + 5);

                if (gameScore > highScore) {
                    setHighScore(gameScore);
                }
              randomNumber = Math.round(Math.random() * (+colors.length - 1));
              setChosenColor(colors[randomNumber]);
        } else {
            toast({
                variant: "destructive",
                title: "You Loose!",
                description: "Wrong guess",
              });
              setScore((prev:number) => prev - 5);
              randomNumber = Math.round(Math.random() * (+colors.length - 1));
              setChosenColor(colors[randomNumber]);
              
        }
    }
    return (
        <>
            <h1 className='text-5xl font-bold font-primary mt-3 mb-24'>Game Score: {gameScore}</h1>
            <div className="grid grid-cols-2 md:grid-cols-[160px_160px_160px] gap-4 place-content-center">
                {
                   colorOptions.map((color, index) => ( 
                    color === chosenColor && animation == true ? <ColorBox animate="animate-pulse" disabled={isDisabled} key={index} boxColor={chosenColor} click={handleClick} /> :
                    <ColorBox key={index} boxColor={color} click={handleClick} disabled={isDisabled}/>
                   ))
                }
            </div>  
        </>
    )
}

export default StartGame;   