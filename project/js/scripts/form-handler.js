document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form data here, e.g., display it, send it to an API, etc.
    console.log(new FormData(this));
});