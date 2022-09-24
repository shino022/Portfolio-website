import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';
import "./App.css";
import styled from 'styled-components';

const App = () => {
  const colors = {
    primary: 'black',
    secondary: 'grey', 
    accent: 'rgb(113, 249, 140)',
    particle: 'rgba(113, 249, 140, 0.1)',
    accent2: 'white', 
    content: 'white'
  };

  return (
    <div className="App">
      <Hero colors={colors}/>
      <Nav colors={colors}/>
      <About colors={colors}/>
    </div>
  );
};

export default App;
