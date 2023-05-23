import React, { useState } from 'react'
import DEFAULT_ANSWERS from './answers.js'
import randomAnswerIdx from './helper'

function EightBall ({ answers = DEFAULT_ANSWERS }) {
  let initialAnswer = {
    msg: 'Think of a Question',
    color: 'black'
  }

  const [answer, setAnswer] = useState(initialAnswer)
  console.log(answers[0])
  function handleClick (evt) {
    setAnswer(answers[randomAnswerIdx()])
  }

  let color = answer.color
  const myStyle = {
    backgroundColor: color,
    height: '200px',
    color: 'white'
  }

  return (
    <div onClick={handleClick} style={myStyle}>
      <div>{answer.msg}</div>
    </div>
  )
}

export default EightBall
