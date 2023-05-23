import { useState } from "react";
import answers from "./answers"
import randomAnswerIdx from "./helper"

function EightBall(){

  const [answer, setAnswer] = useState({msg: 'Think of a Question', color: "black"});

  function handleClick(evt){
      setAnswer = answers[randomAnswerIdx];
  }

  const myStyle = {
    backgroundColor: `${answer.color}`
  }

  return(
    <div onClick={handleClick} style={myStyle}>
      <div>{answer.msg}
      </div>

    </div>

  )
}




export default EightBall