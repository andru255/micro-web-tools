var canvas = document.getElementById("myCanvas");
var canvasB = document.getElementById("myCanvasB");

var ctx = canvas.getContext("2d");
var ctxB = canvasB.getContext("2d");

//Render a circles
var circle = new FixtureCircle(40, 40, 20);
circle.draw(ctx);

var circle2 = new FixtureCircle(20, 20, 10);
circle2.style = "#fd0";
circle2.draw(ctx);

var circle3 = new FixtureCircle(50, 50, 10);
circle3.style = "#f0f";
circle3.lineWidth = 6;
circle3.stroke = "#000";
var angle = 0;

(function drawFrame(){
    var step = window.requestAnimationFrame(drawFrame, canvasB);
    ctxB.clearRect(0, 0, canvasB.width, canvasB.height);
    circle3.draw(ctxB);
    circle3.__proto__.velocityX = Math.sin( angle * Math.PI / 180);
    circle3.x += circle3.velocityX;
    angle += 1;
    if(angle == 45) {
        window.cancelAnimationFrame(step);
        console.log(circle3);
    }
})()