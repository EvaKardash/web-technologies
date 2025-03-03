// Функція для виклику завдань
function runTask(taskNumber) {
    switch (taskNumber) {
        case 1:
            let n1 = parseInt(prompt("Введіть кількість чисел Фібоначчі для підрахунку суми:"));
            fibonacciSum(n1);
            break;
        case 2:
            let range = parseInt(prompt("Введіть верхню межу для суми простих чисел:"));
            sumPrimes(range);
            break;
        case 3:
            let day = parseInt(prompt("Введіть число від 1 до 7 для визначення дня тижня:"));
            getDayOfWeek(day);
            break;
        case 4:
            let strings = prompt("Введіть рядки через кому:").split(",");
            let filteredStrings = filterOddLengthStrings(strings);
            console.log("4. Введений масив:", strings);
            console.log("4. Рядки з непарною довжиною:", filteredStrings);
            break;
        case 5:
            let numbers = prompt("Введіть числа через кому:").split(",").map(Number);
            console.log("5. Початковий масив:", numbers);
            let incrementedNumbers = incrementArray(numbers);
            console.log("5. Масив після збільшення чисел на 1:", incrementedNumbers);
            break;
        case 6:
            let a = parseInt(prompt("Введіть число a:"));
            let b = parseInt(prompt("Введіть число b:"));
            console.log("6. Чи виконується умова:", checkSumOrDifference(a, b));
            break;
        default:
            console.log("Невірний номер завдання");
    }
}

// Завдання 1: Сума перших N чисел Фібоначчі
function fibonacciSum(n) {
    let a = 0, b = 1, sum = 0, count = 0;
    while (count < n) {
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
        count++;
    }
    console.log(`1. Сума перших ${n} чисел Фібоначчі:`, sum);
}

// Завдання 2: Сума всіх простих чисел до введеного значення
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumPrimes(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if (isPrime(i)) sum += i;
    }
    console.log(`2. Сума всіх простих чисел до ${limit}:`, sum);
}

// Завдання 3: Визначення дня тижня
function getDayOfWeek(num) {
    switch (num) {
        case 1: console.log("3. Понеділок"); break;
        case 2: console.log("3. Вівторок"); break;
        case 3: console.log("3. Середа"); break;
        case 4: console.log("3. Четвер"); break;
        case 5: console.log("3. П’ятниця"); break;
        case 6: console.log("3. Субота"); break;
        case 7: console.log("3. Неділя"); break;
        default: console.log("3. Невірний номер дня");
    }
}

// Завдання 4: Фільтр рядків з непарною довжиною
function filterOddLengthStrings(arr) {
    return arr.filter(str => str.length % 2 !== 0);
}

// Завдання 5: Стрілкова функція для збільшення чисел на 1
const incrementArray = arr => arr.map(num => num + 1);

// Завдання 6: Перевірка суми або різниці чисел
function checkSumOrDifference(a, b) {
    return (a + b === 10 || Math.abs(a - b) === 10);
}

// Запит на вибір завдання
let taskNumber = parseInt(prompt("Введіть номер завдання (1-6):"));
runTask(taskNumber);