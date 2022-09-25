import styled from 'styled-components'

const TechstackIcon = (props) => {
  console.log(props);
  const attrs = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
  })``

  const Wrapper = styled.div`
    position: relative;
    width: 100px; 
    height: 100px;
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
    margin-top:5px;
    width: 40%;
    height: 40%;
  `

  return (
    <Wrapper>
      <Svg viewBox="0 0 200 200">   
        <polygon
          fill="none"
          stroke='#999999'
          strokeWidth='2.5px'
          points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,100"   
        />
      </Svg>
      <LogoContainer>
        <Logo src={props.logo.image} />
        <div>{props.logo.name}</div>
      </LogoContainer>
    </Wrapper>)
    
};

 export default TechstackIcon;

