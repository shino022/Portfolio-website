import { useRef, useEffect } from 'react'

import styled from 'styled-components';

const HeroBackground = (props) => {
  const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: radial-gradient(rgb(28, 34, 28), black);
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

    const mouse = {
      x: null,
      y: null
    }

    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    })

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * .8 - .4;
        this.speedY = Math.random() * .8 - .4;
        this.color = props.colors.particle;
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
      for (let i = 0; i < window.innerWidth / 14 + 50 ; i++) {
        particles.push(new Particle());
      };
    }

    const handleParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        const dxMouse = particles[i].x - mouse.x
        const dyMouse = particles[i].y - mouse.y
        const distMouse = Math.sqrt(dxMouse**2 + dyMouse**2);
        if(( distMouse > 200 &&
          ((particles[i].x-mouse.x < 4  && particles[i].x-mouse.x > -4) ||
          (particles[i].y-mouse.y < 4  && particles[i].y-mouse.y > -4)))) {
          ctx.beginPath();
          ctx.strokeStyle = props.colors.particle;
          ctx.lineWidth = particles[i].size;
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx**2 + dy**2);
          if ((dist > 200 &&
            ((particles[i].x-particles[j].x < 3  && particles[i].x-particles[j].x > -3) ||
            (particles[i].y-particles[j].y < 3  && particles[i].y-particles[j].y > -3)))) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth = particles[i].size/3;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }       
        }

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