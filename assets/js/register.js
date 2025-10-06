let formData = null;

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Real-time password validation
    if (passwordInput) {
        passwordInput.addEventListener('input', () => {
            validatePasswordStrength(passwordInput);
            validatePasswordMatch();
        });
    }

    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', validatePasswordMatch);
    }

    // Form submission
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegistration);
    }
});

async function handleRegistration(event) {
    event.preventDefault();

    const registerBtn = document.getElementById('registerBtn');
    
    // Clear previous errors
    clearFieldErrors();
    
    // Validate form
    if (!validateRegistrationForm()) {
        return;
    }

    registerBtn.disabled = true;
    registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Creating Account...';

    formData = {
        first_name: document.getElementById('firstName').value.trim(),
        last_name: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone_number: document.getElementById('phone').value.trim() || null,
        gender: document.getElementById('gender').value || null,
        password: document.getElementById('password').value,
        password_verify: document.getElementById('confirmPassword').value,
        date_of_birth: document.getElementById('dateOfBirth').value || null
    };

    try {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            showToast('success', 'Account created successfully! Check your email for verification code.');
            showVerificationPrompt(data.message);
        } else {
            let errorMessage = 'Registration failed. Please try again.';
            
            if (data.detail) {
                if (typeof data.detail === 'string') {
                    errorMessage = data.detail;
                    
                    // Specific error handling
                    if (data.detail.includes('Email already registered')) {
                        showFieldError('email', 'This email is already registered. Please use a different email or try logging in.');
                    } else if (data.detail.includes('Passwords do not match')) {
                        showFieldError('confirmPassword', 'Passwords do not match. Please make sure both passwords are identical.');
                    } else if (data.detail.includes('Password must be at least')) {
                        showFieldError('password', 'Password must be at least 8 characters long.');
                    }
                } else if (Array.isArray(data.detail)) {
                    errorMessage = data.detail.map(err => `${err.loc?.join('.')}: ${err.msg}`).join('; ');
                }
            }
            
            showToast('error', errorMessage);
        }
    } catch (error) {
        console.error('Registration error:', error);
        showToast('error', 'Network error. Please check your connection.');
    } finally {
        registerBtn.disabled = false;
        registerBtn.innerHTML = 'Create Account';
    }
}

function validateRegistrationForm() {
    let isValid = true;
    const fields = [
        { id: 'firstName', name: 'First Name', required: true },
        { id: 'lastName', name: 'Last Name', required: true },
        { id: 'email', name: 'Email', required: true, type: 'email' },
        { id: 'password', name: 'Password', required: true, minLength: 8 },
        { id: 'confirmPassword', name: 'Confirm Password', required: true }
    ];

    fields.forEach(field => {
        const element = document.getElementById(field.id);
        const value = element.value.trim();

        if (field.required && !value) {
            showFieldError(field.id, `${field.name} is required.`);
            isValid = false;
        } else if (field.type === 'email' && value && !validateEmail(value)) {
            showFieldError(field.id, 'Please enter a valid email address.');
            isValid = false;
        } else if (field.minLength && value.length < field.minLength) {
            showFieldError(field.id, `${field.name} must be at least ${field.minLength} characters.`);
            isValid = false;
        } else {
            clearFieldError(field.id);
        }
    });

    // Check password match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password && confirmPassword && password !== confirmPassword) {
        showFieldError('confirmPassword', 'Passwords do not match. Please make sure both passwords are identical.');
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
    let requirements = [];

    if (password.length >= 8) strength++;
    else requirements.push('at least 8 characters');

    if (/[A-Z]/.test(password)) strength++;
    else requirements.push('one uppercase letter');

    if (/[a-z]/.test(password)) strength++;
    else requirements.push('one lowercase letter');

    if (/[0-9]/.test(password)) strength++;
    else requirements.push('one number');

    if (/[^A-Za-z0-9]/.test(password)) strength++;
    else requirements.push('one special character');

    switch (strength) {
        case 0:
        case 1:
            feedback = 'Very Weak';
            break;
        case 2:
            feedback = 'Weak';
            break;
        case 3:
            feedback = 'Medium';
            break;
        case 4:
            feedback = 'Strong';
            break;
        case 5:
            feedback = 'Very Strong';
            break;
    }

    strengthIndicator.className = `password-strength ${feedback.toLowerCase().replace(' ', '-')}`;
    strengthIndicator.innerHTML = `
        <span>Password Strength: ${feedback}</span>
        ${requirements.length > 0 ? `<div class="requirements">Requirements: ${requirements.join(', ')}</div>` : ''}
    `;
}

function createPasswordStrengthIndicator(passwordInput) {
    const indicator = document.createElement('div');
    indicator.id = 'passwordStrength';
    indicator.className = 'password-strength';
    indicator.style.cssText = `
        font-size: 0.8rem;
        margin-top: 5px;
        padding: 8px;
        border-radius: 4px;
        display: none;
    `;
    passwordInput.parentNode.appendChild(indicator);
    return indicator;
}

function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (confirmPassword && password !== confirmPassword) {
        showFieldError('confirmPassword', 'Passwords do not match. Please make sure both passwords are identical.');
    } else {
        clearFieldError('confirmPassword');
    }
}

function showFieldError(fieldId, message) {
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

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.remove('error');
        const formGroup = field.closest('.form-group');
        const error = formGroup.querySelector('.field-error');
        if (error) error.remove();
    }
}

function clearFieldErrors() {
    const fields = document.querySelectorAll('#registerForm input, #registerForm select');
    fields.forEach(field => {
        field.classList.remove('error');
        const formGroup = field.closest('.form-group');
        const error = formGroup.querySelector('.field-error');
        if (error) error.remove();
    });
}

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
        <form id="verifyForm">
            <div class="form-group">
                <label for="verificationCode">Verification Code</label>
                <input type="text" id="verificationCode" name="verificationCode" placeholder="Enter 5-digit code" required maxlength="5">
                <div class="field-error" id="verifyError" style="display: none;"></div>
            </div>
            <button type="submit" class="register-btn" id="verifyBtn">Verify Email</button>
        </form>
        <div class="register-link">
            Didn't receive a code? <a href="#" id="resendLink">Resend Verification Code</a>
        </div>
    `;

    document.getElementById('verifyForm').addEventListener('submit', handleVerification);
    document.getElementById('resendLink').addEventListener('click', handleResendCode);
}

async function handleVerification(event) {
    event.preventDefault();
    const verifyBtn = document.getElementById('verifyBtn');
    const verifyError = document.getElementById('verifyError');
    
    verifyError.style.display = 'none';
    
    const token = document.getElementById('verificationCode').value.trim();
    const email = formData ? formData.email : null;

    if (!email) {
        showError('Email not found. Please try registering again.');
        return;
    }

    if (!token || token.length !== 5) {
        verifyError.textContent = 'Please enter the 5-digit verification code.';
        verifyError.style.display = 'flex';
        return;
    }

    verifyBtn.disabled = true;
    verifyBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Verifying...';

    try {
        const response = await fetch(`${API_BASE_URL}/auth/verify-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, token })
        });

        const data = await response.json();

        if (response.ok) {
            showToast('success', 'Email verified successfully! Redirecting to login...');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            let errorMessage = data.detail || 'Verification failed. Please try again.';
            
            if (data.detail?.includes('Invalid or expired')) {
                errorMessage = 'Invalid or expired verification code. Please request a new one.';
            }
            
            verifyError.textContent = errorMessage;
            verifyError.style.display = 'flex';
            showToast('error', errorMessage);
        }
    } catch (error) {
        verifyError.textContent = 'Network error. Please check your connection.';
        verifyError.style.display = 'flex';
        showToast('error', 'Network error. Please check your connection.');
    } finally {
        verifyBtn.disabled = false;
        verifyBtn.innerHTML = 'Verify Email';
    }
}

async function handleResendCode(event) {
    event.preventDefault();
    const email = formData ? formData.email : null;

    if (!email) {
        showToast('error', 'Email not found. Please try registering again.');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/auth/resend-verification`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
            showToast('success', 'Verification code resent. Please check your email.');
        } else {
            showToast('error', data.detail || 'Failed to resend verification code.');
        }
    } catch (error) {
        showToast('error', 'Network error. Please check your connection.');
    }
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

// Add CSS for password strength and errors
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
    .password-strength.very-weak { color: #dc3545; background: #f8d7da; border: 1px solid #f5c6cb; }
    .password-strength.weak { color: #fd7e14; background: #fff3cd; border: 1px solid #ffeaa7; }
    .password-strength.medium { color: #ffc107; background: #fff3cd; border: 1px solid #ffeaa7; }
    .password-strength.strong { color: #20c997; background: #d1edf2; border: 1px solid #b8e2e8; }
    .password-strength.very-strong { color: #198754; background: #d4edda; border: 1px solid #c3e6cb; }
    .password-strength .requirements { font-size: 0.7rem; margin-top: 3px; color: #666; }
    input.error { border-color: #dc3545 !important; }
    .field-error { color: #dc3545; font-size: 0.8rem; margin-top: 5px; display: flex; align-items: center; gap: 5px; }
`;
document.head.appendChild(style);