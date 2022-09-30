import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
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

  const mediaWidth = {
    tablet: '1000px',
    phone: '500px'
  };

  const Title = styled.h2`
  color: ${colors.accent};
  font-size: 2rem;
  text-align: center;
  padding: 35px 0;
  @media (max-width: ${mediaWidth.phone}) {
    padding: 30px 0;
  }
`;

  const Content = styled.main`
    max-width: 1600px;
    margin: 0px auto;
    padding: 0px 150px;
    @media (max-width: ${mediaWidth.tablet}) {
      padding: 20px;
    }
    @media (max-width: ${mediaWidth.phone}) {
      padding: 0;
    }
  `

  return (
    <div  className="App">
      <Hero colors={colors}/>
      <Nav colors={colors}/>
      <Content>
        <Background colors={colors}/>
        <About Title={Title} colors={colors} mediaWidth={mediaWidth}/>
        <Projects Title={Title} colors={colors} mediaWidth={mediaWidth}/>
      </Content>
    </div>
  );
};

export default App;
