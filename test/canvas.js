var canvasEl = document.getElementById("myCanvas");
var canvas = new CANVAS(canvasEl);
var ctx = canvas.getCtx();
//get the context
console.log(ctx)
// good if don't return a null

// a single circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI, false)
ctx.stroke();
ctx.closePath();

//clean after 400 miliseconds
setTimeout(function(){
    canvas.clean();
}, 400);

//recovery with an square
function square(horizontal){
    ctx.beginPath();
    ctx.rect(horizontal, 25, 50, 50);
    ctx.stroke();
    ctx.closePath();
};

setTimeout(function(){
    var horizontal = 0;
    canvas.fpf(function(){
        canvas.clean();
        square(horizontal);
        if (horizontal === 70){
            canvas.cancelAnimFrame();
        }
        horizontal++;
    });
}, 800);