import styled from 'styled-components';
import Project from './Project';
import shopImage from '../images/shop.jpg';
import waldoImage from '../images/where_is_waldo.jpg';
import tictactoeImage from '../images/tic-tac-toe.jpg';
import weatherAppImage from '../images/wheather-app.jpg';


const Projects = (props) => {
  const projectList = [
    {
      image: shopImage,
      name: 'Fake shop',
      description: 'A fake store React app, built with React, React Router, Fake Store API and Bootstrap.',
      github: 'https://github.com/shino022/Shop',
      link: 'https://shino022.github.io/Shop/'
    },
    {
      image: waldoImage,
      name: 'Where is Waldo',
      description: 'A Photo Tagging app built with React and Firebase.',
      github: 'https://github.com/shino022/Where-is-waldo',
      link: 'https://shino022.github.io/Where-is-waldo/'
    },
    {
      image: weatherAppImage,
      name: 'The Weather App',
      description: 'A weather app built with Open Weather API, Giphy API, Webpack, HTML, CSS and Javascript.',
      github: 'https://github.com/shino022/Weather-App',
      link: 'https://shino022.github.io/Weather-App/'
    },
    {
      image: tictactoeImage,
      name: 'Tic Tac Toe',
      description: 'A simple Tic-Tac-Toe game app built with HTML, CSS and Javascript.',
      github: 'https://github.com/shino022/TIC-TAC-TOE',
      link: 'https://shino022.github.io/TIC-TAC-TOE/'
    }
  ]

  const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  @media (max-width: ${props.mediaWidth.phone}) {
    padding-top: 40px;
  }
`
  return(
    <Section id='projects'>
      <props.Title>Projects</props.Title>
      {projectList.map((data, index) =>
        <Project colors={props.colors} mediaWidth={props.mediaWidth} project={data} reverse={index%2===1} key={data.name} />)}
    </Section>

  );
};

export default Projects;