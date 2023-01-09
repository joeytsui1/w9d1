
function MovingObject (pos, vel, radius, color){
    this.pos = pos; 
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}

// function MovingObject(obj) {
//     this.pos = obj[pos];
//     this.vel = obj[vel];
//     this.radius = obj[radius];
//     this.color = obj[color];
// }

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

module.exports = MovingObject;