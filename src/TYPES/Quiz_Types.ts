import React from "react"
export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
   
}


export type QuestionType = {
  
    correct_answer: string
     incorrect_answers: string[]
   question:string
    options:string[]

}


export type QuestionPropsType={
    questions:string
    options:string[]
    handlerSubmit:(e:React.FormEvent<EventTarget>,ans:string)=>void
}