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

  return(
    <Container>Copyright © 2022 shino022</Container>
  )
}

export default Footer;