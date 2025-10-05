document.addEventListener('DOMContentLoaded', () => {
    const resetForm = document.getElementById('resetForm');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'text-danger mt-3 text-center';
    errorMessage.style.display = 'none';

    // Append error message div to form
    resetForm.parentNode.insertBefore(errorMessage, resetForm.nextSibling);

    // Get token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
        document.getElementById('token').value = token;
    } else {
        errorMessage.textContent = 'Invalid or missing reset token';
        errorMessage.style.display = 'block';
        return;
    }

    resetForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorMessage.style.display = 'none';
        const resetBtn = document.getElementById('resetBtn');
        resetBtn.disabled = true;
        resetBtn.textContent = 'Resetting...';

        const formData = new FormData(resetForm);
        const data = {
            token: formData.get('token'),
            new_password: formData.get('new_password'),
            new_password_verify: formData.get('new_password_verify')
        };

        if (data.new_password !== data.new_password_verify) {
            errorMessage.textContent = 'Passwords do not match';
            errorMessage.style.display = 'block';
            resetBtn.disabled = false;
            resetBtn.textContent = 'Reset';
            return;
        }

        if (data.new_password.length < 8) {
            errorMessage.textContent = 'Password must be at least 8 characters';
            errorMessage.style.display = 'block';
            resetBtn.disabled = false;
            resetBtn.textContent = 'Reset';
            return;
        }

        try {
            const response = await fetch(`${window.API_BASE_URL}/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.detail || 'Failed to reset password');
            }

            alert('Password reset successfully! Please log in with your new password.');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Error resetting password:', error);
            errorMessage.textContent = error.message;
            errorMessage.style.display = 'block';
        } finally {
            resetBtn.disabled = false;
            resetBtn.textContent = 'Reset';
        }
    });
});