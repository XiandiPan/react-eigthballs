import answers from "./answers"



function randomAnswerIdx(){
  return Math.floor(Math.random() * answers.length);
}



export default randomAnswerIdx