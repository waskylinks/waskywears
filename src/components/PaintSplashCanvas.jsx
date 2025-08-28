import React, { useEffect, useRef} from 'react';

const colors = [
    "rgba(255, 77, 77, 0.6)",
    "rgba(77, 166, 255, 0.6)",
    "rgba(255, 210, 77, 0.6)",
    "rgba(184, 77, 255, 0.6)"
  ];

export default function PaintSpalshCavas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    //handles resize
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    class Splash {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.radius = Math.random() * 20 + 10;
        this.growth = Math.random() * 0.3 + 0.1;
        this.life = 0;
        this.maxLife = 400;
      }

      update() {
        this.life++;
        this.radius += this.growth;
        this.alpha = 1 - this.life / this.maxLife;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, 
          this.y, 
          this.radius * 0.2, 
          this.x, 
          this.y, 
          this.radius
        );

        const rgba = this.color.replace("0.6", this.alpha.toFixed(2));

        gradient.addColorStop(0, rgba);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      isDead() {
        return this.life >= this.maxLife;
      }
    }
    let splashes = [];

    const animate = () => {
      ctx.fillStyle = '#111111'; // fresh white canvas
      ctx.fillRect(0, 0, width, height);

      //Add new splashes randomly
      if(Math.random() < 0.015) {
        splashes.push(new Splash());
      }

      //Update the draw
      splashes.forEach((s, i) => {
        s.update();
        s.draw();
        if (s.isDead())
          splashes.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas 
    ref={canvasRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "block",
      zIndex: -1,
    }}
    />
  );
}