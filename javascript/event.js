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
    
    const countdownDuration = 7 * 24 * 60 * 60 * 1000;

    
    const startTime = Date.now();

    function updateCountdown() {
        const now = Date.now();
        const elapsed = now - startTime;
        const remaining = countdownDuration - elapsed;

        
        if (remaining <= 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-banner h3').textContent = 'registration has ended!';
            document.getElementById('countdown').style.display = 'none';
            return;
        }

        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});
