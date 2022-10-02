import styled from 'styled-components';
const PopupIcon = (props) => {
  const IconContainer = styled.div`
    width: 30px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  `
  return(
    <IconContainer onClick={()=>{window.open(props.link)}}>
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke={props.colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>Popup</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    </IconContainer>
  )
}

export default PopupIcon