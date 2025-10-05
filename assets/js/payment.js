document.addEventListener('DOMContentLoaded', () => {
    const courseSelect = document.getElementById('courseSelect');
    const enrollmentModal = new bootstrap.Modal(document.getElementById('enrollmentModal'));
    const enrollmentForm = document.getElementById('enrollmentForm');
    const fullPaymentRadio = document.getElementById('fullPayment');
    const flexiblePaymentRadio = document.getElementById('flexiblePayment');
    const promoCodeSection = document.getElementById('promoCodeSection');
    const applyPromoButton = document.getElementById('applyPromo');
    const proceedToEnrollmentBtn = document.getElementById('proceedToEnrollment');
    const paymentSummary = document.getElementById('paymentSummary');
    const promoCodeInput = document.getElementById('promoCode');

    let courses = [];
    let selectedCourse = null;
    let discountApplied = false;
    let appliedPromoCode = null;
    let selectedPaymentOption = null;
    let paymentAmount = 0;
    let userEmail = localStorage.getItem('user_email');

    // Get course ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    // Fetch user email if not already stored
    async function fetchUserEmail() {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) throw new Error('No authentication token found');
            const response = await fetch(`${API_BASE_URL}/users/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error(`Failed to fetch user profile: ${response.statusText}`);
            const data = await response.json();
            userEmail = data.email;
            localStorage.setItem('user_email', userEmail);
            document.getElementById('email').value = userEmail;
            return userEmail;
        } catch (error) {
            console.error('Error fetching user email:', error);
            showError(error.message || 'Please log in again.');
            setTimeout(() => window.location.href = 'login.html', 2000);
        }
    }

    // Fetch courses
    async function fetchCourses() {
        try {
            const response = await fetch(`${API_BASE_URL}/courses`);
            if (!response.ok) throw new Error(`Failed to fetch courses: ${response.statusText}`);
            courses = await response.json();
            courseSelect.innerHTML = '<option value="">Select a course</option>';
            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.id;
                option.textContent = `${course.name} - $${parseFloat(course.price).toFixed(2)}`;
                courseSelect.appendChild(option);
            });
            if (courseId) {
                courseSelect.value = courseId;
                selectedCourse = courses.find(course => course.id == courseId);
                updatePaymentSummary();
                enrollmentModal.show();
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
            showError(`Failed to load courses: ${error.message}`);
        }
    }

    // Initialize
    async function init() {
        if (!userEmail) await fetchUserEmail();
        await fetchCourses();
    }
    init();

    // Show enrollment modal when course is selected
    courseSelect.addEventListener('change', () => {
        selectedCourse = courses.find(course => course.id == courseSelect.value);
        if (selectedCourse) {
            discountApplied = false;
            appliedPromoCode = null;
            promoCodeInput.value = '';
            updatePaymentSummary();
            enrollmentModal.show();
        }
    });

    // Handle Proceed to Enrollment button click
    proceedToEnrollmentBtn.addEventListener('click', () => {
        selectedCourse = courses.find(course => course.id == courseSelect.value);
        if (selectedCourse) {
            discountApplied = false;
            appliedPromoCode = null;
            promoCodeInput.value = '';
            updatePaymentSummary();
            enrollmentModal.show();
        } else {
            showError('Please select a course first.');
        }
    });

    // Toggle promo code field
    fullPaymentRadio.addEventListener('change', () => {
        promoCodeSection.style.display = 'block';
        selectedPaymentOption = 'full';
        updatePaymentSummary();
    });

    flexiblePaymentRadio.addEventListener('change', () => {
        promoCodeSection.style.display = 'none';
        discountApplied = false;
        appliedPromoCode = null;
        promoCodeInput.value = '';
        updatePaymentSummary();
        selectedPaymentOption = 'flexible';
    });

    // Apply promo code
    applyPromoButton.addEventListener('click', () => {
        const promoCode = promoCodeInput.value.trim();
        if (promoCode.toLowerCase() === 'konasal30' && fullPaymentRadio.checked) {
            discountApplied = true;
            appliedPromoCode = promoCode;
            showSuccess(`Promo code ${promoCode} applied! 30% discount.`);
            updatePaymentSummary();
        } else {
            discountApplied = false;
            appliedPromoCode = null;
            showError(promoCode ? 'Invalid promo code or not applicable.' : 'Please enter a promo code.');
            updatePaymentSummary();
        }
    });

    // Update payment summary
    function updatePaymentSummary() {
        if (!selectedCourse) {
            paymentSummary.innerHTML = '<p>Please select a course.</p>';
            return;
        }
        let price = parseFloat(selectedCourse.price);
        if (fullPaymentRadio.checked && discountApplied) {
            price *= 0.7; // 30% discount
        }
        paymentAmount = selectedPaymentOption === 'flexible' ? price * 0.5 : price;
        const downPayment = selectedPaymentOption === 'flexible' ? (price * 0.5).toFixed(2) : null;
        paymentSummary.innerHTML = `
            <p><strong>Course:</strong> ${selectedCourse.name}</p>
            <p><strong>Total Price:</strong> $${parseFloat(selectedCourse.price).toFixed(2)}</p>
            ${appliedPromoCode ? `<p><strong>Promo Code:</strong> ${appliedPromoCode} (30% off)</p>` : ''}
            ${selectedPaymentOption === 'flexible' ? `
                <p><strong>Down Payment (50%):</strong> $${downPayment}</p>
                <p><strong>Balance (50%):</strong> $${downPayment} (due after 3rd class)</p>
            ` : ''}
            <p><strong>Amount Due Now:</strong> $${paymentAmount.toFixed(2)}</p>
        `;
    }

    // Handle enrollment form submission
    enrollmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = enrollmentForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Enrolling...';

        if (!selectedCourse) {
            showError('Please select a course.');
            submitButton.disabled = false;
            submitButton.textContent = 'Enroll';
            return;
        }

        const token = localStorage.getItem('access_token');
        if (!token) {
            showError('Please log in to enroll.');
            setTimeout(() => window.location.href = 'login.html', 2000);
            submitButton.disabled = false;
            submitButton.textContent = 'Enroll';
            return;
        }

        userEmail = document.getElementById('email').value.trim();
        if (!userEmail) {
            showError('Please enter your email.');
            submitButton.disabled = false;
            submitButton.textContent = 'Enroll';
            return;
        }

        selectedPaymentOption = fullPaymentRadio.checked ? 'full' : 'flexible';
        const promoCode = fullPaymentRadio.checked ? promoCodeInput.value.trim() : null;

        const payload = {
            course_id: parseInt(selectedCourse.id),
            payment_option: selectedPaymentOption,
            promo_code: promoCode
        };

        try {
            const response = await fetch(`${API_BASE_URL}/courses/enroll`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.detail || 'Enrollment failed');
            }

            paymentAmount = parseFloat(data.price);
            if (selectedPaymentOption === 'flexible') {
                paymentAmount *= 0.5;
            }

                // In the enrollment form submission handler, update this section:
                showSuccess(data.message);
                enrollmentModal.hide();

                // CRITICAL FIX: Store all data in localStorage before redirecting
                localStorage.setItem('enrollment_id', data.enrollment_id);
                localStorage.setItem('payment_amount', paymentAmount.toFixed(2));
                localStorage.setItem('selected_course', JSON.stringify(selectedCourse));
                localStorage.setItem('selected_payment_option', selectedPaymentOption);
                localStorage.setItem('user_email', userEmail);

                // Store discount information - USE DATA FROM BACKEND RESPONSE
                localStorage.setItem('discount_applied', (data.promo_code_applied !== null).toString());
                localStorage.setItem('applied_promo_code', data.promo_code_applied || appliedPromoCode || '');
                localStorage.setItem('original_price', data.original_price || selectedCourse.price);

                // Redirect to payment method page
                window.location.href = `payment-method.html`;
                    } catch (error) {
            console.error('Error enrolling:', error);
            showError(`Error: ${error.message}`);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Enroll';
        }
    });

    // Helper functions for error and success messages
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger mt-3';
        errorDiv.textContent = message;
        paymentSummary.prepend(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    }

    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert-success mt-3';
        successDiv.textContent = message;
        paymentSummary.prepend(successDiv);
        setTimeout(() => successDiv.remove(), 5000);
    }
});