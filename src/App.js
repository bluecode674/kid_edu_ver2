import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonList from './components/ButtonList';
import QuestionPage from './/components/QuestionPage';
import './App.css';

const App = () => {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleAnswered = (question) => {
    setAnsweredQuestions([...answeredQuestions, question]);
  };

  const resetAnswers = () => {
    setAnsweredQuestions([]);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <ButtonList
                answeredQuestions={answeredQuestions}
                resetAnswers={resetAnswers}
              />
            }
          />
          <Route
            path="/question/:id"
            element={<QuestionPage onAnswered={handleAnswered} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
