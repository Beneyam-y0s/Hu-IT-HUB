document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.schedule-content').forEach(content => {
                content.classList.remove('active');
            });
            
            this.classList.add('active');
            
            
            const day = this.getAttribute('data-day');
            document.getElementById(day).classList.add('active');
        });
    });
});