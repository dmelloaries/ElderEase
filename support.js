document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('support-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // You can add code here to send the form data to your server
        alert('Form submitted successfully!');
        form.reset();
    });
});
