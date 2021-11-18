import React,{useState,useContext} from 'react';
import '../App.css';
import {Questions} from '../Helpers/QuestionBank';
import{QuizContext} from '../Helpers/Context';

function Quiz() {
    const{score,setScore,setGameState}=useContext(QuizContext)
    const[optionChosen,setOptionChosen] = useState('');
    const [currentQuestion,setCurrentQuestion] = useState(0);

    const nextQuestion=()=>{
        if( Questions[currentQuestion].answer === optionChosen){
             setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1)
    }
    const finishQuiz =()=>{
        if(optionChosen === Questions[currentQuestion].answer){
             setScore(score + 1);
            
        }
        setGameState('end')
    }
    return (
        <div className='quiz'>
            <h3>{Questions[currentQuestion].prompt}</h3>
            <div className='options'>
            <button onClick={()=>setOptionChosen('A')}>{Questions[currentQuestion].optionA}</button>
            <button onClick={()=>setOptionChosen('B')}>{Questions[currentQuestion].optionB}</button>
            <button onClick={()=>setOptionChosen('C')}>{Questions[currentQuestion].optionC}</button>
            <button onClick={()=>setOptionChosen('D')}>{Questions[currentQuestion].optionD}</button>
            </div>
            {currentQuestion === Questions.length - 1 ? <button onClick ={finishQuiz}>Finish Quiz</button> :<button onClick={nextQuestion}>Next</button>}
        </div>
    )
}

export default Quiz
