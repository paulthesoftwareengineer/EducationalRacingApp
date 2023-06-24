import React from 'react';

const quizzes = {
  1: {
    questions: [
      {
        question: 'Question 1',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'Answer 1',
      },
      // More questions here
    ],
  },
  // More quizzes here
};

function QuizSection({ match }) {
  const quiz = quizzes[match.params.id];

  // ... Render quiz
}

export default QuizSection;
