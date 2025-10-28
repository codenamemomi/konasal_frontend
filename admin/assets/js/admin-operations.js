document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const adminsTable = document.getElementById('admins-table');
    const adminsSearch = document.getElementById('admins-search');
    const createAdminForm = document.getElementById('createAdminForm');
    const createAdminBtn = document.getElementById('createAdminBtn');
    const editAdminForm = document.getElementById('editAdminForm');
    const editAdminBtn = document.getElementById('editAdminBtn');

    // Headers for API calls
    const headers = {
        'Content-Type': 'application/json'
    };

    // Cached data for search
    let allAdmins = [];
    let currentUserRole = null;

    // Validate session
    async function validateToken() {
        try {
            const response = await fetch(`${window.API_BASE_URL}/admin/admins`, {
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

    // Download helper function for admins
    async function downloadAdminsData() {
        try {
            const response = await fetch(`${window.API_BASE_URL}/admin/export/admins`, {
                headers,
                credentials: 'include'
            });
            
            if (response.status === 403) {
                showToast('error', 'Access denied. Super admin privileges required to export admin data.');
                return;
            }
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            // Create blob and download
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            
            // Get filename from Content-Disposition header
            const contentDisposition = response.headers.get('Content-Disposition');
            if (contentDisposition) {
                const filenameMatch = contentDisposition.match(/filename="(.+)"/);
                if (filenameMatch) {
                    a.download = filenameMatch[1];
                }
            } else {
                a.download = 'admins_export.csv';
            }
            
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            showToast('success', 'Admin data download started successfully!');
        } catch (error) {
            console.error('Download error:', error);
            showToast('error', 'Failed to download admin data. Please try again.');
        }
    }

    // Setup download event listeners
    function setupDownloadButtons() {
        const exportAdminsBtn = document.getElementById('exportAdminsBtn');
        if (exportAdminsBtn) {
            exportAdminsBtn.addEventListener('click', downloadAdminsData);
        }
    }

    // Fetch and populate admins
    async function fetchAdmins() {
        try {
            adminsTable.innerHTML = '<tr><td colspan="8" class="text-center"><i class="fas fa-spinner fa-spin"></i> Loading admins...</td></tr>';
            const response = await fetch(`${window.API_BASE_URL}/admin/admins`, {
                headers,
                credentials: 'include'
            });
            
            if (response.status === 403) {
                adminsTable.innerHTML = `
                    <tr>
                        <td colspan="8" class="text-center text-muted">
                            <i class="fas fa-lock me-2"></i>
                            Access denied. Super admin privileges required to manage admins.
                        </td>
                    </tr>
                `;
                document.querySelector('[data-bs-target="#createAdminModal"]').style.display = 'none';
                const exportAdminsBtn = document.getElementById('exportAdminsBtn');
                if (exportAdminsBtn) exportAdminsBtn.style.display = 'none';
                return;
            }
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            allAdmins = await response.json();
            renderAdmins(allAdmins);
        } catch (error) {
            console.error('Error fetching admins:', error);
            adminsTable.innerHTML = '<tr><td colspan="8" class="text-center">Failed to load admins. Please try again.</td></tr>';
        }
    }

    function renderAdmins(admins) {
        adminsTable.innerHTML = '';
        if (admins.length === 0) {
            adminsTable.innerHTML = '<tr><td colspan="8" class="text-center">No admins found.</td></tr>';
            return;
        }
        
        admins.forEach(admin => {
            const row = document.createElement('tr');
            const createdDate = new Date(admin.date_created + 'T' + admin.time_created);
            
            row.innerHTML = `
                <td class="text-muted">${admin.id.substring(0, 8)}...</td>
                <td>${admin.email}</td>
                <td>${admin.first_name} ${admin.last_name}</td>
                <td>
                    <span class="status-badge ${admin.role === 'super_admin' ? 'status-completed' : 'status-active'}">
                        ${admin.role.replace('_', ' ').toUpperCase()}
                    </span>
                </td>
                <td>
                    <span class="status-badge ${admin.is_active ? 'status-active' : 'status-cancelled'}">
                        ${admin.is_active ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                </td>
                <td class="text-muted">${admin.created_by ? 'Another Admin' : 'SYSTEM'}</td>
                <td class="text-muted">${createdDate.toLocaleDateString()}</td>
                <td>
                    <button class="btn btn-sm btn-primary edit-admin-btn" data-id="${admin.id}" data-bs-toggle="modal" data-bs-target="#editAdminModal">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger delete-admin-btn" data-id="${admin.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            `;
            adminsTable.appendChild(row);
        });
        
        // Add event listeners for edit buttons
        document.querySelectorAll('.edit-admin-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const adminId = e.target.closest('button').dataset.id;
                const admin = allAdmins.find(a => a.id === adminId);
                if (admin) {
                    document.getElementById('editAdminId').value = admin.id;
                    document.getElementById('editAdminEmail').value = admin.email;
                    document.getElementById('editAdminFirstName').value = admin.first_name;
                    document.getElementById('editAdminLastName').value = admin.last_name;
                    document.getElementById('editAdminRole').value = admin.role;
                    document.getElementById('editAdminStatus').value = admin.is_active.toString();
                }
            });
        });
        
        // Add event listeners for delete buttons
        document.querySelectorAll('.delete-admin-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const adminId = e.target.closest('button').dataset.id;
                const admin = allAdmins.find(a => a.id === adminId);
                
                if (admin && confirm(`Are you sure you want to delete admin "${admin.email}"? This action cannot be undone.`)) {
                    try {
                        e.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                        e.target.disabled = true;
                        
                        const response = await fetch(`${window.API_BASE_URL}/admin/admins/${adminId}`, {
                            method: 'DELETE',
                            headers,
                            credentials: 'include'
                        });
                        
                        if (response.ok) {
                            showToast('success', 'Admin deleted successfully!');
                            await fetchAdmins();
                        } else {
                            const data = await response.json();
                            showToast('error', data.detail || 'Failed to delete admin.');
                        }
                    } catch (error) {
                        showToast('error', 'Network error. Please try again.');
                    } finally {
                        e.target.innerHTML = '<i class="fas fa-trash"></i> Delete';
                        e.target.disabled = false;
                    }
                }
            });
        });
    }

    // Handle admin creation
    function setupAdminCreation() {
        if (!createAdminForm || !createAdminBtn) return;
        
        createAdminForm.addEventListener('submit', (e) => e.preventDefault());
        
        createAdminBtn.addEventListener('click', async () => {
            // Clear previous errors
            clearAdminFormErrors();
            
            const adminData = {
                email: document.getElementById('adminEmail').value.trim(),
                first_name: document.getElementById('adminFirstName').value.trim(),
                last_name: document.getElementById('adminLastName').value.trim(),
                password: document.getElementById('adminPassword').value,
                password_verify: document.getElementById('adminPasswordVerify').value,
                role: document.getElementById('adminRole').value
            };
            
            // Validate form
            let hasError = false;
            
            if (!adminData.email) {
                showAdminFieldError('adminEmail', 'Email is required.');
                hasError = true;
            } else if (!validateEmail(adminData.email)) {
                showAdminFieldError('adminEmail', 'Please enter a valid email address.');
                hasError = true;
            }
            
            if (!adminData.first_name) {
                showAdminFieldError('adminFirstName', 'First name is required.');
                hasError = true;
            } else if (adminData.first_name.length < 2) {
                showAdminFieldError('adminFirstName', 'First name must be at least 2 characters long.');
                hasError = true;
            }
            
            if (!adminData.last_name) {
                showAdminFieldError('adminLastName', 'Last name is required.');
                hasError = true;
            } else if (adminData.last_name.length < 2) {
                showAdminFieldError('adminLastName', 'Last name must be at least 2 characters long.');
                hasError = true;
            }
            
            if (!adminData.password) {
                showAdminFieldError('adminPassword', 'Password is required.');
                hasError = true;
            } else if (adminData.password.length < 8) {
                showAdminFieldError('adminPassword', 'Password must be at least 8 characters long.');
                hasError = true;
            }
            
            if (!adminData.password_verify) {
                showAdminFieldError('adminPasswordVerify', 'Please confirm your password.');
                hasError = true;
            } else if (adminData.password !== adminData.password_verify) {
                showAdminFieldError('adminPasswordVerify', 'Passwords do not match.');
                hasError = true;
            }
            
            if (hasError) return;
            
            try {
                createAdminBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';
                createAdminBtn.disabled = true;
                
                const response = await fetch(`${window.API_BASE_URL}/admin/admins`, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(adminData),
                    credentials: 'include'
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    showToast('success', 'Admin created successfully!');
                    document.getElementById('createAdminForm').reset();
                    bootstrap.Modal.getInstance(document.getElementById('createAdminModal')).hide();
                    await fetchAdmins();
                } else {
                    let errorMessage = data.detail || 'Failed to create admin.';
                    if (data.detail?.includes('Email already registered')) {
                        showAdminFieldError('adminEmail', 'This email is already registered.');
                    } else if (data.detail?.includes('Passwords do not match')) {
                        showAdminFieldError('adminPasswordVerify', 'Passwords do not match.');
                    } else {
                        showAdminFieldError('adminEmail', errorMessage);
                    }
                    showToast('error', errorMessage);
                }
            } catch (error) {
                showToast('error', 'Network error. Please check your connection.');
            } finally {
                createAdminBtn.innerHTML = '<i class="fas fa-save"></i> Create Admin';
                createAdminBtn.disabled = false;
            }
        });
    }

    // Handle admin editing
    function setupAdminEditing() {
        if (!editAdminForm || !editAdminBtn) return;
        
        editAdminForm.addEventListener('submit', (e) => e.preventDefault());
        
        editAdminBtn.addEventListener('click', async () => {
            // Clear previous errors
            clearEditAdminFormErrors();
            
            const adminData = {
                email: document.getElementById('editAdminEmail').value.trim(),
                first_name: document.getElementById('editAdminFirstName').value.trim(),
                last_name: document.getElementById('editAdminLastName').value.trim(),
                role: document.getElementById('editAdminRole').value,
                is_active: document.getElementById('editAdminStatus').value === 'true'
            };
            
            const adminId = document.getElementById('editAdminId').value;
            
            // Validate form
            let hasError = false;
            
            if (!adminData.email) {
                showEditAdminFieldError('editAdminEmail', 'Email is required.');
                hasError = true;
            } else if (!validateEmail(adminData.email)) {
                showEditAdminFieldError('editAdminEmail', 'Please enter a valid email address.');
                hasError = true;
            }
            
            if (!adminData.first_name) {
                showEditAdminFieldError('editAdminFirstName', 'First name is required.');
                hasError = true;
            }
            
            if (!adminData.last_name) {
                showEditAdminFieldError('editAdminLastName', 'Last name is required.');
                hasError = true;
            }
            
            if (hasError) return;
            
            try {
                editAdminBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
                editAdminBtn.disabled = true;
                
                const response = await fetch(`${window.API_BASE_URL}/admin/admins/${adminId}`, {
                    method: 'PUT',
                    headers,
                    body: JSON.stringify(adminData),
                    credentials: 'include'
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    showToast('success', 'Admin updated successfully!');
                    bootstrap.Modal.getInstance(document.getElementById('editAdminModal')).hide();
                    await fetchAdmins();
                } else {
                    let errorMessage = data.detail || 'Failed to update admin.';
                    showEditAdminFieldError('editAdminEmail', errorMessage);
                    showToast('error', errorMessage);
                }
            } catch (error) {
                showToast('error', 'Network error. Please check your connection.');
            } finally {
                editAdminBtn.innerHTML = '<i class="fas fa-save"></i> Save Changes';
                editAdminBtn.disabled = false;
            }
        });
    }

    // Search functionality
    function setupSearch() {
        if (adminsSearch) {
            adminsSearch.addEventListener('input', () => {
                const query = adminsSearch.value.toLowerCase();
                const filtered = allAdmins.filter(admin => 
                    admin.email.toLowerCase().includes(query) || 
                    admin.first_name.toLowerCase().includes(query) ||
                    admin.last_name.toLowerCase().includes(query) ||
                    admin.role.toLowerCase().includes(query)
                );
                renderAdmins(filtered);
            });
        }
    }

    // Helper functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showAdminFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        if (field && errorDiv) {
            field.classList.add('is-invalid');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    function showEditAdminFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        if (field && errorDiv) {
            field.classList.add('is-invalid');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    function clearAdminFormErrors() {
        const fields = ['adminEmail', 'adminFirstName', 'adminLastName', 'adminPassword', 'adminPasswordVerify', 'adminRole'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            const errorDiv = document.getElementById(fieldId + 'Error');
            if (field) field.classList.remove('is-invalid');
            if (errorDiv) errorDiv.style.display = 'none';
        });
    }

    function clearEditAdminFormErrors() {
        const fields = ['editAdminEmail', 'editAdminFirstName', 'editAdminLastName', 'editAdminRole', 'editAdminStatus'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            const errorDiv = document.getElementById(fieldId + 'Error');
            if (field) field.classList.remove('is-invalid');
            if (errorDiv) errorDiv.style.display = 'none';
        });
    }

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
        .is-invalid {
            border-color: #dc3545 !important;
        }
    `;
    document.head.appendChild(style);

    // Initialize everything
    validateToken().then(isValid => {
        if (isValid) {
            fetchAdmins();
            setupAdminCreation();
            setupAdminEditing();
            setupSearch();
            setupDownloadButtons();
        }
    });
});