import React,{useContext} from 'react';
import {QuizContext} from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionBank';

function EndScreen() {
    const{score,setScore ,setGameState} = useContext(QuizContext);
    console.log(score)
    const startAgain = () =>{
        setGameState('menu');
        setScore(0);
    }
    return (
        <div className='end'>
            <h1>Quiz Finished</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={startAgain}>Start Again</button>
        </div>
    )
}

export default EndScreen
