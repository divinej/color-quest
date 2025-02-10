import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import GameLayout from './GameLayout.tsx'
import StartGame from './StartGame.tsx'
import HighScore from './HighScore.tsx'
import Rules from './Rules.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GameLayout />}>
          <Route index element={<App />} />
          <Route path="start_game" element={<StartGame />} />
            <Route path="highscore" element={<HighScore />} />
          <Route path="rules" element={<Rules />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
