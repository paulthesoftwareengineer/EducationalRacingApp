import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LessonLibrary from './components/LessonLibrary';
import QuizSection from './components/QuizSection';
import InteractiveGames from './components/InteractiveGames';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lessons" component={LessonLibrary} />
        <Route path="/quiz" component={QuizSection} />
        <Route path="/games" component={InteractiveGames} />
        <Route path="/" exact component={LessonLibrary} />
      </Switch>
    </Router>
  );
}

export default App;
