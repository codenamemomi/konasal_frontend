document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('overlay');

    if (mobileMenuToggle && mainNav && overlay) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            overlay.classList.toggle('active');
            mobileMenuToggle.innerHTML = mainNav.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        overlay.addEventListener('click', () => {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu on nav link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 991.98) {
                    mainNav.classList.remove('active');
                    overlay.classList.remove('active');
                    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

   

    // Mobile Dropdown Handling
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 991.98) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('active');

                // Close other dropdowns
                document.querySelectorAll('.nav-item.dropdown').forEach(item => {
                    if (item !== parent) {
                        item.classList.remove('active');
                    }
                });
            }
        });
    });

    // jQuery Promo Slider Initialization (if present)
    if (typeof $ !== 'undefined' && $('#promoSlider').length) {
        $('#promoSlider').carousel({
            interval: 5000,
            pause: "hover"
        });
    }
});
