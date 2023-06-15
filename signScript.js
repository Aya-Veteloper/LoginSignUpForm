// Get the form elements
const fullNameInput = document.querySelector('.fullName input');
const userNameInput = document.querySelector('.userName input');
const emailInput = document.querySelector('.email input');
const passwordInput = document.querySelector('.password input');
const confirmPasswordInput = document.querySelector('.confirm input');
const signUpButton = document.querySelector('.signUp button');

// Function to handle form submission
const signUp = (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve user input values
    const fullName = fullNameInput.value.trim();
    const userName = userNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate the form inputs
    if (fullName === '' || userName === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all the fields.');
    return;
    }

    if (fullName.length < 7) {
    alert('Full name should be at least 7 characters long.');
    return;
    }

    if (!userName.startsWith('@') || userName.includes(' ')) {
    alert('Username should start with @ and should not include any spaces.');
    return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{7,}$/;
    if (!passwordRegex.test(password)) {
    alert('Password should be at least 7 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
    return;
    }

    if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
    }

    // Store sign-up data in local storage
const userData = {
    fullName,
    userName,
    email,
    password
};
localStorage.setItem('userData', JSON.stringify(userData));

    // Clear the form inputs
    fullNameInput.value = '';
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';

    // Show success message or redirect to another page
    alert('Sign up successful!');
};


// Add event listener to the "Sign Up" button
signUpButton.addEventListener('click', signUp);
