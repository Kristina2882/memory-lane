
import React, {useState} from 'react';
import MemoControl from './MemoControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { ThemeContext, themes } from '../context/theme-context';
import ToggleTheme from './ToggleTheme';

function App() {

  const [theme, setTheme] = useState(themes.dark);

  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.textColor;

  function toggleTheme() {
    setTheme(theme => 
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark );
  }

  return (
   <ThemeContext.Provider value={theme}>
    <Container>
    <ThemeContext.Consumer>
        {contextTheme =>  <ToggleTheme toggleTheme={toggleTheme} theme={contextTheme}/>}
    </ThemeContext.Consumer>
    <MemoControl/>

     </Container>
  </ThemeContext.Provider>

  );
}

export default App;
