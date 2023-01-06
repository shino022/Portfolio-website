import styled from 'styled-components';
import Project from './Project';
import shopImage from '../images/shop.jpg';
import waldoImage from '../images/where_is_waldo.jpg';
import estudyImage from '../images/e-study.jpg';
import weatherAppImage from '../images/wheather-app.jpg';


const Projects = (props) => {
  const projectList = [
    {
      image: estudyImage,
      name: 'E-study',
      description: 'A quiz and chat app, built with React, Express and Postgres',
      github: 'https://github.com/yaboyd1/estudy',
      link: 'https://e-study-production.up.railway.app/'
    },
    {
      image: shopImage,
      name: 'Fake shop',
      description: 'A fake store site, built with React, React Router, Fake Store API and Bootstrap',
      github: 'https://github.com/shino022/Shop',
      link: 'https://shino022.github.io/Shop/'
    },
    {
      image: waldoImage,
      name: 'Where is Waldo',
      description: 'A Photo Tagging app built with React and Firebase',
      github: 'https://github.com/shino022/Where-is-waldo',
      link: 'https://shino022.github.io/Where-is-waldo/'
    },
    {
      image: weatherAppImage,
      name: 'The Weather App',
      description: 'A weather app built with Open Weather API, Giphy API, Webpack, HTML, CSS and Javascript',
      github: 'https://github.com/shino022/Weather-App',
      link: 'https://shino022.github.io/Weather-App/'
    },
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
      <props.Title>PROJECTS</props.Title>
      {projectList.map((data, index) =>
        <Project colors={props.colors} mediaWidth={props.mediaWidth} project={data} reverse={index%2===1} key={data.name} />)}
    </Section>

  );
};

export default Projects;