document.getElementById('countdownForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the target date and time
    const targetDate = new Date(document.getElementById('date').value).getTime();

    // Update the countdown every second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = '<p>EXPIRED</p>';
        }
    }, 1000);
});
