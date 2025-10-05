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

    // Get data from localStorage
    const enrollmentId = localStorage.getItem('enrollment_id');
    const paymentAmount = parseFloat(localStorage.getItem('payment_amount'));
    const selectedCourse = JSON.parse(localStorage.getItem('selected_course') || 'null');
    const selectedPaymentOption = localStorage.getItem('selected_payment_option');
    
    // NEW: Get discount information from localStorage
    const discountApplied = localStorage.getItem('discount_applied') === 'true';
    const appliedPromoCode = localStorage.getItem('applied_promo_code');
    const originalPrice = parseFloat(localStorage.getItem('original_price') || selectedCourse?.price);

    // Initialize payment summary
    function initPaymentSummary() {
        if (!selectedCourse || !paymentAmount || !enrollmentId) {
            paymentSummary.innerHTML = `
                <div class="alert alert-danger">
                    <p><strong>No enrollment data found.</strong></p>
                    <p>Please start the enrollment process again.</p>
                    <button class="btn btn-primary mt-2" onclick="window.location.href='payment.html'">
                        Go Back to Enrollment
                    </button>
                </div>
            `;
            
            // Disable the form
            paymentMethodForm.style.display = 'none';
            confirmPaymentMethod.disabled = true;
            return;
        }

        const price = parseFloat(selectedCourse.price);
        const downPayment = selectedPaymentOption === 'flexible' ? (price * 0.5).toFixed(2) : null;
        
        // Build the payment summary HTML with discount information
        let summaryHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Enrollment Summary</h5>
                    <p><strong>Course:</strong> ${selectedCourse.name}</p>
        `;

        // Show original price and discount if applied
        if (discountApplied && appliedPromoCode) {
            summaryHTML += `
                <p><strong>Original Price:</strong> <span style="text-decoration: line-through;">$${originalPrice.toFixed(2)}</span></p>
                <p><strong>Discount Applied:</strong> ${appliedPromoCode} (30% off)</p>
                <p><strong>Discounted Price:</strong> $${price.toFixed(2)}</p>
            `;
        } else {
            summaryHTML += `<p><strong>Total Price:</strong> $${price.toFixed(2)}</p>`;
        }

        // Add payment plan information
        summaryHTML += selectedPaymentOption === 'flexible' ? `
            <p><strong>Payment Plan:</strong> Flexible (50% Down, 50% After 3rd Class)</p>
            <p><strong>Down Payment (50%):</strong> $${downPayment}</p>
            <p><strong>Balance (50%):</strong> $${downPayment} (due after 3rd class)</p>
        ` : `
            <p><strong>Payment Plan:</strong> Full Payment</p>
        `;

        // Add amount due now
        summaryHTML += `<p class="fw-bold text-primary">Amount Due Now: $${paymentAmount.toFixed(2)}</p>`;

        summaryHTML += `</div></div>`;
        paymentSummary.innerHTML = summaryHTML;
        
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
            renderPayPalButtons();
        }
    });

    // Render PayPal buttons
    function renderPayPalButtons() {
        // Ensure PayPal SDK is loaded before rendering buttons
        if (typeof paypal === 'undefined') {
            paymentSummary.innerHTML += '<div class="alert alert-warning mt-3">PayPal SDK not loaded. Please try again.</div>';
            return;
        }

        // Clear existing buttons
        paypalContainer.innerHTML = '<div id="paypal-button-container"></div>';

        paypal.Buttons({
            createOrder: async (data, actions) => {
                try {
                    const token = localStorage.getItem('access_token');
                    if (!token) {
                        throw new Error('Authentication required. Please log in again.');
                    }

                    const orderResponse = await fetch(`${API_BASE_URL}/payments/create-order`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            course_id: parseInt(selectedCourse.id),
                            amount: paymentAmount,
                            currency: 'USD',
                            enrollment_id: enrollmentId
                        })
                    });
                    
                    if (!orderResponse.ok) {
                        const errorData = await orderResponse.json();
                        throw new Error(errorData.detail || 'Failed to create PayPal order');
                    }
                    
                    const orderData = await orderResponse.json();
                    return orderData.order_id;
                } catch (error) {
                    console.error('PayPal order creation error:', error);
                    paymentSummary.innerHTML += `<div class="alert alert-danger mt-3">Error creating payment: ${error.message}</div>`;
                    throw error;
                }
            },
            onApprove: async (data, actions) => {
                try {
                    const token = localStorage.getItem('access_token');
                    const captureResponse = await fetch(`${API_BASE_URL}/payments/capture/${data.orderID}`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                    
                    const captureData = await captureResponse.json();
                    if (!captureResponse.ok) {
                        throw new Error(captureData.detail || 'Failed to capture payment');
                    }
                    
                    // Success - show success message and redirect
                    paymentSummary.innerHTML = `
                        <div class="alert alert-success">
                            <h5>Payment Successful!</h5>
                            <p>Your enrollment in ${selectedCourse.name} has been confirmed.</p>
                            ${discountApplied ? `<p>Your ${appliedPromoCode} discount has been applied.</p>` : ''}
                            <p>Redirecting to your profile...</p>
                        </div>
                    `;
                    
                    // Clear enrollment data from localStorage
                    clearEnrollmentData();
                    
                    // Redirect to profile after a delay
                    setTimeout(() => {
                        window.location.href = 'profile.html';
                    }, 3000);
                    
                } catch (error) {
                    console.error('PayPal capture error:', error);
                    paymentSummary.innerHTML += `<div class="alert alert-danger mt-3">Error capturing payment: ${error.message}</div>`;
                }
            },
            onError: (err) => {
                console.error('PayPal error:', err);
                paymentSummary.innerHTML += `<div class="alert alert-danger mt-3">PayPal error: ${err.message}</div>`;
            },
            onCancel: (data) => {
                paymentSummary.innerHTML += '<div class="alert alert-warning mt-3">Payment was cancelled.</div>';
            }
        }).render('#paypal-button-container').catch(err => {
            console.error('Failed to render PayPal buttons:', err);
            paymentSummary.innerHTML += `<div class="alert alert-danger mt-3">Failed to load PayPal buttons: ${err.message}</div>`;
        });
    }

    // Handle manual payment method confirmation (Zelle/Bank Transfer)
    confirmPaymentMethod.addEventListener('click', async () => {
        const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (!selectedMethod) {
            paymentSummary.innerHTML += '<div class="alert alert-warning mt-3">Please select a payment method.</div>';
            return;
        }
        
        if (selectedMethod.value === 'zelle' || selectedMethod.value === 'bankTransfer') {
            try {
                const token = localStorage.getItem('access_token');
                const response = await fetch(`${API_BASE_URL}/payments/confirm-manual`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
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
                
                const methodName = selectedMethod.value === 'zelle' ? 'Zelle' : 'Bank Transfer';
                paymentSummary.innerHTML = `
                    <div class="alert alert-success">
                        <h5>Enrollment Submitted!</h5>
                        <p>Your enrollment in ${selectedCourse.name} is pending payment verification.</p>
                        ${discountApplied ? `<p>Your ${appliedPromoCode} discount has been applied.</p>` : ''}
                        <p>Please complete the ${methodName} payment of $${paymentAmount.toFixed(2)} using the provided instructions.</p>
                        <p>You will receive a confirmation email once your payment is verified.</p>
                    </div>
                `;
                
                // Clear enrollment data from localStorage
                clearEnrollmentData();
                
                // Redirect to profile after a delay
                setTimeout(() => {
                    window.location.href = 'profile.html';
                }, 5000);
                
            } catch (error) {
                console.error('Manual payment confirmation error:', error);
                paymentSummary.innerHTML += `<div class="alert alert-danger mt-3">Error confirming payment: ${error.message}</div>`;
            }
        }
    });

    // Helper function to clear enrollment data
    function clearEnrollmentData() {
        localStorage.removeItem('enrollment_id');
        localStorage.removeItem('payment_amount');
        localStorage.removeItem('selected_course');
        localStorage.removeItem('selected_payment_option');
        localStorage.removeItem('user_email');
        localStorage.removeItem('discount_applied');
        localStorage.removeItem('applied_promo_code');
        localStorage.removeItem('original_price');
    }
});