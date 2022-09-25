import styled, { keyframes } from 'styled-components';

const Nav = (props) => {
  const NavBar = styled.nav`
    background-color: ${props.colors.primary};
    border-top: 1px solid ${props.colors.accent};
    border-bottom: 1px solid ${props.colors.accent};
    position: sticky;
    top: 0;
    padding: 0 50px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  `
  const Logo = styled.div`

  `
  const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
  `
  const Item = styled.li`
  `
  const Link = styled.a`
    color: ${props.colors.content};
    text-decoration: none;
    font-size: 14px;
  `
  return(
    <NavBar>
      <Logo>Logo</Logo>
      <List>
        <Item><Link href='#about'>About</Link></Item>
        <Item><Link href='#projects'>Projects</Link></Item>
        <Item><Link href='#contact'>Contact</Link></Item>
      </List>
    </NavBar>
  );
};

export default Nav;