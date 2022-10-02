import styled from 'styled-components'
const Contact = (props) => {

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
    height: calc(100vh - 50px);

    @media (max-width: ${props.mediaWidth.phone}) {
      padding-top: 40px;
    }
  `


  const Content = styled.div`
    padding-bottom: 200px;
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100%;
    @media (max-width: ${props.mediaWidth.phone}) {
      padding-bottom: 100px;
    }
  `

    const Card = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Text = styled.div`
    color: ${props.colors.content};
    text-align: center;
    padding: 20px;
    font-size: 20px;
    @media (max-width: ${props.mediaWidth.phone}) {
      font-size: 16px;
    }
  `;

  const Button = styled.a`
    text-align: center;
    width: 200px;
    color: ${props.colors.accent};
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${props.colors.accent};    
    margin-top: 15px;
    padding: 10px 25px;
    margin: 10px;
    text-decoration: none;
    position: relative;
    vertical-align: middle;
    cursor: pointer;

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
  return(
    <Section id='contact'>
      <props.Title>CONTACT</props.Title>
      <Content>
        <Card>
          <Text>Have a question or want to work together? Feel free to Email me. I'll get back to you as soon as possible.</Text>
          <Button onClick={()=>{window.open('mailto:sshoon95@gmail.com')}}>E-mail</Button>
        </Card>
      </Content>
    </Section>
  );
}

export default Contact;