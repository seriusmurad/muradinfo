// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initial setup: Highlight the first navigation link as active on page load
    const firstNavLink = document.querySelector('.nav-link');
    firstNavLink.classList.add('active-link');
    firstNavLink.classList.remove('text-gray-400'); 

        // Smooth Scrolling Script for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Prevent default only for hash links to sections
                if (this.getAttribute('href').length > 1) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Highlight active navigation link based on scroll position
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            
            // Determine which section is currently in view
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                // Use an offset to activate the link slightly before the section hits the top
                const offset = section.clientHeight * 0.4; 
                
                // Check if the scroll position is past the section start point (adjusted by offset)
                if (window.scrollY >= sectionTop - offset) {
                    current = section.getAttribute('id');
                }
            });

            // Update navigation link classes
            navLinks.forEach(link => {
                // Remove active class from all links
                link.classList.remove('active-link');
                link.classList.add('text-gray-400');

                // Check if the link's href matches the current section ID
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active-link');
                    // Remove the default color class when active-link is applied
                    link.classList.remove('text-gray-400');
                }
            });
        });
    });
