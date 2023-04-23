import styled from 'styled-components';
import Project from './Project';
import shopImage from '../images/shop.jpg';
import gptHighlighterImage from '../images/ChatGPTHighlighter.png';
import estudyImage from '../images/e-study.jpg';

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
      image: gptHighlighterImage,
      name: 'Chat GPT Highlighter',
      description: 'A Chrome Extension that generates quick responses to highlighted text',
      github: 'https://github.com/shino022/GPT-extension',
      link: 'https://chrome.google.com/webstore/detail/chatgpt-highlighter/kklcohoindmaphobgdkmenpjjpdomaao'
    },
    {
      image: shopImage,
      name: 'Fake shop',
      description: 'A fake store site, built with React, React Router, Fake Store API and Bootstrap',
      github: 'https://github.com/shino022/Shop',
      link: 'https://shino022.github.io/Shop/'
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