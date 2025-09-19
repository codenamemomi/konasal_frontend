document.addEventListener('DOMContentLoaded', () => {
    const paymentMethodForm = document.getElementById('paymentMethodForm');
    const paypalMethod = document.getElementById('paypalMethod');
    const zelleMethod = document.getElementById('zelleMethod');
    const bankTransferMethod = document.getElementById('bankTransferMethod');
    const paypalContainer = document.getElementById('paypalContainer');
    const zelleInstructions = document.getElementById('zelleInstructions');
    const bankTransferInstructions = document.getElementById('bankTransferInstructions');
    const zelleAmount = document.getElementById('zelleAmount');
    const bankTransferAmount = document.getElementById('bankTransferAmount');
    const confirmPaymentMethod = document.getElementById('confirmPaymentMethod');
    const paymentSummary = document.getElementById('paymentSummary');

    const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';
    const enrollmentId = localStorage.getItem('enrollment_id');
    const paymentAmount = parseFloat(localStorage.getItem('payment_amount'));
    const selectedCourse = JSON.parse(localStorage.getItem('selected_course'));
    const selectedPaymentOption = localStorage.getItem('selected_payment_option');

    // Initialize payment summary
    function initPaymentSummary() {
        if (!selectedCourse || !paymentAmount) {
            paymentSummary.innerHTML = '<p class="error-message">No enrollment data found. Please start over.</p>';
            setTimeout(() => { window.location.href = 'payment.html'; }, 3000);
            return;
        }
        const price = parseFloat(selectedCourse.price);
        const downPayment = selectedPaymentOption === 'flexible' ? (price * 0.5).toFixed(2) : null;
        paymentSummary.innerHTML = `
            <p><strong>Course:</strong> ${selectedCourse.name}</p>
            <p><strong>Total Price:</strong> $${price.toFixed(2)}</p>
            ${selectedPaymentOption === 'flexible' ? `
                <p><strong>Down Payment (50%):</strong> $${downPayment}</p>
                <p><strong>Balance (50%):</strong> $${downPayment} (due after 3rd class)</p>
            ` : ''}
        `;
        zelleAmount.textContent = `$${paymentAmount.toFixed(2)}`;
        bankTransferAmount.textContent = `$${paymentAmount.toFixed(2)}`;
    }
    initPaymentSummary();

    // Handle payment method selection
    paymentMethodForm.addEventListener('change', () => {
        paypalContainer.style.display = paypalMethod.checked ? 'block' : 'none';
        zelleInstructions.style.display = zelleMethod.checked ? 'block' : 'none';
        bankTransferInstructions.style.display = bankTransferMethod.checked ? 'block' : 'none';

        if (paypalMethod.checked) {
            // Ensure PayPal SDK is loaded before rendering buttons
            if (typeof paypal === 'undefined') {
                paymentSummary.innerHTML = '<p class="error-message">PayPal SDK not loaded. Please try again.</p>';
                return;
            }
            paypal.Buttons({
                createOrder: async (data, actions) => {
                    try {
                        const orderResponse = await fetch(`${API_BASE_URL}/payments/create-order`, {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                course_id: parseInt(selectedCourse.id),
                                amount: paymentAmount,
                                currency: 'USD',
                                enrollment_id: enrollmentId
                            })
                        });
                        const orderData = await orderResponse.json();
                        if (!orderResponse.ok) throw new Error(orderData.detail || 'Failed to create PayPal order');
                        return orderData.order_id;
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
                                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        const captureData = await captureResponse.json();
                        if (!captureResponse.ok) throw new Error(captureData.detail || 'Failed to capture payment');
                        alert('Payment and enrollment successful!');
                        localStorage.removeItem('enrollment_id');
                        localStorage.removeItem('payment_amount');
                        localStorage.removeItem('selected_course');
                        localStorage.removeItem('selected_payment_option');
                        localStorage.removeItem('user_email');
                        window.location.href = 'profile.html';
                    } catch (error) {
                        paymentSummary.innerHTML = `<p class="error-message">Error capturing payment: ${error.message}</p>`;
                    }
                },
                onError: (err) => {
                    paymentSummary.innerHTML = `<p class="error-message">PayPal error: ${err.message}</p>`;
                }
            }).render('#paypal-button-container').catch(err => {
                paymentSummary.innerHTML = `<p class="error-message">Failed to render PayPal buttons: ${err.message}</p>`;
            });
        }
    });

    // Handle payment method confirmation
    confirmPaymentMethod.addEventListener('click', async () => {
        const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (!selectedMethod) {
            paymentSummary.innerHTML = '<p class="error-message">Please select a payment method.</p>';
            return;
        }
        if (selectedMethod.value === 'zelle' || selectedMethod.value === 'bankTransfer') {
            try {
                const response = await fetch(`${API_BASE_URL}/payments/confirm-manual`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        enrollment_id: enrollmentId,
                        payment_method: selectedMethod.value,
                        amount: paymentAmount
                    })
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.detail || 'Failed to confirm manual payment');
                }
                alert(`Enrollment pending payment verification. Please complete the ${selectedMethod.value === 'zelle' ? 'Zelle' : 'Bank Transfer'} payment of $${paymentAmount.toFixed(2)} using the provided instructions.`);
                localStorage.removeItem('enrollment_id');
                localStorage.removeItem('payment_amount');
                localStorage.removeItem('selected_course');
                localStorage.removeItem('selected_payment_option');
                localStorage.removeItem('user_email');
                window.location.href = 'profile.html';
            } catch (error) {
                paymentSummary.innerHTML = `<p class="error-message">Error confirming payment: ${error.message}</p>`;
            }
        }
    });
});