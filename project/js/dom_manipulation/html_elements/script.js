document.addEventListener("DOMContentLoaded", function() { // code runs only after the html document has been completely loaded and parsed
    // accessing elements
    var header = document.getElementById("header"); // retrieve the html element with the specified id attribute
    var paragraphs = document.getElementsByClassName("text"); // contains a collection of html elements that have the specified class name
    var divs = document.getElementsByTagName("div"); // contains a collection of html elements that have the specified tag name
    var firstParagraphInContainer = document.querySelector(".container p"); // contains the first html element that matches the specified css selector
    var allParagraphs = document.querySelectorAll("p"); // contains a nodelist that includes all elements matching the specified css selector

    // modifying elements
    header.textContent = "Modified Header" // changing text content

    // changing text content for all paragraphs with 'text' class
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = "Modified paragraphs with 'text' class.";
    }

    // changing html content for the first paragraph in the container
    firstParagraphInContainer.innerHTML = "<strong>Modified</strong> child paragraph.";

    // changing an attribute
    header.setAttribute("data-modified", "true");

    // changing styles
    header.style.color = "blue";
    header.style.backgroundColor = "lightgray";
    header.style.fontSize = "2.5em";

    // adding and removing classes
    header.classList.add("highlight");
    header.classList.remove("highlight");

    // creating a new dom element with the 'p' tag
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph.";

    // appending a child element to a parent element in the dom hierarchy
    document.body.appendChild(newParagraph);
});