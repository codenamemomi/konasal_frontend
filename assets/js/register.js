// assets/js/register.js
// Declare formData globally to make it accessible across functions
import { API_BASE_URL } from '../config.js';
let formData = null;

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const registerBtn = document.getElementById('registerBtn');
    registerBtn.disabled = true; // Disable button during request
    registerBtn.textContent = 'Creating Account...';

    // Collect form data
    formData = {
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone_number: document.getElementById('phone').value || null,
        gender: document.getElementById('gender').value.toUpperCase() || null,
        password: document.getElementById('password').value,
        password_verify: document.getElementById('confirmPassword').value,
        date_of_birth: document.getElementById('dateOfBirth').value || null
    };

    try {
        const response = await fetch('${API_BASE_URL}/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Show success message and verification prompt
            showVerificationPrompt(data.message);
        } else {
            // Show error message and keep the form visible
            const errorMessage = typeof data.detail === 'string' ? data.detail : 'Registration failed. Please try again.';
            showError(errorMessage);
        }
    } catch (error) {
        showError('Network error. Please check your connection.');
    } finally {
        registerBtn.disabled = false;
        registerBtn.textContent = 'Create Account';
    }
});

// Function to show verification prompt
function showVerificationPrompt(message) {
    const container = document.querySelector('.register-container');
    container.innerHTML = `
        <div class="logo">
            <h1>Konasal</h1>
        </div>
        <div class="welcome-text">
            <h2>Email Verification</h2>
            <p>${message}</p>
        </div>
        <div class="success-animation show">
            <div class="checkmark"></div>
            <p>Please check your email for a verification code.</p>
        </div>
        <form id="verifyForm" class="form-group">
            <label for="verificationCode">Verification Code</label>
            <input type="text" id="verificationCode" name="verificationCode" placeholder="Enter your code" required>
            <button type="submit" class="register-btn" id="verifyBtn">Verify Email</button>
        </form>
        <div class="register-link">
            Didn't receive a code? <a href="#" id="resendLink">Resend Verification Code</a>
        </div>
    `;

    // Add event listener for verification form
    document.getElementById('verifyForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const verifyBtn = document.getElementById('verifyBtn');
        verifyBtn.disabled = true;
        verifyBtn.textContent = 'Verifying...';

        const token = document.getElementById('verificationCode').value;
        const email = formData ? formData.email : null; // Use formData.email if available

        if (!email) {
            showError('Email not found. Please try registering again.');
            verifyBtn.disabled = false;
            verifyBtn.textContent = 'Verify Email';
            return;
        }

        try {
            const response = await fetch('${API_BASE_URL}/auth/verify-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token })
            });

            const data = await response.json();

            if (response.ok) {
                container.innerHTML = `
                    <div class="logo">
                        <h1>Konasal</h1>
                    </div>
                    <div class="welcome-text">
                        <h2>Success!</h2>
                        <p>${data.message}</p>
                    </div>
                    <div class="success-animation show">
                        <div class="checkmark"></div>
                        <p>Your email has been verified. You can now <a href="login.html">log in</a>.</p>
                    </div>
                `;
            } else {
                showError(data.detail || 'Verification failed. Please try again.');
            }
        } catch (error) {
            showError('Network error. Please check your connection.');
        } finally {
            verifyBtn.disabled = false;
            verifyBtn.textContent = 'Verify Email';
        }
    });

    // Add event listener for resend link
    document.getElementById('resendLink').addEventListener('click', async (event) => {
        event.preventDefault();
        const email = formData ? formData.email : null; // Use formData.email if available

        if (!email) {
            showError('Email not found. Please try registering again.');
            return;
        }

        try {
            const response = await fetch('${API_BASE_URL}/auth/resend-verification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                showError('Verification code resent. Please check your email.');
            } else {
                showError(data.detail || 'Failed to resend verification code.');
            }
        } catch (error) {
            showError('Network error. Please check your connection.');
        }
    });
}

// Function to show error messages
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.marginBottom = '20px';
    errorDiv.textContent = message;
    const container = document.querySelector('.register-container');

    // Remove existing error messages
    const existingError = container.querySelector('.error-message');
    if (existingError) existingError.remove();

    // Insert error message at the top of the form or container
    const form = container.querySelector('#registerForm');
    if (form) {
        // Insert before the form if it exists (during signup)
        container.insertBefore(errorDiv, form);
    } else {
        // Fallback to prepending to container (e.g., during verification)
        container.prepend(errorDiv);
    }

    setTimeout(() => errorDiv.remove(), 5000); // Remove after 5 seconds
}

