let heading = document.querySelector("h1")
let box = document.getElementById("box")
// when the mouse is out of the box
box.addEventListener('mouseover', function () {
    heading.innerHTML = "The mouse is over the box.✔"
});
// when the mouse is out of the box
box.addEventListener('mouseout', function () {
    heading.innerHTML = "The mouse is out of the box.❌"
});
// when the mouse is on h1 element
heading.addEventListener('mouseover', function () {
    heading.innerHTML = "Move the mouse over the box.👍"
});
