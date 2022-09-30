import styled, { keyframes } from 'styled-components';
import HeroBackground from './HeroBackgound';
const Hero = (props) => {
  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Heading = styled.div`
    text-align: center;
    z-index: 2;
    font-size: 1.3rem;
    @media (max-width: ${props.mediaWidth.phone}) {
      font-size: 1rem;
    }
  `;

  const moveToRight = keyframes`
    0% {
      transform: translate(-15%, 0)
    }
    100% {
      opacity: 1;
    }
  `

  const HeadingText1 = styled.h1`
    color: ${props.colors.content};
    font-weight: 300;
    opacity: 0;
    animation: ${moveToRight} 1s ease-in-out 1s forwards;
  `;

  const Name = styled.span`
    color: ${props.colors.accent};
  `

  const moveToLeft = keyframes`
  0% {
    transform: translate(15%, 0)
  }
  100% {
    opacity: 1;
  }
  `

  const HeadingText2 = styled.h1`
    color: ${props.colors.content};
    font-weight: 300;
    padding-bottom: 15px;
    opacity: 0;
    animation: ${moveToLeft} 1s ease-in-out 1s forwards;
  `;

  const opacity = keyframes`
  0% {
  }
  100% {
    opacity: 1;
  }
  `
  const HeadingButton = styled.a`
    animation: ${opacity} 2s ease-in-out 1.8s forwards;
    opacity: 0;
    color: ${props.colors.accent};
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${props.colors.accent};    
    margin-top: 15px;
    padding: 5px 25px;
    text-decoration: none;
    position: relative;
    vertical-align: middle;

    &::before,
    &::after {
      box-sizing: inherit;
      content: '';
      position: absolute;
      border: 2px solid transparent;
      width: 0;
      height: 0;
      top: 0;
      left: 0;
    }

    &:hover {
      color: ${props.colors.accent2};
      text-shadow: 0 0 3px ${props.colors.accent},
        0 0 5px ${props.colors.accent}, 
        0 0 7px ${props.colors.accent},
        0 0 9px ${props.colors.accent};

      box-shadow: inset 0px 0px 6px 3px ${props.colors.accent}, 0px 0px 2px 2px ${props.colors.accent};    

    }

    &:hover::before,
    &:hover::after {
      width: 100%;
      height: 100%;
    }

    @keyframes vertical {
      to{
        box-shadow: inset 0 -5px 4px ${props.colors.accent}, 0px 5px 4px ${props.colors.accent};
        width: 100%
      }
    }
    &:hover::before {
      border-top-color: ${props.colors.accent2};
      border-right-color: ${props.colors.accent2};
      transition:
        width 0.25s ease-out, 
        height 0.25s ease-out 0.25s;
    }

    &:hover::after {
    border-bottom-color: ${props.colors.accent2};
    border-left-color: ${props.colors.accent2};
    transition: 
      height 0.25s ease-out,
      width 0.25s ease-out 0.25s; 
 

  }
  `
  return (
    <Container>
      <HeroBackground colors={props.colors}/>
      <Heading>
        <HeadingText1>
          Hi, I'm <Name>Seunghoon</Name>.
        </HeadingText1>
        <HeadingText2>
          I'm a full stack web developer.
        </HeadingText2>
        <HeadingButton href="#about">
          Explore ▾
        </HeadingButton>
      </Heading>
    </Container>
  );
}

export default Hero;