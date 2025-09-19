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

    let courses = [];
    let selectedCourse = null;
    let discountApplied = false;
    let selectedPaymentOption = null;
    let paymentAmount = 0;
    let userEmail = localStorage.getItem('user_email'); // Assume email is stored after login


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
            return userEmail;
        } catch (error) {
            console.error('Error fetching user email:', error);
            paymentSummary.innerHTML = `<p class="error-message">Error: ${error.message}. Please log in again.</p>`;
            window.location.href = 'login.html';
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
            paymentSummary.innerHTML = `<p class="error-message">Failed to load courses: ${error.message}</p>`;
        }
    }

    // Initialize
    async function init() {
        if (!userEmail) await fetchUserEmail();
        await fetchCourses();
    }
    init();

    // Show enrollment modal when course is selected or button is clicked
    courseSelect.addEventListener('change', () => {
        selectedCourse = courses.find(course => course.id == courseSelect.value);
        if (selectedCourse) {
            discountApplied = false;
            updatePaymentSummary();
            enrollmentModal.show();
        }
    });

    // Handle Proceed to Enrollment button click
    proceedToEnrollmentBtn.addEventListener('click', () => {
        selectedCourse = courses.find(course => course.id == courseSelect.value);
        if (selectedCourse) {
            discountApplied = false;
            updatePaymentSummary();
            enrollmentModal.show();
        } else {
            paymentSummary.innerHTML = '<p class="error-message">Please select a course first.</p>';
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
        selectedPaymentOption = 'flexible';
        updatePaymentSummary();
    });

    // Apply promo code
    applyPromoButton.addEventListener('click', () => {
        const promoCode = document.getElementById('promoCode').value.trim();
        if (promoCode === 'KONASAL30' && fullPaymentRadio.checked) {
            discountApplied = true;
            paymentSummary.innerHTML = '<p class="success-message">Promo code KONASAL30 applied! 30% discount.</p>';
        } else {
            discountApplied = false;
            paymentSummary.innerHTML = '<p class="error-message">Invalid promo code or not applicable.</p>';
        }
        updatePaymentSummary();
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
            <p><strong>Total Price:</strong> $${price.toFixed(2)}</p>
            ${selectedPaymentOption === 'flexible' ? `
                <p><strong>Down Payment (50%):</strong> $${downPayment}</p>
                <p><strong>Balance (50%):</strong> $${downPayment} (due after 3rd class)</p>
            ` : ''}
        `;
    }

    // Handle enrollment form submission
    enrollmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!selectedCourse) {
            paymentSummary.innerHTML = '<p class="error-message">Please select a course.</p>';
            return;
        }
        const token = localStorage.getItem('access_token');
        if (!token) {
            paymentSummary.innerHTML = '<p class="error-message">Please log in to enroll.</p>';
            window.location.href = 'login.html';
            return;
        }
        userEmail = document.getElementById('email').value.trim();
        if (!userEmail) {
            paymentSummary.innerHTML = '<p class="error-message">Please enter your email.</p>';
            return;
        }
        selectedPaymentOption = fullPaymentRadio.checked ? 'full' : 'flexible';
        const promoCode = fullPaymentRadio.checked ? document.getElementById('promoCode').value.trim() : '';

        const payload = {
            course_id: parseInt(selectedCourse.id),
            payment_option: selectedPaymentOption,
            promo_code: promoCode || null
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

            const enrollmentId = data.enrollment_id;
            paymentAmount = parseFloat(selectedCourse.price);
            if (selectedPaymentOption === 'full' && discountApplied) {
                paymentAmount *= 0.7;
            } else if (selectedPaymentOption === 'flexible') {
                paymentAmount *= 0.5;
            }

            // Store data for payment-method.html
            localStorage.setItem('enrollment_id', enrollmentId);
            localStorage.setItem('payment_amount', paymentAmount.toFixed(2));
            localStorage.setItem('selected_course', JSON.stringify(selectedCourse));
            localStorage.setItem('selected_payment_option', selectedPaymentOption);

            paymentSummary.innerHTML = `<p class="success-message">${data.message}</p>`;
            enrollmentModal.hide();
            window.location.href = 'payment-method.html';
        } catch (error) {
            paymentSummary.innerHTML = `<p class="error-message">Error: ${error.message}</p>`;
        }
    });
});