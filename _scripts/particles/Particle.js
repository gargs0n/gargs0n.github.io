function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function getAngle(from, to) {
  return Math.atan2(from.y - to.y, from.x - to.x);
}

function getDirectionVector(angle) {
  return {
    x: Math.cos(angle),
    y: Math.sin(angle)
  };
}

function getVectorTowards(from, to) {
  var angle = getAngle(from, to);
  return getDirectionVector(angle - Math.PI);
}

class Particle {

  constructor(context, x = 0, y = 0) {

    this.context = context;
    this.position = {
      current: {x, y},
      start: {x, y}
    };

    this.velocity = {x: 0, y: 0};
    this.direction = Math.random() * Math.PI;

    this.settings = {
      boundaryForce: 0.2,
      color: [0,0,0],
      radius: Math.random() + 0.5,
      damping: 0.65,
      movementRadius: Math.random() * 60 + 10,
      steeringForce: 0.25,
      steeringRandomness: 0.25
    };

  }

  move() {
    let {steeringForce, steeringRandomness, movementRadius, boundaryForce, damping} = this.settings;

    let {current, start} = this.position;
    let {velocity} = this;

    // Get distance from start coordinates
    let distance = getDistance(current.x, current.y, start.x, start.y);

    // Add velocity in the current direction.
    let steeringVector = getDirectionVector(this.direction);

    velocity.x += steeringVector.x * steeringForce;
    velocity.y += steeringVector.y * steeringForce;

    // Randomly steer the direction around
    this.direction += (Math.random() * 2 - 1) * steeringRandomness;

    /*
    if (distance > 0) {
      var steerToStart = getVectorTowards(current, start);

      distance = Math.min(movementRadius, distance);
      distance = (distance / movementRadius);

      velocity.x += steerToStart.x * distance * boundaryForce;
      velocity.y += steerToStart.y * distance * boundaryForce;
    }
    */

    velocity.x *= damping;
    velocity.y *= damping;

    current.x += velocity.x;
    current.y += velocity.y;
  }

  draw() {
    let {radius, color} = this.settings;
    let {current} = this.position;
    let {context} = this;

    context.fillStyle = `rgba(${color.join()}, ${radius})`;
    context.beginPath();
    context.arc(current.x, current.y, radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
  }
}

export default Particle;
