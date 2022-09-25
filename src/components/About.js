import styled from 'styled-components';
import IconsContainer from './IconsContainer';
const About = (props) => {
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 1500px; // remove
    padding-top: 50px;
  `
  const Title = styled.h2`
    color: ${props.colors.accent};
    text-align: center;
    padding: 30px;
  `;
  const Content = styled.div`
    display: flex;
    justify-content: center;
    gap:50px;
  `
  const Profile = styled.div`
    width: 50%;
    color: white; // remove
  `;
  const Picture = styled.img`
  `;
  const Description = styled.div`
    color: ${props.colors.content};

  `;
  const Techstack = styled.div`
    width: 50%;
    color: white; // temp
  `;
  //------------------------------------




  return(
    <Section id='about'>
      <Title>ABOUT</Title>
      <Content>
        <Profile id='profile'>
          <div>
            picture
          </div>
          <Description>
            Committed to the idea of life-long learning, I’m a full stack developer with a passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. Aside from development, I like working out and drinking coffee.
          </Description>
        </Profile>
        <Techstack>
          <IconsContainer colors={props.colors}/>
        </Techstack>
      </Content>

    </Section>
  );
};

export default About;