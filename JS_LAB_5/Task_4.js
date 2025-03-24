// Магазин продуктів з використанням Map, Set, WeakMap та WeakSet

// Зберігання продуктів: Map (id -> інформація про продукт)
const products = new Map();
let productIdCounter = 1;

// Відстеження замовлень: Set (список замовлень)
const orders = new Set();

// Історія змін продуктів: WeakMap (продукт -> історія змін)
const productHistory = new WeakMap();

// Важливі клієнти: WeakSet
const vipCustomers = new WeakSet();

// Оновити список продуктів у випадаючих меню
function updateProductSelects() {
    const selects = [document.getElementById("productId"), document.getElementById("updateId"), document.getElementById("orderId")];
    selects.forEach(select => {
        select.innerHTML = "";
        products.forEach((product, id) => {
            const option = document.createElement("option");
            option.value = id;
            option.textContent = `${id}: ${product.name}`;
            select.appendChild(option);
        });
    });
}

// Додати продукт
function addProduct(name, price, quantity) {
    const id = productIdCounter++;
    const product = { id, name, price, quantity };
    products.set(id, product);
    productHistory.set(product, [`Додано: ${new Date().toLocaleString()}`]);
    alert(`Продукт додано: ${name} (ID: ${id})`);
    updateProductSelects();
}

// Видалити продукт
function deleteProduct(id) {
    id = parseInt(id);
    if (products.has(id)) {
        products.delete(id);
        alert(`Продукт з ID ${id} видалено.`);
        updateProductSelects();
    } else {
        alert("Продукт не знайдено.");
    }
}

// Оновити продукт
function updateProduct(id, newPrice, newQuantity) {
    id = parseInt(id);
    if (products.has(id)) {
        const product = products.get(id);
        product.price = newPrice;
        product.quantity = newQuantity;
        productHistory.get(product).push(`Оновлено: ${new Date().toLocaleString()}`);
        alert(`Продукт оновлено: ${product.name} (ID: ${id})`);
    } else {
        alert("Продукт не знайдено.");
    }
}

// Пошук продукту
function searchProduct(name) {
    for (let product of products.values()) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            return product;
        }
    }
    return null;
}

// Оформити замовлення
function placeOrder(id, quantity) {
    id = parseInt(id);
    if (products.has(id)) {
        const product = products.get(id);
        if (product.quantity >= quantity) {
            product.quantity -= quantity;
            orders.add({ id, quantity, date: new Date() });
            alert(`Замовлення оформлено: ${product.name} (ID: ${id})`);
        } else {
            alert("Недостатньо товару на складі.");
        }
    } else {
        alert("Продукт не знайдено.");
    }
}

// Додавання слухачів подій
document.getElementById("addProduct").addEventListener("click", () => {
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const quantity = parseInt(document.getElementById("productQuantity").value);
    if (name && price > 0 && quantity > 0) {
        addProduct(name, price, quantity);
    } else {
        alert("Некоректні дані.");
    }
});

document.getElementById("deleteProduct").addEventListener("click", () => {
    const id = document.getElementById("productId").value;
    deleteProduct(id);
});

document.getElementById("updateProduct").addEventListener("click", () => {
    const id = document.getElementById("updateId").value;
    const newPrice = parseFloat(document.getElementById("newPrice").value);
    const newQuantity = parseInt(document.getElementById("newQuantity").value);
    updateProduct(id, newPrice, newQuantity);
});

document.getElementById("searchProduct").addEventListener("click", () => {
    const name = document.getElementById("searchName").value;
    const result = searchProduct(name);
    const resultDiv = document.getElementById("searchResult");
    if (result) {
        resultDiv.textContent = `Знайдено: ID: ${result.id}, ${result.name}, Ціна: ${result.price}, Кількість: ${result.quantity}`;
    } else {
        resultDiv.textContent = "Продукт не знайдено.";
    }
});

document.getElementById("placeOrder").addEventListener("click", () => {
    const id = document.getElementById("orderId").value;
    const quantity = parseInt(document.getElementById("orderQuantity").value);
    placeOrder(id, quantity);
});

// Ініціалізація вибору продуктів
updateProductSelects();
