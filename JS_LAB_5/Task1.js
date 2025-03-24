let lamp = document.getElementById("lamp");
let toggleButton = document.getElementById("toggle");
let changeTypeButton = document.getElementById("changeType");
let setBrightnessButton = document.getElementById("setBrightness");
let isOn = false;
let inactivityTimer;

function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        lamp.classList.remove("on");
        isOn = false;
        toggleButton.textContent = "Включити";
    }, 300000); // 5 хвилин
}

toggleButton.addEventListener("click", function() {
    isOn = !isOn;
    lamp.classList.toggle("on", isOn);
    toggleButton.textContent = isOn ? "Виключити" : "Включити";
    resetTimer();
});

changeTypeButton.addEventListener("click", function() {
    let type = prompt("Введіть тип лампочки: звичайна, енергозберігаюча, світлодіодна");
    alert("Ви вибрали: " + type);
    resetTimer();
});

setBrightnessButton.addEventListener("click", function() {
    let brightness = prompt("Введіть яскравість від 0 до 100");
    brightness = Math.min(100, Math.max(0, parseInt(brightness)));
    lamp.style.opacity = brightness / 100;
    resetTimer();
});

document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
