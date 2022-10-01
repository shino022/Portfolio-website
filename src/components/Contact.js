import styled from 'styled-components'
const Contact = (props) => {

  const Section = styled.section`
    height: 500px;//remove
 `

  return(
    <Section id='contact'>
      <props.Title id='contact'>Contact</props.Title>
    </Section>
  );
}

export default Contact;