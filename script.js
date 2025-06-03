// Glide.js carousel
if (document.querySelector('.glide')) {
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        gap: 20,
        focusAt: '0',
        autoplay: false,
        animationDuration: 500,
        hoverpause: true,
        breakpoints: {
            1024: {
                perView: 2
            },
            600: {
                perView: 1
            }
        }
    }).mount();
}

// Mobile menu toggle

const toggleBtn = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

if (toggleBtn && nav) {
    // Toggle menu me butonin
    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Mbyll menu-n kur klikohet një link në mobile/tablet
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
}

// Header hide/show on scroll

let lastScrollTop = 0;
const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}
