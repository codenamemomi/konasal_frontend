document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar');
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <span class="fw-bold">Konasal Admin</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    <i class="fas fa-tachometer-alt me-1"></i>Dashboard
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="admin_operations.html">
                                    <i class="fas fa-users-cog me-1"></i>Admin Management
                                </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <button class="btn btn-outline-primary" id="logoutBtn">
                                    <i class="fas fa-sign-out-alt me-2"></i>Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
});