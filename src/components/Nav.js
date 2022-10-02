import styled from 'styled-components';
import logoImage from'../images/Logo.png';
import { useEffect, useState } from 'react';
const Nav = (props) => {
  useEffect(() => {
    const aboutSection = document.querySelector("#about");
    const projectsSection = document.querySelector("#projects");
    const contactSection = document.querySelector("#contact");
    const aboutLink = document.getElementById('about-link');
    const projectLink = document.getElementById('projects-link');
    const contactLink = document.getElementById('contact-link');
    const links = [ aboutLink, projectLink, contactLink];
    const mainElem = document.querySelector('main');
    

    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting === true){
        links.forEach(link => link.classList.remove('active'));
        document.getElementById(`${entries[0].target.id}-link`).classList.add('active');
      }
    }, { threshold: [0.8] });

    const observer2 = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting === true){
        links.forEach(link => link.classList.remove('active'));
        projectLink.classList.add('active');
      }
    }, { threshold: [window.innerHeight < 1400 ? 0.3 : 0.6] });
    
    observer2.observe(projectsSection);
    observer.observe(aboutSection);
    observer.observe(contactSection);

  },[]);

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
  const Logo = styled.img`
    height: 45px;
    padding-top: 3px;
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
    &.active{
      color: ${props.colors.accent};
      @media (max-width:${props.mediaWidth.tablet}) {
        color: ${props.colors.content};
      }
    }
  `
  return(
    <NavBar>
      <Link href=''>
       <Logo src={logoImage}/>
      </Link>
      <List>
        <Item><Link id='about-link' href='#about'>About</Link></Item>
        <Item><Link id='projects-link' href='#projects'>Projects</Link></Item>
        <Item><Link id='contact-link' href='#contact'>Contact</Link></Item>
      </List>
    </NavBar>
  );
};

export default Nav;