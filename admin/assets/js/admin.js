document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const paymentsTable = document.getElementById('payments-table');
    const enrollmentsTable = document.getElementById('enrollments-table');
    const coursesTable = document.getElementById('courses-table');
    const usersTable = document.getElementById('users-table');
    const paymentsSearch = document.getElementById('payments-search');
    const enrollmentsSearch = document.getElementById('enrollments-search');
    const coursesSearch = document.getElementById('courses-search');
    const usersSearch = document.getElementById('users-search');
    const createCourseForm = document.getElementById('createCourseForm');
    const createCourseBtn = document.getElementById('createCourseBtn');
    const editCourseForm = document.getElementById('editCourseForm');
    const editCourseBtn = document.getElementById('editCourseBtn');

    // Headers for API calls
    const headers = {
        'Content-Type': 'application/json'
    };

    // Cached data for search
    let allPayments = [];
    let allEnrollments = [];
    let allCourses = [];
    let allUsers = [];

    // Validate session with a test API call
    async function validateToken() {
        try {
            const response = await fetch(`${window.API_BASE_URL}/admin/payments`, {
                headers,
                credentials: 'include'
            });
            if (response.status === 401) {
                showToast('error', 'Session expired. Please log in again.');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
                return false;
            }
            return true;
        } catch (error) {
            showToast('error', 'Network error. Please check your connection.');
            window.location.href = 'login.html';
            return false;
        }
    }

    // Logout handler
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                const response = await fetch(`${window.API_BASE_URL}/admin/logout`, {
                    method: 'POST',
                    headers,
                    credentials: 'include'
                });
                const data = await response.json();
                if (response.ok) {
                    showToast('success', data.message || 'Logged out successfully!');
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 1500);
                } else {
                    showToast('error', data.detail || 'Logout failed. Please try again.');
                }
            } catch (error) {
                showToast('error', 'Network error. Please check your connection.');
                window.location.href = 'login.html';
            }
        });
    }

    // Fetch and populate payments
    async function fetchPayments() {
        try {
            paymentsTable.innerHTML = '<tr><td colspan="7" class="text-center"><i class="fas fa-spinner fa-spin"></i> Loading...</td></tr>';
            const response = await fetch(`${window.API_BASE_URL}/admin/payments`, {
                headers,
                credentials: 'include'
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            allPayments = await response.json();
            renderPayments(allPayments);
        } catch (error) {
            showToast('error', 'Failed to load payments.');
            paymentsTable.innerHTML = '<tr><td colspan="7" class="text-center">Failed to load payments.</td></tr>';
        }
    }

    function renderPayments(payments) {
        paymentsTable.innerHTML = '';
        if (payments.length === 0) {
            paymentsTable.innerHTML = '<tr><td colspan="7" class="text-center">No payments found.</td></tr>';
            return;
        }
        payments.forEach(payment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payment.id}</td>
                <td>${payment.email}</td>
                <td>${payment.course_name}</td>
                <td>${payment.amount} ${payment.currency}</td>
                <td>${new Date(payment.created_at).toLocaleString()}</td>
                <td>
                    <span class="status-badge status-${payment.status}">${payment.status}</span>
                    <select class="form-select status-select" data-id="${payment.id}" style="display: none;">
                        <option value="pending" ${payment.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="completed" ${payment.status === 'completed' ? 'selected' : ''}>Completed</option>
                        <option value="failed" ${payment.status === 'failed' ? 'selected' : ''}>Failed</option>
                    </select>
                </td>
                <td>
                    <button class="btn btn-sm btn-primary edit-status-btn" data-id="${payment.id}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-primary save-status-btn" data-id="${payment.id}" style="display: none;">
                        <i class="fas fa-save"></i> Save
                    </button>
                    <button class="btn btn-sm btn-secondary cancel-status-btn" data-id="${payment.id}" style="display: none;">
                        <i class="fas fa-times"></i> Cancel
                    </button>
                </td>
            `;
            paymentsTable.appendChild(row);
        });
        document.querySelectorAll('.edit-status-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const row = e.target.closest('tr');
                const paymentId = e.target.dataset.id;
                row.querySelector('.status-badge').style.display = 'none';
                row.querySelector('.status-select').style.display = 'inline-block';
                row.querySelector('.edit-status-btn').style.display = 'none';
                row.querySelector('.save-status-btn').style.display = 'inline-block';
                row.querySelector('.cancel-status-btn').style.display = 'inline-block';
            });
        });
        document.querySelectorAll('.cancel-status-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const row = e.target.closest('tr');
                const select = row.querySelector('.status-select');
                select.value = select.dataset.originalValue || select.querySelector('option[selected]').value;
                row.querySelector('.status-badge').style.display = 'inline-block';
                row.querySelector('.status-select').style.display = 'none';
                row.querySelector('.edit-status-btn').style.display = 'inline-block';
                row.querySelector('.save-status-btn').style.display = 'none';
                row.querySelector('.cancel-status-btn').style.display = 'none';
            });
        });
        document.querySelectorAll('.save-status-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const paymentId = e.target.dataset.id;
                const row = e.target.closest('tr');
                const select = row.querySelector('.status-select');
                const status = select.value;
                try {
                    e.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
                    e.target.disabled = true;
                    const response = await fetch(`${window.API_BASE_URL}/admin/payments/${paymentId}/status`, {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify({ status }),
                        credentials: 'include'
                    });
                    if (response.ok) {
                        showToast('success', 'Payment status updated!');
                        await fetchPayments();
                    } else {
                        const data = await response.json();
                        showToast('error', data.detail || 'Failed to update payment status.');
                    }
                } catch (error) {
                    showToast('error', 'Network error.');
                } finally {
                    e.target.innerHTML = '<i class="fas fa-save"></i> Save';
                    e.target.disabled = false;
                }
            });
        });
    }

    // Fetch and populate enrollments
    async function fetchEnrollments() {
        try {
            enrollmentsTable.innerHTML = '<tr><td colspan="9" class="text-center"><i class="fas fa-spinner fa-spin"></i> Loading...</td></tr>';
            const response = await fetch(`${window.API_BASE_URL}/admin/enrollments`, {
                headers,
                credentials: 'include'
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            allEnrollments = await response.json();
            renderEnrollments(allEnrollments);
        } catch (error) {
            showToast('error', 'Failed to load enrollments.');
            enrollmentsTable.innerHTML = '<tr><td colspan="9" class="text-center">Failed to load enrollments.</td></tr>';
        }
    }

    function renderEnrollments(enrollments) {
        enrollmentsTable.innerHTML = '';
        if (enrollments.length === 0) {
            enrollmentsTable.innerHTML = '<tr><td colspan="9" class="text-center">No enrollments found.</td></tr>';
            return;
        }
        enrollments.forEach(enrollment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${enrollment.id}</td>
                <td>${enrollment.email}</td>
                <td>${enrollment.course_name}</td>
                <td>${enrollment.phone_number || 'N/A'}</td>
                <td>${enrollment.promo_code || 'N/A'}</td>
                <td>${enrollment.payment_option || 'N/A'}</td>
                <td>
                    <input type="number" class="form-control progress-input" data-id="${enrollment.id}" value="${enrollment.progress}" min="0" max="100" style="width: 80px;">
                </td>
                <td>
                    <span class="status-badge status-${enrollment.status}">${enrollment.status}</span>
                    <select class="form-select status-select" data-id="${enrollment.id}" style="display: none;">
                        <option value="pending" ${enrollment.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="active" ${enrollment.status === 'active' ? 'selected' : ''}>Active</option>
                        <option value="completed" ${enrollment.status === 'completed' ? 'selected' : ''}>Completed</option>
                        <option value="cancelled" ${enrollment.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </td>
                <td>
                    <button class="btn btn-sm btn-primary edit-status-btn" data-id="${enrollment.id}">
                        <i class="fas fa-edit"></i> Edit Status
                    </button>
                    <button class="btn btn-sm btn-primary save-status-btn" data-id="${enrollment.id}" style="display: none;">
                        <i class="fas fa-save"></i> Save Status
                    </button>
                    <button class="btn btn-sm btn-secondary cancel-status-btn" data-id="${enrollment.id}" style="display: none;">
                        <i class="fas fa-times"></i> Cancel
                    </button>
                    <button class="btn btn-sm btn-primary save-progress-btn" data-id="${enrollment.id}">
                        <i class="fas fa-save"></i> Save Progress
                    </button>
                </td>
            `;
            enrollmentsTable.appendChild(row);
        });
        document.querySelectorAll('.edit-status-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const row = e.target.closest('tr');
                const enrollmentId = e.target.dataset.id;
                const select = row.querySelector('.status-select');
                select.dataset.originalValue = select.value;
                row.querySelector('.status-badge').style.display = 'none';
                row.querySelector('.status-select').style.display = 'inline-block';
                row.querySelector('.edit-status-btn').style.display = 'none';
                row.querySelector('.save-status-btn').style.display = 'inline-block';
                row.querySelector('.cancel-status-btn').style.display = 'inline-block';
            });
        });
        document.querySelectorAll('.cancel-status-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const row = e.target.closest('tr');
                const select = row.querySelector('.status-select');
                select.value = select.dataset.originalValue || select.querySelector('option[selected]').value;
                row.querySelector('.status-badge').style.display = 'inline-block';
                row.querySelector('.status-select').style.display = 'none';
                row.querySelector('.edit-status-btn').style.display = 'inline-block';
                row.querySelector('.save-status-btn').style.display = 'none';
                row.querySelector('.cancel-status-btn').style.display = 'none';
            });
        });
        document.querySelectorAll('.save-status-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const enrollmentId = e.target.dataset.id;
                const row = e.target.closest('tr');
                const select = row.querySelector('.status-select');
                const status = select.value;
                try {
                    e.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
                    e.target.disabled = true;
                    const response = await fetch(`${window.API_BASE_URL}/admin/enrollments/${enrollmentId}/status`, {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify({ status }),
                        credentials: 'include'
                    });
                    if (response.ok) {
                        showToast('success', 'Enrollment status updated!');
                        await fetchEnrollments();
                    } else {
                        const data = await response.json();
                        showToast('error', data.detail || 'Failed to update enrollment status.');
                    }
                } catch (error) {
                    showToast('error', 'Network error.');
                } finally {
                    e.target.innerHTML = '<i class="fas fa-save"></i> Save Status';
                    e.target.disabled = false;
                }
            });
        });
        document.querySelectorAll('.save-progress-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const enrollmentId = e.target.dataset.id;
                const input = e.target.closest('tr').querySelector('.progress-input');
                const progress = parseInt(input.value);
                if (isNaN(progress) || progress < 0 || progress > 100) {
                    showToast('error', 'Progress must be between 0 and 100.');
                    return;
                }
                try {
                    e.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
                    e.target.disabled = true;
                    const response = await fetch(`${window.API_BASE_URL}/admin/enrollments/${enrollmentId}/progress`, {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify({ progress }),
                        credentials: 'include'
                    });
                    if (response.ok) {
                        showToast('success', 'Enrollment progress updated!');
                        await fetchEnrollments();
                    } else {
                        const data = await response.json();
                        showToast('error', data.detail || 'Failed to update enrollment progress.');
                    }
                } catch (error) {
                    showToast('error', 'Network error.');
                } finally {
                    e.target.innerHTML = '<i class="fas fa-save"></i> Save Progress';
                    e.target.disabled = false;
                }
            });
        });
    }

    // Fetch and populate courses
    async function fetchCourses() {
        try {
            coursesTable.innerHTML = '<tr><td colspan="3" class="text-center"><i class="fas fa-spinner fa-spin"></i> Loading...</td></tr>';
            const response = await fetch(`${window.API_BASE_URL}/admin/courses`, {
                headers,
                credentials: 'include'
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            allCourses = await response.json();
            renderCourses(allCourses);
        } catch (error) {
            showToast('error', 'Failed to load courses.');
            coursesTable.innerHTML = '<tr><td colspan="3" class="text-center">Failed to load courses.</td></tr>';
        }
    }

    function renderCourses(courses) {
        coursesTable.innerHTML = '';
        if (courses.length === 0) {
            coursesTable.innerHTML = '<tr><td colspan="3" class="text-center">No courses found.</td></tr>';
            return;
        }
        courses.forEach(course => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.id}</td>
                <td>${course.name}</td>
                <td>
                    <button class="btn btn-sm btn-primary edit-course-btn" data-id="${course.id}" data-bs-toggle="modal" data-bs-target="#editCourseModal">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger delete-course-btn" data-id="${course.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            `;
            coursesTable.appendChild(row);
        });
        document.querySelectorAll('.edit-course-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const courseId = e.target.dataset.id;
                const course = allCourses.find(c => c.id == courseId);
                if (course) {
                    document.getElementById('editCourseId').value = course.id;
                    document.getElementById('editCourseName').value = course.name;
                    document.getElementById('editCourseDescription').value = course.description || '';
                    document.getElementById('editCoursePrice').value = course.price || '';
                }
            });
        });
        document.querySelectorAll('.delete-course-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const courseId = e.target.dataset.id;
                if (confirm('Are you sure you want to delete this course?')) {
                    try {
                        e.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deleting...';
                        e.target.disabled = true;
                        const response = await fetch(`${window.API_BASE_URL}/admin/courses/${courseId}`, {
                            method: 'DELETE',
                            headers,
                            credentials: 'include'
                        });
                        if (response.ok) {
                            showToast('success', 'Course deleted!');
                            await fetchCourses();
                        } else {
                            const data = await response.json();
                            showToast('error', data.detail || 'Failed to delete course.');
                        }
                    } catch (error) {
                        showToast('error', 'Network error.');
                    } finally {
                        e.target.innerHTML = '<i class="fas fa-trash"></i> Delete';
                        e.target.disabled = false;
                    }
                }
            });
        });
    }

    // Fetch and populate users
    async function fetchUsers() {
        try {
            usersTable.innerHTML = '<tr><td colspan="4" class="text-center"><i class="fas fa-spinner fa-spin"></i> Loading...</td></tr>';
            const response = await fetch(`${window.API_BASE_URL}/admin/users`, {
                headers,
                credentials: 'include'
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            allUsers = await response.json();
            renderUsers(allUsers);
        } catch (error) {
            showToast('error', 'Failed to load users.');
            usersTable.innerHTML = '<tr><td colspan="4" class="text-center">Failed to load users.</td></tr>';
        }
    }

    function renderUsers(users) {
        usersTable.innerHTML = '';
        if (users.length === 0) {
            usersTable.innerHTML = '<tr><td colspan="4" class="text-center">No users found.</td></tr>';
            return;
        }
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td>${user.first_name} ${user.last_name}</td>
                <td>
                    <button class="btn btn-sm btn-info view-user-btn" data-id="${user.id}" data-bs-toggle="modal" data-bs-target="#userDetailsModal">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn btn-sm btn-danger delete-user-btn" data-id="${user.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            `;
            usersTable.appendChild(row);
        });
        document.querySelectorAll('.view-user-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const userId = e.target.dataset.id;
                try {
                    const response = await fetch(`${window.API_BASE_URL}/admin/users/${userId}`, {
                        headers,
                        credentials: 'include'
                    });
                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
                    const user = await response.json();
                    document.getElementById('userDetailId').textContent = user.id;
                    document.getElementById('userDetailEmail').textContent = user.email;
                    document.getElementById('userDetailName').textContent = `${user.first_name} ${user.last_name}`;
                    document.getElementById('userDetailPhone').textContent = user.phone_number || 'N/A';
                    document.getElementById('userDetailDob').textContent = user.date_of_birth || 'N/A';
                    document.getElementById('userDetailGender').textContent = user.gender || 'N/A';
                    document.getElementById('userDetailVerified').textContent = user.is_verified ? 'Yes' : 'No';
                    document.getElementById('userDetailPicture').textContent = user.profile_picture || 'N/A';
                } catch (error) {
                    showToast('error', 'Failed to load user details.');
                }
            });
        });
        document.querySelectorAll('.delete-user-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const userId = e.target.dataset.id;
                if (confirm('Are you sure you want to delete this user?')) {
                    try {
                        e.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deleting...';
                        e.target.disabled = true;
                        const response = await fetch(`${window.API_BASE_URL}/admin/users/${userId}`, {
                            method: 'DELETE',
                            headers,
                            credentials: 'include'
                        });
                        if (response.ok) {
                            showToast('success', 'User deleted!');
                            await fetchUsers();
                        } else {
                            const data = await response.json();
                            showToast('error', data.detail || 'Failed to delete user.');
                        }
                    } catch (error) {
                        showToast('error', 'Network error.');
                    } finally {
                        e.target.innerHTML = '<i class="fas fa-trash"></i> Delete';
                        e.target.disabled = false;
                    }
                }
            });
        });
    }

    // Handle course creation
    if (createCourseForm && createCourseBtn) {
        createCourseForm.addEventListener('submit', (e) => e.preventDefault());
        createCourseBtn.addEventListener('click', async () => {
            const nameInput = document.getElementById('courseName');
            const nameError = document.getElementById('courseNameError');
            nameError.style.display = 'none';
            nameInput.classList.remove('is-invalid');

            const courseData = {
                name: document.getElementById('courseName').value.trim(),
                description: document.getElementById('courseDescription').value.trim(),
                price: parseFloat(document.getElementById('coursePrice').value) || null
            };

            if (!courseData.name) {
                nameError.textContent = 'Course name is required.';
                nameError.style.display = 'block';
                nameInput.classList.add('is-invalid');
                return;
            }

            try {
                createCourseBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';
                createCourseBtn.disabled = true;
                const response = await fetch(`${window.API_BASE_URL}/admin/courses`, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(courseData),
                    credentials: 'include'
                });
                if (response.ok) {
                    showToast('success', 'Course created successfully!');
                    document.getElementById('createCourseForm').reset();
                    bootstrap.Modal.getInstance(document.getElementById('createCourseModal')).hide();
                    await fetchCourses();
                } else {
                    const data = await response.json();
                    showToast('error', data.detail || 'Failed to create course.');
                    nameError.textContent = data.detail || 'Failed to create course.';
                    nameError.style.display = 'block';
                    nameInput.classList.add('is-invalid');
                }
            } catch (error) {
                showToast('error', 'Network error.');
            } finally {
                createCourseBtn.innerHTML = '<i class="fas fa-save"></i> Create';
                createCourseBtn.disabled = false;
            }
        });
    }

    // Handle course editing
    if (editCourseForm && editCourseBtn) {
        editCourseForm.addEventListener('submit', (e) => e.preventDefault());
        editCourseBtn.addEventListener('click', async () => {
            const nameInput = document.getElementById('editCourseName');
            const nameError = document.getElementById('editCourseNameError');
            nameError.style.display = 'none';
            nameInput.classList.remove('is-invalid');

            const courseData = {
                name: document.getElementById('editCourseName').value.trim(),
                description: document.getElementById('editCourseDescription').value.trim(),
                price: parseFloat(document.getElementById('editCoursePrice').value) || null
            };

            if (!courseData.name) {
                nameError.textContent = 'Course name is required.';
                nameError.style.display = 'block';
                nameInput.classList.add('is-invalid');
                return;
            }

            const courseId = document.getElementById('editCourseId').value;

            try {
                editCourseBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
                editCourseBtn.disabled = true;
                const response = await fetch(`${window.API_BASE_URL}/admin/courses/${courseId}`, {
                    method: 'PUT',
                    headers,
                    body: JSON.stringify(courseData),
                    credentials: 'include'
                });
                if (response.ok) {
                    showToast('success', 'Course updated successfully!');
                    document.getElementById('editCourseForm').reset();
                    bootstrap.Modal.getInstance(document.getElementById('editCourseModal')).hide();
                    await fetchCourses();
                } else {
                    const data = await response.json();
                    showToast('error', data.detail || 'Failed to update course.');
                    nameError.textContent = data.detail || 'Failed to update course.';
                    nameError.style.display = 'block';
                    nameInput.classList.add('is-invalid');
                }
            } catch (error) {
                showToast('error', 'Network error.');
            } finally {
                editCourseBtn.innerHTML = '<i class="fas fa-save"></i> Save';
                editCourseBtn.disabled = false;
            }
        });
    }

    // Search functionality
    if (paymentsSearch) {
        paymentsSearch.addEventListener('input', () => {
            const query = paymentsSearch.value.toLowerCase();
            const filtered = allPayments.filter(p => 
                p.email.toLowerCase().includes(query) || 
                p.course_name.toLowerCase().includes(query)
            );
            renderPayments(filtered);
        });
    }

    if (enrollmentsSearch) {
        enrollmentsSearch.addEventListener('input', () => {
            const query = enrollmentsSearch.value.toLowerCase();
            const filtered = allEnrollments.filter(e => 
                e.email.toLowerCase().includes(query) || 
                e.course_name.toLowerCase().includes(query) ||
                (e.phone_number || '').toLowerCase().includes(query) ||
                (e.promo_code || '').toLowerCase().includes(query) ||
                (e.payment_option || '').toLowerCase().includes(query)
            );
            renderEnrollments(filtered);
        });
    }

    if (coursesSearch) {
        coursesSearch.addEventListener('input', () => {
            const query = coursesSearch.value.toLowerCase();
            const filtered = allCourses.filter(c => 
                c.name.toLowerCase().includes(query)
            );
            renderCourses(filtered);
        });
    }

    if (usersSearch) {
        usersSearch.addEventListener('input', () => {
            const query = usersSearch.value.toLowerCase();
            const filtered = allUsers.filter(u => 
                u.email.toLowerCase().includes(query) || 
                `${u.first_name} ${u.last_name}`.toLowerCase().includes(query)
            );
            renderUsers(filtered);
        });
    }

    // Show toast
    function showToast(type, message) {
        const existingToasts = document.querySelectorAll('.custom-toast');
        existingToasts.forEach(toast => toast.remove());

        const toast = document.createElement('div');
        toast.className = `custom-toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
                <button class="toast-dismiss"><i class="fas fa-times"></i></button>
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
        const dismissBtn = toast.querySelector('.toast-dismiss');
        if (dismissBtn) {
            dismissBtn.addEventListener('click', () => {
                toast.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            });
        }
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
        .toast-dismiss {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            margin-left: 10px;
            padding: 0;
        }
        .toast-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `;
    document.head.appendChild(style);

    // Run authentication check and fetch data if valid
    validateToken().then(isValid => {
        if (isValid) {
            fetchPayments();
            fetchEnrollments();
            fetchCourses();
            fetchUsers();
        }
    });
});