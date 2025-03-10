// Завдання 1
function task1() {
    let input = prompt("Введіть фрукти через кому (наприклад, яблуко, банан, вишня, груша):");
    let fruits = input.split(",").map(fruit => fruit.trim());

    console.log("1.0 Початковий масив фруктів:", [...fruits]);

    // 1. Видалити останній елемент
    let removedFruit = fruits.pop();
    console.log(`1.1 Видалено останній елемент ("${removedFruit}"), новий масив:`, [...fruits]);

    // 2. Додати "ананас" на початок масиву
    fruits.unshift("ананас");
    console.log("1.2 Додано ананас на початок масиву:", [...fruits]);

    // 3. Відсортувати масив у зворотньому алфавітному порядку
    fruits.sort().reverse();
    console.log("1.3 Відсортований у зворотньому порядку масив:", [...fruits]);

    // 4. Знайти індекс елемента "яблуко"
    let appleIndex = fruits.indexOf("яблуко");
    console.log("1.4 Індекс 'яблуко' у масиві:", appleIndex !== -1 ? appleIndex : "Не знайдено");
}

// Завдання 2
function task2() {
    let input = prompt("Введіть назви кольорів через кому (наприклад, червоний, зелений, синій, жовтий, темно-синій):");
    let colors = input.split(",").map(color => color.trim());

    console.log("2.0 Початковий масив кольорів:", [...colors]);

    // 1. Знайти найдовший і найкоротший колір
    let longest = colors.reduce((a, b) => (a.length > b.length ? a : b));
    let shortest = colors.reduce((a, b) => (a.length < b.length ? a : b));
    console.log("2.1 Найдовший колір:", longest);
    console.log("2.2 Найкоротший колір:", shortest);

    // 2. Видалити всі кольори, крім тих, що містять "синій"
    let filteredColors = colors.filter(color => color.includes("синій"));
    console.log("2.3 Фільтровані кольори (залишили тільки ті, що містять 'синій'):", [...filteredColors]);

    // 3. Об'єднати залишені кольори у рядок
    let joinedColors = filteredColors.join(", ");
    console.log("2.4 Об'єднаний рядок кольорів:", joinedColors);
}

/// Завдання 3
function task3() {
    // Створюємо порожній масив для працівників
    let employees = [];

    // Функція для введення даних працівників
    function addEmployee(name, age, position) {
        employees.push({ name, age, position });
    }

    // Введення працівників вручну
    addEmployee("Іван", 30, "розробник");
    addEmployee("Марія", 25, "дизайнер");
    addEmployee("Олег", 35, "розробник");

    // 1. Вивести відсортовані працівники за іменами
    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log("3.1 Відсортовані працівники:", employees);

    // 2. Знайти всіх працівників, які мають посаду "розробник"
    let developers = employees.filter(e => e.position === "розробник");
    console.log("3.2 Розробники:", developers);

    // 3. Видалити працівника за певною умовою (наприклад, за віком)
    employees = employees.filter(e => e.age < 35);
    console.log("3.3 Видалений працівник (старший 35 років):", employees);

    // 4. Додати нового працівника до масиву
    employees.push({ name: "Оксана", age: 28, position: "тестувальник" });
    console.log("3.4 Додано працівника:", employees);
}

// Викликаємо функцію task3
task3();


// Завдання 4
function task4() {
    // Створення масиву студентів
    let students = [
        { name: "Олексій", age: 20, course: 2 },
        { name: "Анна", age: 22, course: 3 },
        { name: "Микола", age: 19, course: 1 }
    ];

    // 1. Видалити студента з ім'ям "Олексій"
    students = students.filter(s => s.name !== "Олексій");
    console.log("4.1 Видалено Олексія:", students);

    // 2. Додати нового студента
    students.push({ name: "Тарас", age: 21, course: 2 });
    console.log("4.2 Додано нового студента:", students);

    // 3. Відсортувати студентів за віком від найстаршого до наймолодшого
    students.sort((a, b) => b.age - a.age);
    console.log("4.3 Відсортовані за віком:", students);

    // 4. Знайти студента, який навчається на 3-му курсі
    let thirdCourseStudent = students.find(s => s.course === 3);
    console.log("4.4 Студент 3-го курсу:", thirdCourseStudent);
}

// Викликаємо функцію task4
task4();


// Завдання 5
function task5() {
    // Створення масиву чисел
    let numbers = [1, 2, 3, 4, 5];

    // 1. Квадрати чисел за допомогою методу map()
    console.log("5.1 Квадрати чисел:", numbers.map(n => n ** 2));

    // 2. Парні числа за допомогою методу filter()
    console.log("5.2 Парні числа:", numbers.filter(n => n % 2 === 0));

    // 3. Сума чисел за допомогою методу reduce()
    console.log("5.3 Сума чисел:", numbers.reduce((sum, n) => sum + n, 0));

    // 4. Розширений масив (додали 5 нових чисел)
    numbers = [...numbers, 6, 7, 8, 9, 10];
    console.log("5.4 Розширений масив:", numbers);

    // 5. Видалення перших 3 елементів за допомогою методу splice()
    numbers.splice(0, 3);
    console.log("5.5 Після видалення перших 3 елементів:", numbers);
}

// Викликаємо функцію task5
task5();

// Завдання 6 (керування бібліотекою)
function libraryManagement() {
    // Початковий масив книг
    let books = [
        { title: "Великий Гетсбі", author: "Ф. Скотт Фіцджеральд", genre: "Роман", pages: 180, isAvailable: true },
        { title: "1984", author: "Джордж Орвелл", genre: "Антиутопія", pages: 328, isAvailable: true },
        { title: "Майстер і Маргарита", author: "Михайло Булгаков", genre: "Роман", pages: 404, isAvailable: false }
    ];

    // 1. Функція для виведення поточного списку книг
    console.log("6.1 Початкові книги в бібліотеці:", books);

    // 2. Додавання нової книги до бібліотеки
    function addBook(title, author, genre, pages) {
        books.push({ title, author, genre, pages, isAvailable: true });
        console.log(`6.2 Додано нову книгу: ${title}`);
    }

    // 3. Видалення книги за назвою
    function removeBook(title) {
        books = books.filter(book => book.title !== title);
        console.log(`6.3 Книга "${title}" була видалена.`);
    }

    // 4. Пошук книг за автором
    function findBooksByAuthor(author) {
        let booksByAuthor = books.filter(book => book.author === author);
        console.log(`6.4 Книги автора "${author}":`, booksByAuthor);
    }

    // 5. Позначення книги як взятої чи повернутої
    function toggleBookAvailability(title, isBorrowed) {
        let book = books.find(book => book.title === title);
        if (book) {
            book.isAvailable = !isBorrowed;
            console.log(`6.5 Статус книги "${title}" змінено на: ${isBorrowed ? 'Взята' : 'Доступна'}`);
        }
    }

    // 6. Сортування книг за кількістю сторінок
    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages);
        console.log("6.6 Книги відсортовані за кількістю сторінок:", books);
    }

    // 7. Зведення статистики про книги
    function getBooksStatistics() {
        let totalBooks = books.length;
        let availableBooks = books.filter(book => book.isAvailable).length;
        let borrowedBooks = totalBooks - availableBooks;
        let averagePages = books.reduce((sum, book) => sum + book.pages, 0) / totalBooks;

        let stats = {
            totalBooks,
            availableBooks,
            borrowedBooks,
            averagePages
        };

        console.log("6.7 Статистика по книгах:", stats);
    }

    // Приклади використання функцій
    addBook("Старий Мэн і море", "Ернест Хемінгуей", "Роман", 127);
    removeBook("1984");
    findBooksByAuthor("Михайло Булгаков");
    toggleBookAvailability("Майстер і Маргарита", true);
    sortBooksByPages();
    getBooksStatistics();
}

// Викликаємо функцію керування бібліотекою
libraryManagement();


function task7() {
    // 1. Створення об’єкта студента
    let student = { name: "Андрій", age: 21, course: 3 };
    console.log("7.1 Початкові дані студента:", student);

    // 2. Додавання нової властивості для предметів студента
    student.subjects = ["Математика", "Фізика", "Програмування"];
    console.log("7.2 Додано предмети студента:", student);

    // 3. Видалення властивості "age" (вік)
    delete student.age;
    console.log("7.3 Видалено властивість 'age':", student);

    // 4. Виведення оновленого об’єкта студента в консоль
    console.log("7.4 Оновлений студент:", student);
}

// Викликаємо функцію
task7();


// Функція запуску завдання за номером
function runTask() {
    // Отримуємо номер завдання від користувача
    let taskNumber = parseInt(prompt("Введіть номер завдання (1-7):"));

    // Перевіряємо, чи введено правильний номер завдання
    if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > 7) {
        console.log("Невірний номер завдання. Введіть число від 1 до 7.");
        return;
    }

    // В залежності від введеного номера запускаємо відповідне завдання
    switch (taskNumber) {
        case 1: task1(); break;
        case 2: task2(); break;
        case 3: task3(); break;
        case 4: task4(); break;
        case 5: task5(); break;
        case 6: libraryManagement(); break;
        case 7: task7(); break;
        default: console.log("Невірний номер завдання");
    }
}

// Викликати функцію для запуску завдання
runTask();
