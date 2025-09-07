// Eva Artist Portfolio - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navHeight = document.querySelector('.nav').offsetHeight;
        const scrollPosition = window.scrollY + navHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    });

    // Portfolio Data - Eva's Actual Artworks
    const portfolioData = [
        {
            id: 1,
            title: "Featured Interior Study",
            category: "illustrations",
            medium: "Digital Mixed Media",
            year: "2024",
            image: "assets/images/eva-new.png",
            description: "Contemporary interior composition showcasing Eva's signature style - atmospheric lighting, detailed perspective, and emotional depth."
        },
        {
            id: 2,
            title: "Urban Buildings",
            category: "portraits",
            medium: "Charcoal and Graphite",
            year: "2024",
            image: "assets/images/urban-buildings.jpg",
            description: "Dramatic cityscape drawing showcasing architectural perspective and urban atmosphere."
        },
        {
            id: 3,
            title: "Interior with Spheres",
            category: "illustrations",
            medium: "Charcoal on Paper",
            year: "2024",
            image: "assets/images/interior-spheres.jpg",
            description: "Moody interior composition with geometric elements and masterful play of light and shadow."
        },
        {
            id: 4,
            title: "Seascape Study",
            category: "commercial",
            medium: "Graphite on Paper",
            year: "2024",
            image: "assets/images/seascape-waves.jpg",
            description: "Minimalist seascape capturing the movement and texture of ocean waves."
        },
        {
            id: 5,
            title: "House Entrance",
            category: "portraits",
            medium: "Mixed Media on Paper",
            year: "2024",
            image: "assets/images/house-entrance.jpg",
            description: "Detailed architectural study of a house entrance with warm color palette and urban details."
        },
        {
            id: 6,
            title: "Graffiti Room",
            category: "illustrations",
            medium: "Graphite and Charcoal",
            year: "2023",
            image: "assets/images/graffiti-room.jpg",
            description: "Urban interior space with street art elements and atmospheric perspective."
        },
        {
            id: 7,
            title: "Bedroom Interior",
            category: "illustrations",
            medium: "Charcoal on Paper",
            year: "2024",
            image: "assets/images/bedroom-interior.jpg",
            description: "Intimate interior space with careful attention to light, texture, and spatial relationships."
        },
        {
            id: 8,
            title: "Living Space",
            category: "illustrations",
            medium: "Graphite and Charcoal",
            year: "2024",
            image: "assets/images/living-space.jpg",
            description: "Contemporary living area showcasing architectural drawing skills and spatial awareness."
        },
        {
            id: 9,
            title: "Window View",
            category: "illustrations",
            medium: "Mixed Media",
            year: "2023",
            image: "assets/images/window-view.jpg",
            description: "Interior perspective focusing on natural light flowing through architectural elements."
        },
        {
            id: 10,
            title: "Cozy Interior",
            category: "illustrations",
            medium: "Charcoal on Paper",
            year: "2024",
            image: "assets/images/cozy-interior.jpg",
            description: "Warm domestic interior with detailed rendering of textures and everyday objects."
        },
        {
            id: 11,
            title: "Detailed Interior",
            category: "illustrations",
            medium: "Graphite and Charcoal",
            year: "2024",
            image: "assets/images/detailed-interior.jpg",
            description: "Complex interior composition with multiple focal points and rich architectural detail."
        },
        {
            id: 12,
            title: "Studio Space",
            category: "illustrations",
            medium: "Charcoal on Paper",
            year: "2023",
            image: "assets/images/studio-space.jpg",
            description: "Artist workspace capturing the creative environment and intimate working atmosphere."
        },
        {
            id: 13,
            title: "Living Room with Couches",
            category: "illustrations",
            medium: "Graphite and Charcoal",
            year: "2024",
            image: "assets/images/living-room-couches.jpg",
            description: "Comfortable living space with detailed furniture rendering and atmospheric lighting."
        },
        {
            id: 14,
            title: "Artistic Workspace",
            category: "commercial",
            medium: "Mixed Media",
            year: "2023",
            image: "assets/images/artistic-workspace.jpg",
            description: "Professional workspace drawing showcasing tools, materials, and creative environment."
        },
        {
            id: 15,
            title: "Architectural Stairs",
            category: "portraits",
            medium: "Graphite and Charcoal on Paper",
            year: "2024",
            image: "assets/images/stair.png",
            description: "Dramatic architectural study focusing on staircase perspective, shadow play, and structural details."
        }
    ];

    // Render Portfolio Items
    function renderPortfolio(items) {
        const portfolioGrid = document.getElementById('portfolio-grid');
        portfolioGrid.innerHTML = '';

        items.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.setAttribute('data-category', item.category);
            
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'; console.log('Failed to load: ${item.image}')">
                <div class="portfolio-overlay">
                    <div class="portfolio-info">
                        <h3>${item.title}</h3>
                        <p>${item.medium} • ${item.year}</p>
                    </div>
                </div>
            `;

            // Add click event for lightbox
            portfolioItem.addEventListener('click', function() {
                openLightbox(item);
            });

            portfolioGrid.appendChild(portfolioItem);
        });

        // Trigger animation for new items
        setTimeout(() => {
            const items = portfolioGrid.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    item.style.transition = 'all 0.3s ease';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            });
        }, 100);
    }

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            let filteredItems;
            if (filter === 'all') {
                filteredItems = portfolioData;
            } else {
                filteredItems = portfolioData.filter(item => item.category === filter);
            }
            
            renderPortfolio(filteredItems);
        });
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(item) {
        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxDescription.textContent = `${item.description} • ${item.medium} • ${item.year}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // Basic form validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you within 24 hours.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements and observe them
    const animateElements = document.querySelectorAll('.about-content, .service-card, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize portfolio
    renderPortfolio(portfolioData);

    // Preload images for better performance
    function preloadImages() {
        portfolioData.forEach(item => {
            const img = new Image();
            img.src = item.image;
        });
    }

    // Call preload function
    preloadImages();

    // Console welcome message
    console.log('%c👋 Welcome to Eva\'s Portfolio!', 'color: #8b4513; font-size: 16px; font-weight: bold;');
    console.log('%cFeaturing real artwork by Eva Babushkin', 'color: #666; font-size: 12px;');
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}