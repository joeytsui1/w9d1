
function MovingObject (obj){
    this.pos = obj.pos; 
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    
    ctx.beginPath();
    
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
}

// may need to pass in context here?
MovingObject.prototype.move = function() {
    const var1 = this.pos[0] + this.vel[0];
    const var2 = this.pos[1] + this.vel[1];

    this.pos = [var1, var2];
}

module.exports = MovingObject;