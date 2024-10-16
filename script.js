// script.js

// Add line between hero title and text
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-content p');
    const heroLine = document.createElement('hr');
    heroLine.style.width = '50%';
    heroLine.style.margin = '1rem auto';
    heroLine.style.border = '1px solid #FF7F00';
    heroText.parentElement.insertBefore(heroLine, heroText);

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('black');
        } else {
            navbar.classList.remove('black');
        }
    });

    // Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gallery Image Hover Effect
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Model Card Hover Animation
    const modelCards = document.querySelectorAll('.model-card');
    modelCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });
        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            card.style.transform = 'translateY(0)';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.classList.add('active');
    });

    dropdown.addEventListener('mouseleave', () => {
        // Small timeout to prevent quick disappear while moving to the menu
        setTimeout(() => {
            if (!dropdownMenu.matches(':hover')) {
                dropdownMenu.classList.remove('active');
            }
        }, 100);
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.classList.remove('active');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        let dropdownTimeout;

        // Show dropdown on hover
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(dropdownTimeout);
            dropdownMenu.style.height = 'auto';
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.pointerEvents = 'all';
            dropdownMenu.style.padding = '1.5rem 2rem';
        });

        // Hide dropdown with a delay to allow interaction
        dropdown.addEventListener('mouseleave', () => {
            dropdownTimeout = setTimeout(() => {
                if (!dropdownMenu.matches(':hover')) {
                    dropdownMenu.style.height = '0';
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.pointerEvents = 'none';
                    dropdownMenu.style.padding = '0';
                }
            }, 200);
        });

        // Cancel hide if dropdown is re-entered
        dropdownMenu.addEventListener('mouseenter', () => {
            clearTimeout(dropdownTimeout);
        });

        dropdownMenu.addEventListener('mouseleave', () => {
            dropdownTimeout = setTimeout(() => {
                dropdownMenu.style.height = '0';
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.pointerEvents = 'none';
                dropdownMenu.style.padding = '0';
            }, 200);
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('black');
        } else {
            navbar.classList.remove('black');
        }
    });

    // Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dropdown Menu Show/Hide Effect
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', () => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });
    });
});





