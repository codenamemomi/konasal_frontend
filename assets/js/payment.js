document.addEventListener('DOMContentLoaded', () => {
    const courseSelect = document.getElementById('courseSelect');
    const enrollmentForm = document.getElementById('enrollmentForm');
    const fullPaymentRadio = document.getElementById('fullPayment');
    const flexiblePaymentRadio = document.getElementById('flexiblePayment');
    const promoCodeSection = document.getElementById('promoCodeSection');
    const applyPromoButton = document.getElementById('applyPromo');
    const paymentSummary = document.getElementById('paymentSummary');

    let courses = [];
    let selectedCourse = null;
    let discountApplied = false;

    // Get course ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    // Fetch courses
    fetch(`${API_BASE_URL}/courses`)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch courses');
            return response.json();
        })
        .then(data => {
            courses = data;
            courseSelect.innerHTML = '<option value="">Select a course</option>';
            data.forEach(course => {
                const option = document.createElement('option');
                option.value = course.id;
                option.textContent = `${course.name} - $${parseFloat(course.price).toFixed(2)}`;
                courseSelect.appendChild(option);
            });
            // Pre-select course if courseId is provided
            if (courseId) {
                courseSelect.value = courseId;
                selectedCourse = courses.find(course => course.id == courseId);
                updatePaymentSummary();
            }
        })
        .catch(error => {
            console.error('Error fetching courses:', error);
            paymentSummary.innerHTML = '<p class="error-message">Failed to load courses. Please try again.</p>';
        });

    // Toggle promo code field
    fullPaymentRadio.addEventListener('change', () => {
        promoCodeSection.style.display = 'block';
        updatePaymentSummary();
    });

    flexiblePaymentRadio.addEventListener('change', () => {
        promoCodeSection.style.display = 'none';
        discountApplied = false;
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
        const downPayment = flexiblePaymentRadio.checked ? (price * 0.5).toFixed(2) : null;
        paymentSummary.innerHTML = `
            <p><strong>Course:</strong> ${selectedCourse.name}</p>
            <p><strong>Total Price:</strong> $${price.toFixed(2)}</p>
            ${flexiblePaymentRadio.checked ? `
                <p><strong>Down Payment (50%):</strong> $${downPayment}</p>
                <p><strong>Balance (50%):</strong> $${downPayment} (due after 3rd class)</p>
            ` : ''}
        `;
    }

    // Update selected course
    courseSelect.addEventListener('change', () => {
        selectedCourse = courses.find(course => course.id == courseSelect.value);
        discountApplied = false;
        updatePaymentSummary();
    });

    // Form submission
    enrollmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!selectedCourse) {
            paymentSummary.innerHTML = '<p class="error-message">Please select a course.</p>';
            return;
        }
        const token = localStorage.getItem('access_token');
        if (!token) {
            window.location.href = 'login.html';
            return;
        }
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const paymentOption = fullPaymentRadio.checked ? 'full' : 'flexible';
        const promoCode = fullPaymentRadio.checked ? document.getElementById('promoCode').value : '';

        const payload = {
            course_id: selectedCourse.id,
            payment_option: paymentOption,
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
            if (response.ok) {
                localStorage.setItem('enrollment_id', data.enrollment_id); // Store enrollment_id
                if (paymentOption === 'full') {
                    // Initialize PayPal payment
                    paypal.Buttons({
                        createOrder: async (data, actions) => {
                            let price = parseFloat(selectedCourse.price);
                            if (discountApplied) price *= 0.7;
                            try {
                                const orderResponse = await fetch(`${API_BASE_URL}/payments/create-order`, {
                                    method: 'POST',
                                    headers: {
                                        'Authorization': `Bearer ${token}`,
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        course_id: selectedCourse.id,
                                        amount: price,
                                        currency: 'USD',
                                        enrollment_id: localStorage.getItem('enrollment_id')
                                    })
                                });
                                const orderData = await orderResponse.json();
                                if (!orderResponse.ok) throw new Error(orderData.detail);
                                return orderData.order_id; // Extract order_id from response
                            } catch (error) {
                                paymentSummary.innerHTML = `<p class="error-message">Error creating payment: ${error.message}</p>`;
                                throw error;
                            }
                        },
                        onApprove: async (data, actions) => {
                            try {
                                const captureResponse = await fetch(`${API_BASE_URL}/payments/capture/${data.orderID}`, {
                                    method: 'POST',
                                    headers: {
                                        'Authorization': `Bearer ${token}`,
                                        'Content-Type': 'application/json'
                                    }
                                });
                                const captureData = await captureResponse.json();
                                if (!captureResponse.ok) throw new Error(captureData.detail);
                                alert('Payment and enrollment successful!');
                                localStorage.removeItem('enrollment_id');
                                window.location.href = 'profile.html';
                            } catch (error) {
                                paymentSummary.innerHTML = `<p class="error-message">Error capturing payment: ${error.message}</p>`;
                            }
                        },
                        onError: (err) => {
                            paymentSummary.innerHTML = `<p class="error-message">Payment error: ${err.message}</p>`;
                        }
                    }).render('#paypal-button-container');
                } else {
                    alert(`Enrollment successful! Enrollment ID: ${data.enrollment_id}. Please complete the down payment via Zelle or Bank Transfer.`);
                    localStorage.removeItem('enrollment_id');
                    window.location.href = 'profile.html';
                }
            } else {
                paymentSummary.innerHTML = `<p class="error-message">Enrollment failed: ${data.detail}</p>`;
            }
        } catch (error) {
            paymentSummary.innerHTML = `<p class="error-message">Error submitting enrollment: ${error.message}</p>`;
        }
    });
});