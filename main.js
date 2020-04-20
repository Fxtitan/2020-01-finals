makeRunOn = (str) => {
  return str.split('.').join(',');
}// y cant i .replace()? 

stringOut = (str) => {
  return str.split('').join(' ');
}

nightOwls = () => {
  
}

totalScore = (totalScore) => {
  const levels1 = [
    {
      score: 50,
      multiplier: 1,
    },
    {
      score: 200,
      multiplier: 1,
    },
    {
      score: 400,
      multiplier: 1,
    },
    {
      score: 350,
      multiplier: 1,
    },
  ]
  if(levels1.multiplier === 1){
    return levels1.score === 1000

  }

}

const Faqtory = (questions) => {
  return {
    questions: [],

    addQuestion(){
      const question1 = 'What is your site all about?';
      question1.push()
    },

    answerQuestion(){

    },
  }
}

if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
