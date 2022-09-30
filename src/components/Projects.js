import styled from 'styled-components';
import Project from './Project';
import shopImage from '../images/shop.jpg';
import waldoImage from '../images/where_is_waldo.jpg';

const Projects = (props) => {
  const projectsList = [
    {
      image: shopImage,
      name: 'Fake shop',
      description: 'A simple fake store React app, built with React, React Router, Fake Store API, styled-components and Bootstrap.',
      github: 'https://github.com/shino022/Shop',
      link: 'https://shino022.github.io/Shop/'
    },
    {
      image: waldoImage,
      name: 'Where is Waldo',
      description: 'A Photo Tagging app built with React and Firebase.',
      github: 'https://github.com/shino022/Where-is-waldo',
      link: 'https://shino022.github.io/Where-is-waldo/'
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
      <Project colors={props.colors} mediaWidth={props.mediaWidth} project={projectsList[0]} reverse={false} />
      <Project colors={props.colors} mediaWidth={props.mediaWidth} project={projectsList[1]} reverse={true} />
    </Section>

  );
};

export default Projects;