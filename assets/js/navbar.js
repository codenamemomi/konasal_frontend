
document.getElementById('navbar').innerHTML = `
<div class="promo-marquee">

        <marquee behavior="scroll" direction="left">

            Get <span>30% Off</span> Our New Courses! - Register Today

        </marquee>

</div>

<!-- Header (fixed below marquee) -->

<header class="main-header">

    <div class="container">

        <div class="header-wrapper">

            <div class="logo-container d-flex flex-column align-items-center text-center">

                <a href="index.html">

                    <img src="./assets/images/KONASAL%20LOGO%201_copy.PNG" alt="KONASAL Logo" class="logo-img">

                </a>

                
            </div>



            <!-- Mobile Menu Toggle -->

            <button class="mobile-menu-toggle" id="mobileMenuToggle">

                <i class="fas fa-bars"></i>

            </button>



            <!-- Navigation -->

            <div class="overlay" id="overlay"></div>

            <nav class="main-nav" id="mainNav">

                <ul class="nav-menu">

                    <li class="nav-item">

                        <a class="nav-link active fw-bold" href="index.html">Home</a>

                    </li>

                    <li class="nav-item dropdown">

                        <a class="nav-link dropdown-toggle fw-bold" href="#" id="coursesDropdown">Career Courses</a>

                        <ul class="dropdown-menu">

                            <li><a class="dropdown-item" href="course-listing.html">Course Listings</a></li>

                            <li><a class="dropdown-item" href="courses.html">Course Categories</a></li>

                        </ul>

                    </li>

                    <li class="nav-item dropdown">

                        <a class="nav-link dropdown-toggle fw-bold" href="#" id="selfStudyDropdown">Self Study</a>

                        <ul class="dropdown-menu">

                            <li><a class="dropdown-item" href="#">Cloud Computing</a></li>

                            <li><a class="dropdown-item" href="#">Cyber Security</a></li>

                            <li><a class="dropdown-item" href="#">Data Science</a></li>

                            <li><a class="dropdown-item" href="#">Research</a></li>

                            <li><a class="dropdown-item" href="#">Testing</a></li>

                        </ul>

                    </li>

                    <li class="nav-item dropdown">

                        <a class="nav-link dropdown-toggle fw-bold" href="#" id="employmentDropdown">Employment Services</a>

                        <ul class="dropdown-menu">

                            <li><a class="dropdown-item" href="#">Job Listings</a></li>

                            <li><a class="dropdown-item" href="#">Resume Writing Services</a></li>

                            <li><a class="dropdown-item" href="#">Interview Preparation</a></li>

                            <li><a class="dropdown-item" href="#">Career Counseling</a></li>

                        </ul>

                    </li>

                    <!----- <li class="nav-item"> -----!>

                        <!----- <a class="nav-link fw-bold fs-6" href="#"> Resources</a> -----!>

                    <!----- </li> -----!>


                    <li class="nav-item dropdown">

                        <a class="nav-link dropdown-toggle fw-bold" href="#" id="bookstoreDropdown">Our Bookstore</a>

                        <ul class="dropdown-menu">

                            <li><a class="dropdown-item" href="#">Featured Books</a></li>

                            <li><a class="dropdown-item" href="#">Bestsellers</a></li>

                            <li><a class="dropdown-item" href="#">Categories</a></li>

                            <li><a class="dropdown-item" href="#">Special Offers</a></li>

                        </ul>

                    </li>

                </ul>
<div class="header-actions">

                <a href="login.html" id="loginBtn" class="btn-auth fw-bold">

                    <i class="fas fa-sign-in-alt"></i>

                    <span>Login</span>

                </a>

                <a href="register.html" class="btn-auth fw-bold">

                    <i class="fas fa-user-plus"></i>

                    <span>Register</span>

                </a>

            </div>
            </nav>



            

        </div>

    </div>

</header>
`


  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    const promo = document.querySelector('.promo-marquee');
    if (promo) promo.style.display = 'none';
  }
