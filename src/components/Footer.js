import styled from 'styled-components';

const Footer = (props) => {
  const Container = styled.footer`
    color: ${props.colors.accent};
    text-align: center;
    height: 30px;
    width: 100%;
    position: absolute;
    opacity: .7;
    left: 0;
    bottom: 0;
  `
  const Link = styled.span`
    cursor: pointer;
  `

  return(
    <Container>Copyright © 2022 <Link onClick={()=>{window.open('https://github.com/shino022/Portfolio-website')}}>shino022</Link></Container>
  )
}

export default Footer;