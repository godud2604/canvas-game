class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() + 0.5;
    this.speed = Math.random() * 3 + 0.5;
  }

  draw() {
    cm.context.beginPath();
    cm.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // 원
    cm.context.fill(); // 색칠 (눈에 보이게)
  }
}

class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 300;

    const numberOfParticles = 30;
    this.particles = [];
    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push(
        new Particle(this.x, this.y)
      );
    }
  }

  draw() {
    cm.context.beginPath();
    cm.context.moveTo(this.x, this.y);
    cm.context.lineTo(this.x, this.y - this.height);
    cm.context.stroke();

    let particle;
    for (let i = 0; i < this.particles.length; i++) {
      particle = this.particles[i];
      particle.y -= particle.speed;

      // y의 위치 맨 마지막으로 갔을 때, 초기화 시켜줌.
      if (particle.y < this.y - this.height) {
        particle.y = this.y;
      }

      particle.draw();
    }
  }
}

class Light {

}