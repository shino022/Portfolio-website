import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';
import Background from './components/Background';
import "./App.css";
import styled from 'styled-components';

const App = () => {
  const colors = {
    primary: 'black',
    secondary: 'rgb(30, 30, 30)', 
    accent: 'rgb(113, 249, 140)',
    particle: 'rgba(113, 249, 140, 0.10)',
    backgroundParticle: 'rgba(113, 249, 140, 0.25)',
    accent2: 'white', 
    content: 'white'
  };

  const Content = styled.main`
    max-width: 1600px;
    margin: 0px auto;
    padding: 150px;
  `

  return (
    <div  className="App">
      <Hero colors={colors}/>
      <Nav colors={colors}/>
      <Content>
        <Background colors={colors}/>
        <About colors={colors} />
      </Content>
    </div>
  );
};

export default App;
