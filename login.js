document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists and password is correct
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', email);
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again or sign up if you don\'t have an account.');
    }
});
// Check for remembered user on page load
window.addEventListener('load', function() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('email').value = rememberedUser;
        document.getElementById('rememberMe').checked = true;
    }
});

document.querySelector('.google-signin').addEventListener('click', function() {
    alert('Google Sign-In functionality not implemented in this example.');
});