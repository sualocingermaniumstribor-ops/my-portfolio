// 1. MOBILE MENU

// Find the menu button
let menuBtn = document.getElementById("menu-btn");

// Find the navigation links
let navLinks = document.getElementById("link-nav");

// When someone clicks the menu button
menuBtn.addEventListener("click", function() {

    // Show or hide the menu
    navLinks.classList.toggle("show");

});


// Close the mobile menu afilterer clicking a link
let navLink = document.querySelectorAll("#link-nav a");

navLink.forEach(function(link) {

    link.addEventListener("click", function() {
        navLink.classList.remove("show");
    });

});


// 2. PROJECT filter


// Get all filter buttons
let filterButtons = document.querySelectorAll(".filter");

// Get all project cards
let projectCards = document.querySelectorAll(".project-card");

// Check every filter button
filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the category of the clicked button
        let category = button.getAttribute("data-cat");

        // Check every project
        projectCards.forEach(function(project) {

            // Show all projects if All is selected
            if (
                category === "all" ||
                project.getAttribute("data-cat") === category
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });


        // Remove active colour from all buttons
        filterButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        // Highlight the clicked button
        button.classList.add("active");

    });

});


// 3. CONTACT FORM

// Find the contact form
let contactForm = document.getElementById("contact-form");

// Find the message area
let formMessage = document.getElementById("form-message");

// When someone submits the form
contactForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the user's information
    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();


    // Check if any field is empty
    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all the fields.";

        formMessage.style.color = "red";

    } else {

        formMessage.textContent = "Thank you! Your message has been checked.";

        formMessage.style.color = "#b6f34a";

        // Clear the form
        contactForm.reset();

    }

});







