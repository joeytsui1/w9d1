const MovingObject = require("./moving_object.js");

document.addEventListener("DOMContentLoaded", function () {
    const canvasEL = document.getElementById("game-canvas");
    canvasEL.height = 100;
    canvasEL.width = 100;

    const ctx = canvasEL.getContext("2d");
    window.context = ctx;
});

window.MovingObject = MovingObject;
console.log("Webpack is working")