import React,{useEffect, useState} from 'react';
import {getquzDetails} from "./services/Quiz-servics"
import { Questiontype} from "./services/type/quiz-type";
import QuestionCard from './component/QuestionCard';

import './App.css';

function App() {
  const [quiz, setquiz] = useState<Questiontype[]>([])
  const [step, setstep] = useState(0)
  const [Score, setScore] = useState(0)
  
  
  useEffect(()=>{
    async function fatchgit() {
      const question:Questiontype[] = await getquzDetails(5, 'easy')
      //console.log(question)
      setquiz(question)
    }
    fatchgit();
  },[])
  const handleSubmit=(e: React.FormEvent<EventTarget>, userAns:string)=>{
     
      e.preventDefault();
      //console.log(userAns)
      


      const currentQestion:Questiontype = quiz[step];
      console.log("correct And:"+ currentQestion.correct_answer+ "--user Selection "+ userAns )
      if(userAns === currentQestion.correct_answer){
        setScore(Score + 1)
      }
      if(step !== quiz.length - 1){
        setstep(step + 1);

      }else{
        alert("your Final Score is  "+ Score+ "out of:"+ quiz.length)
        setstep(0)
        setScore(0)
      }
      
  }
  if(!quiz?.length){
    return <h1>lloading ...</h1>
  }
  return (
    <div className="App">
      <h1 style={{}}>Quiz App</h1>
      <QuestionCard 

  
       options={quiz[step].option}
       question={quiz[step].question}
       callback={handleSubmit}

      
      />
    </div>
  );
}

export default App;