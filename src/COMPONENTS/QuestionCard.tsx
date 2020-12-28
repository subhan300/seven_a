import React, { useState } from 'react'
import { QuestionPropsType } from "../TYPES/Quiz_Types"

const QuestionCard: React.FC<QuestionPropsType> = ({ questions, options, handlerSubmit }) => {

    console.log(questions, options)
    const [Value, setValue] = useState<string>("")
    console.log(Value, "valueoptins")
    const HandleSelection = (ev: any) => {
        console.log(ev.target.value, "hhh")
        setValue(ev.target.value)
    }

    return (
        <div className="question_container" style={{ display: "flex", 
        backgroundColor:"black",justifyContent: "center", border: "2px solid blue", height: "600px" }}>

            <div>

                <h1 style={{ color: "red", fontSize: "60px" }}>QUIZZ APP WITH PWS</h1>
                <div style={{
                    border: "2px solid green", height: "250px", display: "flex", justifyContent: "center",
                    alignItems: "center",backgroundColor:"blueviolet"
                    }}>

                    <div>
                        <div className="question" style={{marginTop:"39px",fontSize:"30px"}}> {questions}</div>

                        <form style={{marginTop:"39px"}} onSubmit={(e: React.FormEvent<EventTarget>) => { handlerSubmit(e, Value) }}>
                            {options.map((opt: string) => {
                                return (<label>
                                    <input type="radio" name="opt" value={opt} required
                                        checked={Value === opt} onChange={HandleSelection}></input>
                                    {opt}
                                </label>)
                            })}
                            <div>
                                <button style={{marginTop:"39px",borderRadius:"20px 20px 20px 20px",
                            width:"250px",height:"45px",backgroundColor:"orange",fontSize:"29px"}} type="submit" >NEXT</button>
                            </div>
                        </form>
                    </div>





                </div>

            </div>


        </div>
    )
}

export default QuestionCard
