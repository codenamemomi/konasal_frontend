document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('overlay');

    if (mobileMenuToggle && mainNav && overlay) {
        const toggleMenu = (isOpen) => {
            if (isOpen) {
                mainNav.classList.add('active');
                overlay.classList.add('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
                document.body.classList.add('menu-open');
            } else {
                mainNav.classList.remove('active');
                overlay.classList.remove('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.classList.remove('menu-open');
                
                // Close all dropdowns when closing menu
                document.querySelectorAll('.nav-item.dropdown').forEach(item => {
                    item.classList.remove('active');
                });
            }
        };

        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !mainNav.classList.contains('active');
            toggleMenu(isOpen);
        });

        overlay.addEventListener('click', () => {
            toggleMenu(false);
        });

        // Close mobile menu on nav link click (except dropdown toggles)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't close if it's a dropdown toggle
                if (link.classList.contains('dropdown-toggle')) {
                    if (window.innerWidth <= 991.98) {
                        e.preventDefault();
                        const parent = link.parentElement;
                        parent.classList.toggle('active');
                        
                        // Close other dropdowns
                        document.querySelectorAll('.nav-item.dropdown').forEach(item => {
                            if (item !== parent) {
                                item.classList.remove('active');
                            }
                        });
                    }
                    return;
                }
                
                // For regular links, close the menu on mobile
                if (window.innerWidth <= 991.98) {
                    toggleMenu(false);
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 991.98 && 
                mainNav.classList.contains('active') &&
                !mainNav.contains(e.target) &&
                e.target !== mobileMenuToggle) {
                toggleMenu(false);
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                toggleMenu(false);
            }
        });
    }

    // Desktop Dropdown Handling
    if (window.innerWidth > 991.98) {
        document.querySelectorAll('.nav-item.dropdown').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.classList.add('active');
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('active');
            });
        });
    }

    // Window resize handler
    window.addEventListener('resize', function() {
        // Close mobile menu when resizing to desktop
        if (window.innerWidth > 991.98 && mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.classList.remove('menu-open');
        }
    });

    // jQuery Promo Slider Initialization (if present)
    if (typeof $ !== 'undefined' && $('#promoSlider').length) {
        $('#promoSlider').carousel({
            interval: 5000,
            pause: "hover"
        });
    }
});