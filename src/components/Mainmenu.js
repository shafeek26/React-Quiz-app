import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Context';


function Mainmenu() {
    const {setGameState} = useContext(QuizContext);
    return (
        <div className='main'>
            <button onClick={()=>{setGameState('quiz')}}>Start Quiz</button>
        </div>
    )
}

export default Mainmenu;
