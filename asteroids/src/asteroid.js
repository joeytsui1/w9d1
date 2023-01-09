const MovingObject = require("./moving_object");

Util.inherits(Asteroid, MovingObject);

class Asteroid {
    constructor (obj) {
        super(obj.pos, obj.vel)
        this.vel = randomVec
        this.radius = 25
        this.color = '#808080'
    }
}