// 1. Оператори порівняння
// Функція для знаходження мінімального та максимального значень у масиві
function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

// Функція для порівняння двох об'єктів за їхніми властивостями
function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// 2. Логічні оператори
// Функція для перевірки, чи знаходиться число у певному діапазоні
function isInRange(num, min, max) {
    return num >= min && num <= max;
}

// Функція для зміни стану змінної за допомогою оператора NOT
function toggleBoolean(value) {
    return !value;
}

// 3. Умовні розгалуження
// Функція для визначення словесної оцінки студента
function getGradeDescription(grade) {
    if (grade >= 90) return "Відмінно";
    if (grade >= 75) return "Добре";
    if (grade >= 60) return "Задовільно";
    return "Незадовільно";
}

// Функція для визначення сезону за місяцем (через if)
function getSeasonIf(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Літо";
    } else if (month >= 9 && month <= 11) {
        return "Осінь";
    } else {
        return "Зима";
    }
}

// Функція для визначення сезону за місяцем (через ?)
function getSeasonTernary(month) {
    return month >= 3 && month <= 5 ? "Весна" :
        month >= 6 && month <= 8 ? "Літо" :
            month >= 9 && month <= 11 ? "Осінь" : "Зима";
}

// Виклики функцій для перевірки їхньої роботи
console.log(findMinMax([3, 1, 7, 9, 2])); // { min: 1, max: 9 }
console.log(compareObjects({ a: 1 }, { a: 1 })); // true або false залежно від способу порівняння
console.log(isInRange(5, 1, 10)); // true
console.log(toggleBoolean(true)); // false
console.log(getGradeDescription(85)); // Добре
console.log(getSeasonIf(4)); // Весна
console.log(getSeasonTernary(10)); // Осінь
