// Цифровий годинник
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Таймер зворотного відліку
document.getElementById("startTimer").addEventListener("click", function () {
    let userTime = new Date(document.getElementById("timerInput").value);
    let countdownDiv = document.getElementById("countdown");

    function updateCountdown() {
        let now = new Date();
        let diff = userTime - now;
        if (diff <= 0) {
            countdownDiv.textContent = "Час вийшов!";
            clearInterval(timerInterval);
            return;
        }
        let hours = Math.floor(diff / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownDiv.textContent = `Залишилось: ${hours}г ${minutes}хв ${seconds}сек`;
    }

    let timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

// Календар і відлік до дня народження
document.getElementById("setBirthday").addEventListener("click", function () {
    let birthday = new Date(document.getElementById("calendar").value + "-01");
    let now = new Date();
    let nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());

    if (nextBirthday < now) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }

    let diff = nextBirthday - now;
    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("birthdayCountdown").textContent =
        `До дня народження залишилось: ${months} міс. ${days} дн. ${hours} год. ${minutes} хв. ${seconds} сек.`;
});
