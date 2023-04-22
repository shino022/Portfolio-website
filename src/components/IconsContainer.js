import { useEffect,useState } from 'react';
import awsLogo from '../images/aws.png';
import expressLogo from '../images/express.png';
import mongodbLogo from '../images/mongodb.png';
import jsLogo from '../images/js.png';
import nodejsLogo from '../images/node.png';
import reactLogo from '../images/react.png';
import postgresqlLogo from '../images/postgresql.png';
import bootstrapLogo from '../images/bootstrap.png';
import webpackLogo from '../images/webpack.png';
import typescriptLogo from '../images/typescript.png';
import styled from 'styled-components'; 
import TechstackIcon from './TechstackIcon';


const IconsContainer = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    var observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting === true){
        setVisible(true);
      }
    }, { threshold: [0.5] });

    observer.observe(document.querySelector("#icons-container"));
  },[]);
  const order = [1,2,3,4,5,6,7,8,9,10];
  const getRandomOrder = () => order.splice(Math.floor(Math.random()*order.length+0.5), 1);
  const logos = [
    {image: awsLogo, name: 'AWS', order: getRandomOrder()},
    {image: expressLogo, name: 'EXPRESS', order: getRandomOrder()},
    {image: mongodbLogo, name: 'MONGODB', order: getRandomOrder()},
    {image: jsLogo, name: 'JS', order: getRandomOrder()},
    {image: nodejsLogo, name: 'NODEJS', order: getRandomOrder()},
    {image: reactLogo, name: 'REACT', order: getRandomOrder()},
    {image: postgresqlLogo, name: 'POSTGRES', order: getRandomOrder()},
    {image: bootstrapLogo, name: 'BOOTSTRAP', order: getRandomOrder()},
    {image: webpackLogo, name: 'WEBPACK', order: getRandomOrder()},
    {image: typescriptLogo, name: 'TYPESCRIPT', order: getRandomOrder()},
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