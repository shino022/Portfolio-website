import styled from 'styled-components';
import IconsContainer from './IconsContainer';
const About = (props) => {
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh; // remove
    padding-top: 50px;
  `
  const Title = styled.h2`
    color: ${props.colors.accent};
    font-size: 2rem;
    text-align: center;
    padding-top: 30px;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  `

  const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap:30px;
    margin-bottom: 10%;
    
    @media (max-width: ${props.mediaWidth.tablet}) {
      flex-direction: column;
      align-items: center;
    }
  `
  const Profile = styled.div`
    color: white; // remove
  `;
  const Picture = styled.img`
  `;
  const Description = styled.div`
    max-width: 360px;
    color: ${props.colors.content};
    @media (max-width: ${props.mediaWidth.phone}) {
      max-width: 300px;
    }
    
  `;
  const Techstack = styled.div`
    color: white; // temp
  `;

  return(
    <Section id='about'>
      <Title>ABOUT</Title>
      <ContentWrapper>
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
            <IconsContainer colors={props.colors} mediaWidth={props.mediaWidth} />
          </Techstack>
        </Content>
      </ContentWrapper>

    </Section>
  );
};

export default About;