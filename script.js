let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* Toggle icon */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById('readMoreBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const moreText = document.getElementById('moreText');
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        this.textContent = 'Read less';
    } else {
        moreText.style.display = 'none';
        this.textContent = 'Read more';
    }
});

/* Highlight navigation links on scroll */
window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/* ScrollReveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
