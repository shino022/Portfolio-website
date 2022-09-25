import cssLogo from '../images/css.png';
import TechstackIcon from './TechstackIcon';

const IconsContainer = (props) => {
  const logos = [
    {image: cssLogo, name: 'CSS'}
  ];
  return(
    <TechstackIcon logo={logos[0]}/>
  );
}

export default IconsContainer