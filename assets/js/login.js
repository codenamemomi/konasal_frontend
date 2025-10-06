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
            
            // Clear previous errors
            clearFieldErrors(loginForm);
            
            // Validate form
            if (!validateLoginForm()) {
                return;
            }

            loginBtn.disabled = true;
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Signing In...';

            const formData = {
                email: document.getElementById('email').value.trim(),
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
                    
                    showToast('success', 'Login successful! Redirecting...');
                    
                    setTimeout(() => {
                        if (data.user.phone_number === "Not provided") {
                            window.location.href = 'profile.html';
                        } else {
                            window.location.href = 'index.html';
                        }
                    }, 1500);
                    
                } else {
                    let errorMessage = data.detail || 'Login failed. Please check your credentials.';
                    
                    // Specific error handling
                    if (data.detail?.includes('verify your email')) {
                        errorMessage = 'Please verify your email before logging in. Check your inbox for the verification code.';
                    } else if (data.detail?.includes('Invalid email or password')) {
                        errorMessage = 'Invalid email or password. Please try again.';
                    }
                    
                    showFieldError('password', errorMessage, loginForm);
                    showToast('error', errorMessage);
                }
            } catch (error) {
                console.error('Login error:', error);
                showToast('error', 'Network error. Please check your connection.');
            } finally {
                loginBtn.disabled = false;
                loginBtn.innerHTML = 'Sign In';
            }
        });
    }

    // Handle forgot password form submission
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            forgotSubmitBtn.disabled = true;
            forgotSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            forgotSuccessAlert.style.display = 'none';
            forgotErrorAlert.style.display = 'none';

            const email = document.getElementById('resetEmail').value.trim();
            
            if (!validateEmail(email)) {
                showFieldError('resetEmail', 'Please enter a valid email address.', forgotPasswordForm);
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
                    forgotSuccessAlert.textContent = '✅ Password reset token sent to your email. Check your inbox!';
                    forgotSuccessAlert.style.display = 'flex';
                    
                    setTimeout(() => {
                        forgotModal.classList.remove('show');
                        resetModal.classList.add('show');
                        document.getElementById('resetToken').focus();
                    }, 2000);
                    
                } else {
                    showFieldError('resetEmail', data.detail || 'Failed to send reset token.', forgotPasswordForm);
                    showToast('error', data.detail || 'Failed to send reset token.');
                }
            } catch (error) {
                showFieldError('resetEmail', 'Network error. Please check your connection.', forgotPasswordForm);
                showToast('error', 'Network error. Please check your connection.');
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
            resetSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Resetting...';
            resetSuccessAlert.style.display = 'none';
            resetErrorAlert.style.display = 'none';

            const token = document.getElementById('resetToken').value.trim();
            const newPassword = document.getElementById('newPassword').value;
            const newPasswordVerify = document.getElementById('newPasswordVerify').value;

            // Clear previous errors
            clearFieldErrors(resetPasswordForm);

            // Validate form
            let hasError = false;
            
            if (!token) {
                showFieldError('resetToken', 'Please enter the reset token sent to your email.', resetPasswordForm);
                hasError = true;
            }
            
            if (newPassword.length < 8) {
                showFieldError('newPassword', 'Password must be at least 8 characters long.', resetPasswordForm);
                hasError = true;
            }
            
            if (newPassword !== newPasswordVerify) {
                showFieldError('newPasswordVerify', 'Passwords do not match. Please make sure both passwords are identical.', resetPasswordForm);
                hasError = true;
            }

            if (hasError) {
                resetSubmitBtn.disabled = false;
                resetSubmitBtn.innerHTML = 'Reset Password';
                return;
            }

            try {
                const response = await fetch(`${window.API_BASE_URL}/auth/reset-password`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        token, 
                        new_password: newPassword, 
                        new_password_verify: newPasswordVerify 
                    })
                });

                const data = await response.json();
                
                if (response.ok) {
                    resetSuccessAlert.textContent = '✅ Password reset successfully! Redirecting to login...';
                    resetSuccessAlert.style.display = 'flex';
                    
                    setTimeout(() => {
                        resetModal.classList.remove('show');
                        window.location.href = 'login.html';
                    }, 2000);
                    
                } else {
                    let errorMessage = data.detail || 'Failed to reset password.';
                    
                    if (data.detail?.includes('Invalid or expired token')) {
                        errorMessage = 'Invalid or expired reset token. Please request a new one.';
                        showFieldError('resetToken', errorMessage, resetPasswordForm);
                    } else if (data.detail?.includes('Passwords do not match')) {
                        errorMessage = 'Passwords do not match. Please make sure both passwords are identical.';
                        showFieldError('newPasswordVerify', errorMessage, resetPasswordForm);
                    } else {
                        showFieldError('resetToken', errorMessage, resetPasswordForm);
                    }
                    
                    showToast('error', errorMessage);
                }
            } catch (error) {
                showFieldError('resetToken', 'Network error. Please check your connection.', resetPasswordForm);
                showToast('error', 'Network error. Please check your connection.');
            } finally {
                resetSubmitBtn.disabled = false;
                resetSubmitBtn.innerHTML = 'Reset Password';
            }
        });
    }

    // Real-time password validation for reset form
    const newPasswordInput = document.getElementById('newPassword');
    const newPasswordVerifyInput = document.getElementById('newPasswordVerify');
    
    if (newPasswordInput && newPasswordVerifyInput) {
        newPasswordInput.addEventListener('input', () => validatePasswordStrength(newPasswordInput));
        newPasswordVerifyInput.addEventListener('input', () => validatePasswordMatch());
    }

    // Helper Functions
    function validateLoginForm() {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        let isValid = true;

        clearFieldErrors(loginForm);

        if (!email) {
            showFieldError('email', 'Please enter your email address.', loginForm);
            isValid = false;
        } else if (!validateEmail(email)) {
            showFieldError('email', 'Please enter a valid email address.', loginForm);
            isValid = false;
        }

        if (!password) {
            showFieldError('password', 'Please enter your password.', loginForm);
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePasswordStrength(passwordInput) {
        const password = passwordInput.value;
        const strengthIndicator = document.getElementById('passwordStrength') || createPasswordStrengthIndicator(passwordInput);
        
        if (password.length === 0) {
            strengthIndicator.style.display = 'none';
            return;
        }

        strengthIndicator.style.display = 'block';
        
        let strength = 0;
        let feedback = '';

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        switch (strength) {
            case 0:
            case 1:
                feedback = 'Very Weak';
                strengthIndicator.className = 'password-strength very-weak';
                break;
            case 2:
                feedback = 'Weak';
                strengthIndicator.className = 'password-strength weak';
                break;
            case 3:
                feedback = 'Medium';
                strengthIndicator.className = 'password-strength medium';
                break;
            case 4:
                feedback = 'Strong';
                strengthIndicator.className = 'password-strength strong';
                break;
            case 5:
                feedback = 'Very Strong';
                strengthIndicator.className = 'password-strength very-strong';
                break;
        }

        strengthIndicator.innerHTML = `<span>Password Strength: ${feedback}</span>`;
    }

    function createPasswordStrengthIndicator(passwordInput) {
        const indicator = document.createElement('div');
        indicator.id = 'passwordStrength';
        indicator.className = 'password-strength';
        indicator.style.cssText = `
            font-size: 0.8rem;
            margin-top: 5px;
            padding: 5px;
            border-radius: 3px;
            display: none;
        `;
        passwordInput.parentNode.appendChild(indicator);
        return indicator;
    }

    function validatePasswordMatch() {
        const password = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('newPasswordVerify').value;
        
        if (confirmPassword && password !== confirmPassword) {
            showFieldError('newPasswordVerify', 'Passwords do not match.', resetPasswordForm);
        } else {
            clearFieldError('newPasswordVerify', resetPasswordForm);
        }
    }

    function showFieldError(fieldId, message, form) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        
        // Remove existing error
        const existingError = formGroup.querySelector('.field-error');
        if (existingError) existingError.remove();
        
        // Add error class to input
        field.classList.add('error');
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        errorDiv.style.cssText = `
            color: #dc3545;
            font-size: 0.8rem;
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        `;
        
        formGroup.appendChild(errorDiv);
    }

    function clearFieldError(fieldId, form) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.classList.remove('error');
            const formGroup = field.closest('.form-group');
            const error = formGroup.querySelector('.field-error');
            if (error) error.remove();
        }
    }

    function clearFieldErrors(form) {
        const fields = form.querySelectorAll('input, select');
        fields.forEach(field => {
            field.classList.remove('error');
            const formGroup = field.closest('.form-group');
            const error = formGroup.querySelector('.field-error');
            if (error) error.remove();
        });
    }

    function showToast(type, message) {
        // Remove existing toasts
        const existingToasts = document.querySelectorAll('.custom-toast');
        existingToasts.forEach(toast => toast.remove());

        const toast = document.createElement('div');
        toast.className = `custom-toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
            color: ${type === 'success' ? '#155724' : '#721c24'};
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 9999;
            animation: slideInRight 0.3s ease;
            border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
            max-width: 400px;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .password-strength.very-weak { color: #dc3545; background: #f8d7da; }
        .password-strength.weak { color: #fd7e14; background: #fff3cd; }
        .password-strength.medium { color: #ffc107; background: #fff3cd; }
        .password-strength.strong { color: #20c997; background: #d1edf2; }
        .password-strength.very-strong { color: #198754; background: #d4edda; }
        input.error { border-color: #dc3545 !important; }
        .field-error { color: #dc3545; font-size: 0.8rem; margin-top: 5px; }
    `;
    document.head.appendChild(style);
});