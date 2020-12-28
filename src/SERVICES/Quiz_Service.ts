import {QuestionType} from "../TYPES/Quiz_Types"
export const GetQuizDetail=async function(totalQuestions:number,level:string){
    const res=await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let {results}=await res.json()
    let data:QuestionType[]
    const quiz:QuestionType[]=results.map((questionObj:QuestionType)=>
    {return({

             question:questionObj.question,
             correct_answer:questionObj.correct_answer,
             options:questionObj.incorrect_answers.concat(questionObj.correct_answer)
            
            
            }
             )})
    return(quiz)
    // console.log(results,"jsj")
}

