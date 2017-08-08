var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Render a circle
var poly1 = new FixturePolygon(40, 40, [
    {x: 10, y: 0},
    {x: 100, y: 0}
]);
poly1.draw(ctx);

var poly2 = new FixturePolygon(20, 20, [
    {x: 10, y: 0},
    {x: 100, y: 0}
]);
poly2.style = "#fd0";
poly2.draw(ctx); 