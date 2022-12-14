import styled from 'styled-components'

const ProfileIcon = (props) => {

  const attrs = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
  })``;

  const Svg = styled(attrs)` 
    padding:10px;
    max-width: 230px;
    max-height: 230px;
    @media (max-width: ${props.mediaWidth.phone}) {
      max-width: 180px;
      max-height: 180px;
    }
  `;

  return(
    <Svg viewBox="0 0 313 352">
      <g transform="matrix(2.06 0 0 2.2 156.58 89.63)" id="cuSX4LraT_QPYXc9zRTun"  >
      <path stroke={props.color} strokeWidth='3px' d="M 22.96723 -39.78052 L 45.93458 0 L 22.967229999999997 39.78052 L -22.96724 39.78052 L -45.93459 0 L -22.96724 -39.78052 z" />
      </g>
      <g transform="matrix(6.05 0 0 5.15 156.58 273.73)" id="Jh_ccYGs_vW8IhJ4hBmwV"  >
      <path stroke={props.color} strokeWidth='1px' d="M 13.08073 -14.8495 L 25.57281 -0.40273000000000003 L 25.57281 14.8495 L -25.57281 14.8495 L -25.57281 -0.40273000000000003 L -12.646980000000001 -14.8495 z" />
      </g>
    </Svg>
     )
};

export default ProfileIcon;