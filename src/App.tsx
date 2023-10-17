import React, { useState } from 'react';
import './App.css';
import ContextComponent from './ContextComponent';
import ClassComponent from './ClassComponent';

export const ThemeContext = React.createContext({});

const App: React.FC = () => {

  const [darkTheme,setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(previousTheme =>  !previousTheme)
  }

  return (
    <div className="App">
      <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ContextComponent />
        <ClassComponent />
      </ThemeContext.Provider>
      </>
    </div>
  );
}

export default App;
