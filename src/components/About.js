import styled, { keyframes } from 'styled-components';
import IconsContainer from './IconsContainer';
import ProfileIcon from './ProfileIcon';
import { useEffect } from 'react';
const About = (props) => {
  useEffect(() => {
    const profileElem = document.querySelector("#profile");
    var observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting === true){
        profileElem.classList.add('visible');
      }
    }, { threshold: [0.5] });

    observer.observe(profileElem);
  },[]);

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    @media (max-width: ${props.mediaWidth.phone}) {
      padding-top: 40px;
    }
  `

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

  const moveToRight = keyframes`
  0% {
    transform: translate(-15%, 0)
  }
  100% {
    opacity: 1;
  }
  `

  const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:30px;
    opacity: 0;

    &.visible {
      animation: ${moveToRight} 1s ease-in-out forwards;
    }
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
      <props.Title>ABOUT</props.Title>
      <ContentWrapper>
        <Content>
          <Profile id='profile'>
            <ProfileIcon color={props.colors.accent} mediaWidth={props.mediaWidth} />
            <Description>
            With a dedication to learning that lasts a lifetime, 
            I am a full stack developer who is deeply passionate about web development, 
            specifically JavaScript, React and Express. I am constantly discovering new things, 
            which is what excites and drives me. 
            I love this unique combination of creativity, logic, and technology that challenges me to grow in new ways. 
            When I'm not at work, you can find me hitting the gym or sipping a cup of coffee.
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