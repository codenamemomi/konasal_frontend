# Konasal Training Institute Frontend

## Overview

Konasal Training Institute is a comprehensive online platform offering a wide range of career courses and training programs. This frontend project provides a user-friendly interface for students to browse courses, register, login, make payments, and manage their profiles. The website is built with modern web technologies to ensure a responsive and interactive experience.

## Features

- **User Authentication**: Secure login and registration system with password reset functionality
- **Course Catalog**: Browse and explore various training courses across different categories (AI, Cloud, Data, Security, etc.)
- **Payment System**: Flexible payment plans including full payment and installment options
- **User Profile Management**: View enrolled courses, edit profile information, and track progress
- **Responsive Design**: Mobile-friendly interface that works seamlessly across devices
- **Interactive UI**: Dynamic navigation, modals, and real-time form validation
- **Admin Panel**: Separate admin interface for managing courses and users
- **Contact and Support**: Contact form and information for user inquiries

## Technologies Used

- **HTML5**: Semantic markup for web pages
- **CSS3**: Custom styling with responsive design
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Bootstrap 5**: CSS framework for responsive layouts
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Custom typography (Poppins and Open Sans)
- **jQuery**: DOM manipulation and AJAX requests
- **Local Storage**: Client-side data persistence for user sessions

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/konasal-training-institute.git
   cd konasal-training-institute
   ```

2. **Open in browser**:
   - Simply open the `index.html` file in your preferred web browser
   - For local development, you can use a local server (e.g., Live Server extension in VS Code)

## Project Structure

```
konasal_frontend/
├── index.html                 # Homepage
├── login.html                 # User login page
├── register.html              # User registration page
├── profile.html               # User profile page
├── course-listing.html        # Course catalog
├── course.html                # Individual course page
├── payment.html               # Payment plans page
├── contact-us.html            # Contact page
├── admin/                     # Admin panel
│   ├── index.html
│   ├── login.html
│   └── assets/
├── assets/                    # Static assets
│   ├── css/                   # Stylesheets
│   ├── js/                    # JavaScript files
│   └── images/                # Images and media
├── checkout/                  # Payment processing pages
├── config.js                  # Configuration file
└── README.md                  # This file
```

## Key Components

### Navigation
- Responsive navbar with dropdown menus for different course categories
- Mobile-friendly hamburger menu
- User authentication status display

### User Authentication
- Login form with email/password
- Registration with user details
- Password reset functionality
- Session management with localStorage

### Course Management
- Dynamic course listing with filtering
- Detailed course pages with curriculum
- Enrollment and payment integration

### Payment System
- Multiple payment plan options
- Promo code functionality
- Payment processing integration

### Admin Panel
- Separate admin interface for content management
- User and course administration tools

## Configuration

The application uses a `config.js` file for API endpoints and other configuration settings. Make sure to update this file with your backend API URLs.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Konasal Training Institute.

## Contact

For support or inquiries, please contact us through the contact form on the website or email support@konasal.com.
