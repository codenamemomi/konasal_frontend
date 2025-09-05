// assets/js/login.js
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const loginBtn = document.getElementById('loginBtn');
    loginBtn.disabled = true; // Disable button during request
    loginBtn.textContent = 'Signing In...';

    // Collect form data
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Store access token and user data in localStorage
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('user', JSON.stringify(data.user));
            // Redirect to index page
            window.location.href = 'index.html';
        } else {
            // Show error message
            const errorMessage = typeof data.detail === 'string' ? data.detail : 'Login failed. Please try again.';
            showError(errorMessage);
        }
    } catch (error) {
        showError('Network error. Please check your connection.');
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Sign In';
    }
});

// Function to show error messages
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.marginBottom = '20px';
    errorDiv.textContent = message;
    const container = document.querySelector('.login-container');

    // Remove existing error messages
    const existingError = container.querySelector('.error-message');
    if (existingError) existingError.remove();

    // Insert error message before the form
    const form = container.querySelector('#loginForm');
    if (form) {
        container.insertBefore(errorDiv, form);
    } else {
        container.prepend(errorDiv);
    }

    setTimeout(() => errorDiv.remove(), 5000); // Remove after 5 seconds
}