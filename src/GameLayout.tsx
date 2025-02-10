import { Outlet } from 'react-router';
import { Toaster } from "@/components/ui/toaster"
import Logo from '/Logo.png'
import { useState, useEffect } from 'react';


function useStickyState(defaultValue:number, name:string) {
  const [value, setValue] = useState(() => {
    if (
      typeof window === 'undefined' ||
      !window.localStorage
    ) {
      return defaultValue;
    }

    const persistedValue =
      window.localStorage.getItem(name);

    return persistedValue !== null
      ? JSON.parse(persistedValue)
      : defaultValue;
  });


  useEffect(() => {
    window.localStorage.setItem(
      name,
      JSON.stringify(value)
    );
  }, [name, value]);

  return [value, setValue];
}

const GameLayout = () => {
  const [gameScore, setScore] = useStickyState( 0,'GAMESCORE');
const [highScore, setHighScore] = useStickyState( 0,'HIGHSCORE');

  return (
    <>
        <Toaster />
        <header className='m-auto font-primary mb-6'>
            <a href="/" className='flex place-content-center'>
                <img src={Logo} className="logo" alt="Color Quest logo" />
            </a>
        </header>
       
          <main className='font-primary'>
            <Outlet context={[gameScore, setScore, highScore, setHighScore]}/>
          </main>
       
    </>
  )
}

export default GameLayout;