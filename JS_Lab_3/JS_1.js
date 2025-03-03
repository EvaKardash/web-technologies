// 1. Сума перших 10 чисел Фібоначчі (цикл while)
function sumFibonacci() {
    let a = 0, b = 1, sum = 0, count = 0;
    while (count < 10) {
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
        count++;
    }
    console.log("1. Сума перших 10 чисел Фібоначчі:", sum);
}

// 2. Сума всіх простих чисел від 1 до 1000 (цикл for)
function sumPrimes() {
    let sum = 0;
    for (let num = 2; num <= 1000; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) sum += num;
    }
    console.log("2. Сума всіх простих чисел від 1 до 1000:", sum);
}

// 3. Визначення дня тижня за числом (switch)
function getDayOfWeek(num) {
    let day;
    switch (num) {
        case 1: day = "Понеділок"; break;
        case 2: day = "Вівторок"; break;
        case 3: day = "Середа"; break;
        case 4: day = "Четвер"; break;
        case 5: day = "П'ятниця"; break;
        case 6: day = "Субота"; break;
        case 7: day = "Неділя"; break;
        default: day = "Невірне число";
    }
    console.log("3. День тижня:", day);
}

// 4. Фільтрація рядків з непарною довжиною
function filterOddLengthStrings(arr) {
    if (!Array.isArray(arr)) {
        console.error("Помилка: Очікується масив рядків.");
        return [];
    }
    let result = arr.filter(str => typeof str === "string" && str.length % 2 !== 0);
    console.log("4. Рядки з непарною довжиною:", result);
    return result;
}

// 5. Стрілкова функція, яка збільшує числа на 1
const incrementArray = arr => {
    if (!Array.isArray(arr)) {
        console.error("Помилка: Очікується масив чисел.");
        return [];
    }
    return arr.map(num => typeof num === "number" ? num + 1 : num);
};

// 6. Перевірка, чи сума або різниця чисел дорівнює 10
function checkSumOrDiff(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.error("Помилка: Очікуються два числа.");
        return false;
    }
    return a + b === 10 || Math.abs(a - b) === 10;
}

// Виклик функцій для перевірки
sumFibonacci();
sumPrimes();
getDayOfWeek(3);
filterOddLengthStrings(["apple", "banana", "kiwi", "grape"]);
console.log("5. Масив після збільшення на 1:", incrementArray([1, 2, 3, 4]));
console.log("6. Чи сума або різниця чисел 8 і 2 дорівнює 10?", checkSumOrDiff(8, 2));
