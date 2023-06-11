const { data } = require("./p4-data");

// console.log(data)

// getQuestions()
/*
map() iterates over each object in data and extracts the question property, 
I put it into the questionList array and return it
*/

function getQuestions() {
  return data.map((item) => item.question);
}

// console.log(getQuestions());

//getAnswers
/*
Similar syntax to getQuestions but were looking for the answer property this time
*/

function getAnswers() {
  return data.map((item) => item.answer);
}

// console.log(getAnswers());

//getQuestionsAnswers()
/*
Copies the data array using the JSON.parse and JSON.stringify to make sure its a copied array
*/

function getQuestionsAnswers() {
  return JSON.parse(JSON.stringify(data));
}

// console.log(getQuestionsAnswers());

//getQuestion(number = "")

function getQuestion(number = "") {
  //take number param and convert to integer w/ parseInt()
  const index = parseInt(number) - 1;

  //If we get a number integer that isn't valid we need to return an error message
  if (isNaN(index) || index < 0 || index >= data.length) {
    return {
      question: "",
      number: parseInt(number),
      error: "Invalid question number",
    };
  }
  // if number is valid we need to return the object with the desired question
  return {
    question: data[index].question,
    number: parseInt(number),
    error: "",
  };
}

// console.log(getQuestion(4))

//getAnswer()

function getAnswer(number = "") {
  //same syntax as before but we want the answer instead of the question
  const index = parseInt(number) - 1;
  if (isNaN(index) || index < 0 || index >= data.length) {
    //return error message if invalid answer integer
    return {
      answer: "",
      number: parseInt(number),
      error: "Invalid question number",
    };
  }
  //returns the answer and question number object if the answer integer passed is valid
  return {
    answer: data[index].answer,
    number: parseInt(number),
    error: "",
  };
}

// console.log(getAnswer(2))

//getQuestionAnswer(number = "")
//essentially combining the function of the previous two functions
function getQuestionAnswer(number = "") {
  //same integer conversion syntax as last two functions
  const index = parseInt(number) - 1;
  //if it isnt a valid integer returns error message and empty object
  if (isNaN(index) || index < 0 || index >= data.length) {
    return {
      question: "",
      answer: "",
      number: parseInt(number),
      error: "Invalid question number",
    };
  }
  //if it is a valid integer it returns the appropriate object with question and answer
  const item = data[index];
  return {
    question: item.question,
    answer: item.answer,
    number: parseInt(number),
    error: "",
  };
}

// console.log(getQuestionAnswer(2))

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
};
