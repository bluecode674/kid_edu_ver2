// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonList from './components/ButtonList';
import QuestionPage from './components/QuestionPage';
import { StateProvider } from './components/StateContext';
import './App.css';

const App = () => {
  return (
    <StateProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ButtonList />} />
            <Route path="/question/:id" element={<QuestionPage />} />
          </Routes>
        </Router>
      </div>
    </StateProvider>
  );
};

export default App;
