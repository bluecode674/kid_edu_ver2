// src/StateContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [clickedButtons, setClickedButtons] = useState(() => {
    const saved = localStorage.getItem('clickedButtons');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('clickedButtons', JSON.stringify(clickedButtons));
  }, [clickedButtons]);

  const handleClick = (index) => {
    setClickedButtons([...clickedButtons, index]);
  };

  const resetButtons = () => {
    setClickedButtons([]);
    localStorage.removeItem('clickedButtons');
  };

  return (
    <StateContext.Provider value={{ clickedButtons, handleClick, resetButtons }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
