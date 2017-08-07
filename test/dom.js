//create a new element
var newEl = new DOM("myDivWithId");
newEl.position(10, 10)
    .dimention(100, 100)
    .styles({
        border: "1px solid #000"
    });
//attempt to create a element who exists already
var existsEl = new DOM("already");
existsEl
    .position(100, 100)
    .dimention(200, 200)
    .styles({
        position: "absolute",
        border: "2px solid #f0f"
    });

//we can change like that
newEl.styles({
    position: "absolute"
});
newEl.transform("rotate", "60deg");

//create new elements
var classEl = new DOM("myDivWithClass", ".");
var tagEl = new DOM("myOwnTag", ".", "span");
// remove visually an element
tagEl.remove()
/*
to recovery an element removed:
  tagEl.selfie = false;
  tagEl._make()
*/
var customTarget = new DOM("child", "#", "div", newEl.selfie)
customTarget.selfie.innerHTML = "hi :)"
setTimeout(function(){
    customTarget.remove()
}, 400);