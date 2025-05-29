document.addEventListener('DOMContentLoaded', function() {
        const hamburgerBtn = document.querySelector('.hamburger-btn');
        const navBar = document.querySelector('.first-nav-bar');
        
        hamburgerBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navBar.classList.toggle('active');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });