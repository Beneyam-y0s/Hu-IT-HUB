document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    form.addEventListener('submit', function (e) {
        if (!email.value.includes('@')) {
            e.preventDefault();
            alert("Please include @.");
            email.focus();
            return;
        }

        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            alert("Passwords do not match!");
            confirmPassword.focus();
            return;
        }

        e.preventDefault();
        alert("Registration successful!");

        setTimeout(() => {
            window.location.href = "event.html";
        }, 1500);
    });
});
