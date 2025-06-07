document.addEventListener('DOMContentLoaded', function() {
    var upcoming_btn = document.getElementById("upcoming_btn"); 
    var past_btn = document.getElementById("past_btn"); 
    var upcoming = document.querySelector("#upcoming .tab-pane"); 
    var past = document.getElementById("past");

    upcoming_btn.addEventListener('click', ()=>{
        upcoming.style.display = 'block';
        past.style.display = 'none';
        upcoming_btn.classList.add('active');
        past_btn.classList.remove('active');
    });
    
    past_btn.addEventListener('click', ()=>{
        upcoming.style.display = 'none';
        past.style.display = 'block';
        past_btn.classList.add('active');
        upcoming_btn.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Set the end date for the countdown (adjust this to your target date)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // 7 days from now
    endDate.setHours(23, 59, 59, 0); // Set to 23:59:59

    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;

        // Calculate days, hours, minutes, seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update the DOM
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        // If the countdown is finished
        if (diff < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-banner h3').textContent = 'registration has ended!';
            document.getElementById('countdown').style.display = 'none';
        }
    }

    // Update immediately and then every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});