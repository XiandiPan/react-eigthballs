import answers from './answers'

function randomAnswerIdx (list = answers) {
  return Math.floor(Math.random() * answers.length)
}

export default randomAnswerIdx
