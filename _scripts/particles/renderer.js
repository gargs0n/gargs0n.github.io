import loop from 'raf-loop';
import Particle from './particle';

function plusOrMinus() {
  return Math.random() < 0.5 ? -1 : 1;
}

class Renderer {

  constructor(element, particleSpacing = 80, fps = 1000 / 60) {
    this.canvas = element;
    this.context = element.getContext('2d');
    this.particleSpacing = particleSpacing;
    this.fps = fps;
    this.loop = loop(deltaTine => this.draw(deltaTine));
    this.particles = [];

    this.init();
    this.bind();
  }

  init() {
    this.loop.stop();
    this.clear();
    this.resize();
    this.addParticles();
    this.loop.start();
  }

  bind() {
    window.addEventListener('resize', () => this.init());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw(deltaTime) {
    let {particles} = this;

    if (deltaTime > this.fps) {
      this.clear();
      for (let particle of particles) {
        particle.move();
        particle.draw();
      }
    }
  }

  addParticles() {
    const {width, height} = this.canvas;
    const {particleSpacing} = this;

    let columns = Math.floor(width / particleSpacing),
      rows = Math.floor(height / particleSpacing),
      colGutter = (particleSpacing + (width - columns * particleSpacing)) / 2,
      rowGutter = (particleSpacing + (height - rows * particleSpacing)) / 2;

    this.particles = [];

    for (let column = 0; column < columns; column++) {
      for (let row = 0; row < rows; row++) {

        let x = column * particleSpacing + colGutter + particleSpacing * Math.random() * plusOrMinus(),
          y = row * particleSpacing + rowGutter + particleSpacing * Math.random() * plusOrMinus(),
          particle = new Particle(this.context, x, y);

        this.particles.push(particle);
      }
    }
  }
}

export default Renderer;
