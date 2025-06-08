// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.schedule-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const day = this.getAttribute('data-day');
            document.getElementById(day).classList.add('active');
        });
    });

    // Simple countdown for early bird registration
    const noticeBar = document.querySelector('.notice-bar');
    if (noticeBar) {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 5); // 5 days from now
        
        function updateCountdown() {
            const now = new Date();
            const diff = endDate - now;
            
            if (diff <= 0) {
                noticeBar.textContent = 'Early bird registration has ended!';
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            noticeBar.textContent = `Early bird registration ends in ${days} days and ${hours} hours! Save 20% on all conference passes`;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 3600000); // Update every hour
    }
});