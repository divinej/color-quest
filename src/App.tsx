import './App.css'
import { Button } from './components/ui/button'
import { NavLink } from 'react-router';
import { useOutletContext } from 'react-router';

function App() {
  const context = useOutletContext<any>();
  return (
    <>
      <h1 className='text-5xl font-bold font-primary mb-24 mt-3'>Color Quest</h1>
      <div className="grid grid-cols-1 gap-8 justify-items-center  ">
        <Button asChild>
          <NavLink to="start_game" data-testid="newGameButton">New Game</NavLink>
        </Button>
        <Button asChild>
          <NavLink to="highscore">High Score</NavLink>
        </Button>
        <Button onClick={() => context.setScore(0)}> Reset</Button>
        <Button asChild>
          <NavLink to="rules">Rules</NavLink>
        </Button>
      </div>
    </>
  )
}

export default App
