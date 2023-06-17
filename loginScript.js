// Get the form elements
const userNameInput = document.querySelector('.userName input');
const passwordInput = document.querySelector('.password input');
const signInButton = document.querySelector('.signUp button');

// Function to handle form submission
const signIn = (event) => {
  event.preventDefault(); // Prevent form submission

  // Retrieve user input values
const userName = userNameInput.value.trim();
const password = passwordInput.value;

  // Perform authentication or validation logic here
  // You can check against stored user data or send an API request for authentication

  // Example authentication logic (replace with your own logic)
const storedUserData = localStorage.getItem('userData');
if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userName === userData.userName && password === userData.password) {
      // Successful sign-in
    alert('Sign in successful!');
      // Perform any further actions (e.g., redirect to a new page)
      window.location.href = `welcome.html?username=${userName}`;
    } else {
      // Invalid credentials
    alert('Invalid username or password. Please try again.');
    }
} else {
    // No user data found
    alert('No user data found. Please sign up first.');
}

  // Clear the form inputs
userNameInput.value = '';
passwordInput.value = '';
};

// Add event listener to the "Sign In" button
signInButton.addEventListener('click', signIn);
