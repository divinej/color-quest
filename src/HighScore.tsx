import { useOutletContext } from "react-router";
import { Button } from './components/ui/button';
import { NavLink } from 'react-router';

const HighScore = () => {       
    const context = useOutletContext<any>();       
    return (
        <div>
            <h1 className='text-5xl font-bold font-primary mb-24 mt-3'>Color Quest</h1>
            <p className="text-2xl font-medium">Your New Record is: {context.highScore}</p>

            <div className="flex gap-8 justify-center  pt-12">
                <Button asChild>
                    <NavLink to="/start_game">Start Game</NavLink>
                </Button>
                <Button asChild>
                    <NavLink to="/">Home</NavLink>
                </Button>
            </div>
        </div>
    )
}

export default HighScore;