import { useEffect,useState } from 'react';
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


const IconsContainer = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    var observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting === true){
        setVisible(true);
      }
    }, { threshold: [1] });

    observer.observe(document.querySelector("#icons-container"));
  },[]);
  const order = [1,2,3,4,5,6,7,8,9,10];
  const getRandomOrder = () => order.splice(Math.floor(Math.random()*order.length+0.5), 1);
  const logos = [
    {image: cssLogo, name: 'CSS', order: getRandomOrder()},
    {image: gitLogo, name: 'GIT', order: getRandomOrder()},
    {image: htmlLogo, name: 'HTML', order: getRandomOrder()},
    {image: jsLogo, name: 'JS', order: getRandomOrder()},
    {image: nodejsLogo, name: 'NODEJS', order: getRandomOrder()},
    {image: reactLogo, name: 'REACT', order: getRandomOrder()},
    {image: sassLogo, name: 'SASS', order: getRandomOrder()},
    {image: bootstrapLogo, name: 'BOOTSTRAP', order: getRandomOrder()},
    {image: webpackLogo, name: 'WEBPACK', order: getRandomOrder()},
    {image: sqlLogo, name: 'SQL', order: getRandomOrder()},
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
      <Wrapper id='icons-container'>
        <Row>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[0]} mediaWidth={props.mediaWidth}/>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[1]} mediaWidth={props.mediaWidth}/>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[2]} mediaWidth={props.mediaWidth}/>
        </Row>
        <Row>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[3]} mediaWidth={props.mediaWidth}/>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[4]} mediaWidth={props.mediaWidth}/>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[5]} mediaWidth={props.mediaWidth}/>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[6]} mediaWidth={props.mediaWidth}/>
        </Row>
        <Row>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[7]} mediaWidth={props.mediaWidth}/>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[8]} mediaWidth={props.mediaWidth}/>
          <TechstackIcon visible={visible} colors={props.colors} logo={logos[9]} mediaWidth={props.mediaWidth}/>
        </Row>
      </Wrapper>
  );
}

export default IconsContainer