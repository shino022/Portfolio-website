import styled, { keyframes } from 'styled-components';

const Nav = (props) => {
  const NavBar = styled.nav`
    background-color: grey;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  const Logo = styled.div`

  `
  const List = styled.ul`
    display: flex;
    list-style: none;
  `
  const Item = styled.li`
  `
  const Link = styled.a`
    text-decoration: none;
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