import React,{useState} from 'react'
import Mainmenu from './components/Mainmenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import './App.css'

import {QuizContext} from './Helpers/Context'

function App() {
  const[score,setScore] = useState(0);
  const[gameState,setGameState] = useState('menu')
  return (
    <div className='App'>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === 'menu' && <Mainmenu />}
      {gameState === 'quiz' && <Quiz />}
      {gameState === 'end' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
