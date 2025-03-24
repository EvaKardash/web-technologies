let redLight = document.getElementById("red");
let yellowLight = document.getElementById("yellow");
let greenLight = document.getElementById("green");
let nextStateButton = document.getElementById("nextState");
let stateText = document.createElement("h2");

document.body.insertBefore(stateText, nextStateButton);

let durations = {
    red: 5000,
    yellow: 3000,
    green: 7000
};

function setDurations() {
    durations.red = parseInt(prompt("Введіть час для червоного світла (мс)", durations.red)) || durations.red;
    durations.yellow = parseInt(prompt("Введіть час для жовтого світла (мс)", durations.yellow)) || durations.yellow;
    durations.green = parseInt(prompt("Введіть час для зеленого світла (мс)", durations.green)) || durations.green;
}

let currentState = "red";
let blinking = false;
let timer;

function changeLight(state) {
    redLight.style.backgroundColor = state === "red" ? "red" : "gray";
    yellowLight.style.backgroundColor = state === "yellow" ? "yellow" : "gray";
    greenLight.style.backgroundColor = state === "green" ? "green" : "gray";
    stateText.textContent = `Стан: ${state}`;
}

function startTrafficLight() {
    changeLight("red");
    timer = setTimeout(() => {
        changeLight("yellow");
        timer = setTimeout(() => {
            changeLight("green");
            timer = setTimeout(() => {
                blinkYellow(3);
            }, durations.green);
        }, durations.yellow);
    }, durations.red);
}

function blinkYellow(times) {
    let count = 0;
    blinking = true;
    let interval = setInterval(() => {
        yellowLight.style.backgroundColor = count % 2 === 0 ? "yellow" : "gray";
        count++;
        if (count >= times * 2) {
            clearInterval(interval);
            blinking = false;
            changeLight("red");
            startTrafficLight();
        }
    }, 500);
}

nextStateButton.addEventListener("click", function () {
    if (blinking) return;
    clearTimeout(timer);
    if (currentState === "red") {
        currentState = "yellow";
    } else if (currentState === "yellow") {
        currentState = "green";
    } else if (currentState === "green") {
        blinkYellow(3);
        return;
    }
    changeLight(currentState);
});

setDurations();
startTrafficLight();
