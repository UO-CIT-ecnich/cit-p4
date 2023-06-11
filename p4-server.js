const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module");
const fastify = require("fastify")();
const fs = require("fs");

// /cit/question route
// Return all questions
fastify.get("/cit/question", (request, reply) => {
  const questions = getQuestions();
  reply.json({
    error: "",
    statusCode: 200,
    questions,
  });
});

// /cit/answer route
// Return all answers
fastify.get("/cit/answer", (request, reply) => {
  const answers = getAnswers();
  reply.json({
    error: "",
    statusCode: 200,
    answers,
  });
});

// /cit/questionanswer route
// Return all questions and answers

fastify.get("/cit/questionanswer", (request, reply) => {
  const questionAnswers = getQuestionAnswers();
  reply.json({
    error: "",
    statusCode: 200,
    questionAnswers: questionAnswers,
  });
});

// /cit/question/:number route
// Return a specific question

fastify.get("/cit/question/:number", (request, reply) => {
  const number = request.params.number;
  const question = getQuestion(number);
  reply.json({
    error: "",
    statusCode: 200,
    question: question.question,
    number: question.number,
  });
});

// /cit/answer/:number route
// Returns a specific answer

fastify.get("/cit/question/:answer", (request, reply) => {
  const number = request.params.number;
  const answer = getAnswer(number);
  reply.json({
    error: "",
    statusCode: 200,
    question: answer.answer,
    number: answer.number,
  });
});

// /cit/questionanswer/:number
// Return a specific question and answer

fastify.get("/cit/question/:number", (request, reply) => {
  const number = request.params.number;
  const questionAnswer = getQuestionAnswer(number);
  reply.json({
    error: "",
    statusCode: 200,
    question: questionAnswer.question,
    answer: questionAnswer.answer,
    number: questionAnswer.number,
  });
});

// Route *
// Unmatched route handler

fastify.get("*", (request, reply) => {
  reply.status(404).json({
    error: "Route not found",
    statusCode: 404,
  });
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
