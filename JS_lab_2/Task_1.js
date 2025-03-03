// Функція для вибору завдання
function start() {
    console.log("Оберіть завдання:");
    console.log("1 - Знайти мінімальне та максимальне число в масиві");
    console.log("2 - Порівняти два об'єкти");
    console.log("3 - Перевірити, чи число в діапазоні");
    console.log("4 - Змінити значення true/false");
    console.log("5 - Отримати словесний опис оцінки");
    console.log("6 - Визначити пору року за місяцем");

    const choice = Number(prompt("Введіть номер завдання:"));

    switch (choice) {
        case 1:
            findMinMax();
            break;
        case 2:
            compareObjects();
            break;
        case 3:
            isInRange();
            break;
        case 4:
            toggleBoolean();
            break;
        case 5:
            getGradeDescription();
            break;
        case 6:
            getSeason();
            break;
        default:
            console.log("Невірний вибір. Спробуйте ще раз.");
            start();
    }
}

// 1. Оператори порівняння
function findMinMax() {
    const input = prompt("Введіть числа через кому:");
    const arr = input.split(",").map(Number);
    console.log("Мінімальне значення:", Math.min(...arr));
    console.log("Максимальне значення:", Math.max(...arr));
}

function compareObjects() {
    const obj1 = JSON.parse(prompt("Введіть перший об'єкт у форматі JSON:"));
    const obj2 = JSON.parse(prompt("Введіть другий об'єкт у форматі JSON:"));

    function deepEqual(a, b) {
        if (a === b) return true;
        if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;

        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) return false;

        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }

        return true;
    }

    console.log("Об'єкти рівні:", deepEqual(obj1, obj2));
}
// 2. Логічні оператори
function isInRange() {
    const num = Number(prompt("Введіть число:"));
    const min = Number(prompt("Введіть мінімальне значення діапазону:"));
    const max = Number(prompt("Введіть максимальне значення діапазону:"));
    console.log("Число в діапазоні:", num >= min && num <= max);
}

function toggleBoolean() {
    const value = prompt("Введіть true або false:") === "true";
    console.log("Змінене значення:", !value);
}

// 3. Умовні розгалуження
function getGradeDescription() {
    const grade = Number(prompt("Введіть оцінку студента:"));
    const description = grade >= 90 ? "Відмінно" :
        grade >= 75 ? "Добре" :
            grade >= 60 ? "Задовільно" : "Незадовільно";
    console.log("Оцінка у словесному форматі:", description);
}

function getSeason() {
    const month = Number(prompt("Введіть номер місяця (1-12):"));
    const season = month >= 3 && month <= 5 ? "Весна" :
        month >= 6 && month <= 8 ? "Літо" :
            month >= 9 && month <= 11 ? "Осінь" : "Зима";
    console.log("Пора року:", season);
}

start();