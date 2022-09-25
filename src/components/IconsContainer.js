import cssLogo from '../images/css.png';
import gitLogo from '../images/git.png';
import htmlLogo from '../images/html.png';
import jsLogo from '../images/js.png';
import nodejsLogo from '../images/node.png';
import reactLogo from '../images/react.png';
import sassLogo from '../images/sass.png';
import bootstrapLogo from '../images/bootstrap.png';
import webpackLogo from '../images/webpack.png';
import sqlLogo from '../images/sql.png';
import styled from 'styled-components'; 
import TechstackIcon from './TechstackIcon';
import InfiniteScroll from 'react-infinite-scroll-component';

const IconsContainer = (props) => {
  const logos = [
    {image: cssLogo, name: 'CSS'},
    {image: gitLogo, name: 'GIT'},
    {image: htmlLogo, name: 'HTML'},
    {image: jsLogo, name: 'JS'},
    {image: nodejsLogo, name: 'NODEJS'},
    {image: reactLogo, name: 'REACT'},
    {image: sassLogo, name: 'SASS'},
    {image: bootstrapLogo, name: 'BOOTSTRAP'},
    {image: webpackLogo, name: 'WEBPACK'},
    {image: sqlLogo, name: 'SQL'},
  ];
  const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const Wrapper = styled.div`
    display: flex;
  `
  return(

    <Wrapper>
      <Row>
        <TechstackIcon colors={props.colors} logo={logos[0]}/>
        <TechstackIcon colors={props.colors} logo={logos[1]}/>
        <TechstackIcon colors={props.colors} logo={logos[2]}/>
      </Row>
      <Row>
        <TechstackIcon colors={props.colors} logo={logos[3]}/>
        <TechstackIcon colors={props.colors} logo={logos[4]}/>
        <TechstackIcon colors={props.colors} logo={logos[5]}/>
        <TechstackIcon colors={props.colors} logo={logos[6]}/>
      </Row>
      <Row>
        <TechstackIcon colors={props.colors} logo={logos[7]}/>
        <TechstackIcon colors={props.colors} logo={logos[8]}/>
        <TechstackIcon colors={props.colors} logo={logos[9]}/>
      </Row>
    </Wrapper>
    
  );
}

export default IconsContainer