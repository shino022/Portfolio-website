import styled, { keyframes } from 'styled-components';

const Hero = (props) => {
  const Container = styled.div`
    height: 100vh;
    background-color: ${props.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Heading = styled.div`
    text-align: center;
  `;

  const moveToRight = keyframes`
    0% {
      opacity: 0;
      transform: translate(-15%, 0)
    }
    100% {
      opacity: 1;
    }
  `

  const HeadingText1 = styled.h1`
    color: ${props.colors.content};
    font-weight: 300;
    margin:0px;
    animation: ${moveToRight} .5s ease-in-out;
  `;

  const Name = styled.span`
    color: ${props.colors.accent};
  `

  const moveToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate(15%, 0)
  }
  100% {
    opacity: 1;
  }
  `

  const HeadingText2 = styled.h1`
    color: ${props.colors.content};
    font-weight: 300;
    margin:0px;
    padding-bottom: 15px;
    animation: ${moveToLeft} .5s ease-in-out;
  `;

  const opacity = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `
  const HeadingButton = styled.a`
    animation: ${opacity} 1s ease-in-out;
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
    }

    &:hover::before,
    &:hover::after {
      width: 100%;
      height: 100%;
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