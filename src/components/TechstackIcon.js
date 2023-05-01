import styled, { keyframes } from 'styled-components'
import { useEffect } from 'react'
const TechstackIcon = (props) => {
  useEffect(() => {
    console.log('useEffecgt triggered')
    console.log(`prob.visible:${props.visible}`)
    if(props.visible){
      const wrapper = document.getElementById(props.logo.name);
      wrapper.classList.add('visible');
      console.log(wrapper);
    }

  }, [props.visible, props.logo.order, props.logo.name])

  const attrs = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
  })``

  const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `
  const Wrapper = styled.div`
    position: relative;
    user-select: none;
    width: 120px; 
    height: 120px;
    opacity: 0;
    &.visible {
      animation: ${appear} 1s ease-in-out ${(props.logo.order/6)+.5}s forwards;
    }
    @media (max-width: ${props.mediaWidth.phone}) {
      transition: opacity 1.5s ease-in-out ${(props.logo.order/10)}s;
      width: 100px; 
      height: 100px;
    }
  `

  const Svg = styled(attrs)` 
  `
  const LogoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `


  const Logo = styled.img`
    margin-top: 5px;
    max-width: 40%;
    max-height: 40%;
  `

  const Name = styled.div`
    margin-top:3px;
    font-size: 10px;
  `

  return (
    <Wrapper id={props.logo.name}>
      <Svg viewBox="0 0 200 200">   
        <polygon
          fill="none"
          stroke={props.colors.accent}
          strokeWidth='2.5px'
          points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,100"   
        />
      </Svg>
      <LogoContainer>
        <Logo src={props.logo.image} />
        <Name>{props.logo.name}</Name>
      </LogoContainer>
    </Wrapper>)
    
};

 export default TechstackIcon;

