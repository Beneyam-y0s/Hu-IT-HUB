document.addEventListener('DOMContentLoaded', function () {
    var tech_cont = document.getElementById("tech-cont");
    var event_cont = document.getElementById("event-cont");

    var tech = document.getElementById("tech");
    var event = document.getElementById("event");

    tech.addEventListener('click', () => {
        tech_cont.style.display = "flex";
        event_cont.style.display = "none";
        tech_cont.classList.add('active');
        event_cont.classList.remove('active');
    });

    event.addEventListener('click', () => {
        event_cont.style.display = "flex";
        tech_cont.style.display = "none";
        event_cont.classList.add('active');
        tech_cont.classList.remove('active');
    });
});
