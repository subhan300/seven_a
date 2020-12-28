import React,{useEffect,useState} from 'react';

import './App.css';
import {GetQuizDetail} from "./SERVICES/Quiz_Service"
import {Quiz,QuestionType} from "./TYPES/Quiz_Types" 
import QusetionCard from "./COMPONENTS/QuestionCard"
import { Console } from 'console';
function App() {


useEffect(()=>{
async function fetchData(){
  const questions:QuestionType[]=await GetQuizDetail(4,"easy");
  console.log(questions,"total array")
  SetQuiz(questions)

}
fetchData()




},[]);
let [marks,setMarks]=useState<number>(0)
let [quiz,SetQuiz]=useState<QuestionType[]>([]);
let[currentState,setCurrentState]=useState<number>(0)
console.log(marks,"marks")
let [Total,SetTotal]=useState<number>(0)
let [showResult,SetResult]=useState<boolean>(false)

if(!quiz.length)
return <h1>LOADING......</h1>
// console.log(quiz[currentState].correct_answer,"subhan")

const HandlerSubmit=(e:React.FormEvent<EventTarget>,ans:string)=>{
  console.log(ans,"ansdekh yeh wala")
e.preventDefault();
if(currentState<4){
  console.log(currentState,".................?")

 
 if(quiz[currentState].correct_answer==ans){

   setMarks(marks +=10)
   console.log(marks,"yeh kia karrha hai")
   console.log("yaha aya tou")
   console.log(quiz[currentState].correct_answer,"==",ans)
  //  SetTotal(Total +=marks)
   }
   else{setMarks(marks +=0)
    console.log("else mai ha")
  

   
  
}

SetTotal(Total +=marks)
console.log(Total,"total dekh")} 

if(currentState !== quiz.length-1){setCurrentState(++currentState)} 
else{
SetResult(true)}

}
if(showResult){
  return(<div><h1>result</h1>
  <h2>{marks}</h2></div>)
}


return(
    <div className="App">

      <QusetionCard  options={quiz[currentState].options} questions={quiz[currentState].question}    
      handlerSubmit={HandlerSubmit} />
      
    </div>
  )
}

export default App;
