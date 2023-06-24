import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  { id: 1, title: 'Lesson 1: Basics of Car Mechanics', description: '...' },
  // Add more lessons here
];

function LessonLibrary() {
  return (
    <div>
      {lessons.map((lesson) => (
        <div key={lesson.id}>
          <h2>{lesson.title}</h2>
          <p>{lesson.description}</p>
          <Link to={`/quiz/${lesson.id}`}>Take Quiz</Link>
          <Link to={`/games/${lesson.id}`}>Play Game</Link>
        </div>
      ))}
    </div>
  );
}

export default LessonLibrary;
