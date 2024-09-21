// select button element
const button = document.getElementById('myButton');

// attach event listener for 'click' event
button.addEventListener('click', function() {
    // event handler function; change text
    button.textContent = "Button has been clicked!";
});