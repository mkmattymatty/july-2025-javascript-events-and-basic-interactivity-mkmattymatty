// --- Part 1 & 2: JavaScript Event Handling and Interactive Elements ---

// 1. Interactive Feature: Light/Dark Mode Toggle
// This feature listens for a click on the theme toggle button.
// When clicked, it adds or removes a 'dark-mode' class to the body.
// This allows the style.css file to change the page's colors.
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Interactive Feature: Simple Counter
// This feature tracks a count, and updates the display based on button clicks.
let count = 0;
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

// Event listener for the increment button
incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

// Event listener for the decrement button
decrementBtn.addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
});


// --- Part 3: Form Validation with JavaScript ---

// This section handles form submission and performs custom validation for each input field.
const contactForm = document.getElementById('contact-form');

// Add a 'submit' event listener to the form
contactForm.addEventListener('submit', (event) => {
    // Prevent the default form submission to handle validation with JS
    event.preventDefault();

    // Get input and error elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Reset error messages and form status on new submission
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    document.getElementById('form-status').textContent = '';

    let formIsValid = true;

    // Custom validation logic for the Name field
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        formIsValid = false;
    }

    // Custom validation logic for the Email field using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        formIsValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        formIsValid = false;
    }

    // Custom validation logic for the Password field (e.g., must be at least 8 characters)
    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        formIsValid = false;
    }

    // Display overall form submission status
    const formStatus = document.getElementById('form-status');
    if (formIsValid) {
        formStatus.textContent = 'Form submitted successfully!';
        formStatus.classList.add('success');
        formStatus.classList.remove('error');
        contactForm.reset(); // Clear the form after successful submission
    } else {
        formStatus.textContent = 'Please correct the errors above.';
        formStatus.classList.add('error');
        formStatus.classList.remove('success');
    }
});