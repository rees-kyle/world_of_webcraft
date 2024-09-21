// adding/removing classes; best practice
// function to toggle class
function toggleClass() {
    // retrieve the element with id 'myElement'
    var element = document.getElementById("firstElement");

    // toggle the 'highlight' class on the element
    element.classList.toggle("highlight");
}


// changing inline styles:
// function to change style
function changeStyle() {
    var element = document.getElementById("secondElement");

    // modify the inline css styles
    element.style.backgroundColor = "blue";
    element.style.color = "white";
    element.style.fontSize = "1.25rem";
}


// these are two common approaches to dynamically modify css styles