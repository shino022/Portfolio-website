import { useRef, useEffect } from 'react'

import styled from 'styled-components';

const HeroBackground = (props) => {
  const Canvas = styled.canvas`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: -3;
    background-color: black;
  `;
  const canvasRef = useRef(null);
  useEffect(() => {
    console.log(props);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;
    const particles = [];

    window.addEventListener('resize', () => {
      canvas.width = document.body.clientWidth;
      canvas.height = window.innerHeight;
    })

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.5 + 1;
        this.speedX = Math.random() * .6 - .3;
        this.speedY = Math.random() * .6 - .3;
        this.color = props.colors.backgroundParticle;
      }
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();      
      }
    }

    const init = () => {
      for (let i = 0; i < window.innerWidth / 40 ; i++) {
        particles.push(new Particle());
      };
    }

    const handleParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      };
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    }
    init();
    animate();
  }, [])

  return <Canvas ref={canvasRef}></Canvas>;
}

export default HeroBackground;