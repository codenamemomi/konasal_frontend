document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotModal = document.getElementById('forgotModal');
    const closeForgotModal = document.getElementById('closeForgotModal');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const forgotSubmitBtn = document.getElementById('forgotSubmitBtn');
    const forgotSuccessAlert = document.getElementById('forgotSuccessAlert');
    const forgotErrorAlert = document.getElementById('forgotErrorAlert');
    const resetModal = document.getElementById('resetModal');
    const closeResetModal = document.getElementById('closeResetModal');
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const resetSubmitBtn = document.getElementById('resetSubmitBtn');
    const resetSuccessAlert = document.getElementById('resetSuccessAlert');
    const resetErrorAlert = document.getElementById('resetErrorAlert');

    // Toggle password visibility
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            passwordToggle.innerHTML = `<i class="far fa-${isPassword ? 'eye-slash' : 'eye'}"></i>`;
        });
    }

    // Show forgot password modal
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            forgotModal.classList.add('show');
            forgotSuccessAlert.style.display = 'none';
            forgotErrorAlert.style.display = 'none';
        });
    }

    // Close modals
    if (closeForgotModal) {
        closeForgotModal.addEventListener('click', () => {
            forgotModal.classList.remove('show');
        });
    }

    if (closeResetModal) {
        closeResetModal.addEventListener('click', () => {
            resetModal.classList.remove('show');
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === forgotModal) forgotModal.classList.remove('show');
        if (e.target === resetModal) resetModal.classList.remove('show');
    });

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const loginBtn = document.getElementById('loginBtn');
            loginBtn.disabled = true;
            loginBtn.classList.add('loading');

            const formData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            };

            try {
                const response = await fetch(`${window.API_BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('user_email', data.user.email);
                    localStorage.setItem('user_phone_number', data.user.phone_number);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    console.log('Login successful, token:', data.access_token);
                    if (data.user.phone_number === "Not provided") {
                        showError('Please update your phone number in your profile to proceed.', loginForm);
                        setTimeout(() => window.location.href = 'profile.html', 2000);
                    } else {
                        window.location.href = 'index.html';
                    }
                } else {
                    console.error('Login failed:', data);
                    showError(data.detail || 'Login failed. Please check your credentials.', loginForm);
                }
            } catch (error) {
                console.error('Login error:', error);
                showError('Network error. Please check your connection.', loginForm);
            } finally {
                loginBtn.disabled = false;
                loginBtn.classList.remove('loading');
            }
        });
    }


    // Handle forgot password form submission
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            forgotSubmitBtn.disabled = true;
            forgotSubmitBtn.innerHTML = 'Sending...';
            forgotSuccessAlert.style.display = 'none';
            forgotErrorAlert.style.display = 'none';

            const email = document.getElementById('resetEmail').value;
            if (!validateEmail(email)) {
                showError('Please enter a valid email address.', forgotPasswordForm, 'forgotErrorAlert');
                forgotSubmitBtn.disabled = false;
                forgotSubmitBtn.innerHTML = 'Send Reset Token';
                return;
            }

            try {
                const response = await fetch(`${window.API_BASE_URL}/auth/forgot-password`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });

                const data = await response.json();
                if (response.ok) {
                    forgotSuccessAlert.textContent = 'Password reset token sent to your email.';
                    forgotSuccessAlert.style.display = 'flex';
                    setTimeout(() => {
                        forgotModal.classList.remove('show');
                        resetModal.classList.add('show');
                        forgotSuccessAlert.style.display = 'none';
                    }, 2000);
                } else {
                    showError(data.detail || 'Failed to send reset token.', forgotPasswordForm, 'forgotErrorAlert');
                }
            } catch (error) {
                showError('Network error. Please check your connection.', forgotPasswordForm, 'forgotErrorAlert');
            } finally {
                forgotSubmitBtn.disabled = false;
                forgotSubmitBtn.innerHTML = 'Send Reset Token';
            }
        });
    }

    // Handle reset password form submission
    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            resetSubmitBtn.disabled = true;
            resetSubmitBtn.innerHTML = 'Resetting...';
            resetSuccessAlert.style.display = 'none';
            resetErrorAlert.style.display = 'none';

            const token = document.getElementById('resetToken').value;
            const newPassword = document.getElementById('newPassword').value;
            const newPasswordVerify = document.getElementById('newPasswordVerify').value;

            if (!token || newPassword.length < 8 || newPassword !== newPasswordVerify) {
                showError(
                    !token ? 'Please enter a valid token.' :
                    newPassword.length < 8 ? 'Password must be at least 8 characters.' :
                    'Passwords do not match.',
                    resetPasswordForm,
                    'resetErrorAlert'
                );
                resetSubmitBtn.disabled = false;
                resetSubmitBtn.innerHTML = 'Reset Password';
                return;
            }

            try {
                const response = await fetch(`${window.API_BASE_URL}/auth/reset-password`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token, new_password: newPassword, new_password_verify: newPasswordVerify })
                });

                const data = await response.json();
                if (response.ok) {
                    resetSuccessAlert.textContent = 'Password reset successfully. Redirecting to login...';
                    resetSuccessAlert.style.display = 'flex';
                    setTimeout(() => {
                        resetModal.classList.remove('show');
                        window.location.href = 'login.html';
                    }, 2000);
                } else {
                    showError(data.detail || 'Failed to reset password.', resetPasswordForm, 'resetErrorAlert');
                }
            } catch (error) {
                showError('Network error. Please check your connection.', resetPasswordForm, 'resetErrorAlert');
            } finally {
                resetSubmitBtn.disabled = false;
                resetSubmitBtn.innerHTML = 'Reset Password';
            }
        });
    }

    // Helper function for email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Helper function to show error messages
    function showError(message, form, alertId = null) {
        if (alertId) {
            const alert = document.getElementById(alertId);
            alert.textContent = message;
            alert.style.display = 'flex';
            setTimeout(() => alert.style.display = 'none', 5000);
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i>${message}`;
            const container = form.closest('.login-container') || form.closest('.forgot-content');
            const existingError = container.querySelector('.error-message');
            if (existingError) existingError.remove();
            container.insertBefore(errorDiv, form);
            setTimeout(() => errorDiv.remove(), 5000);
        }
    }
});