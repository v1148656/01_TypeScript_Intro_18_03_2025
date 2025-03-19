// Переменные разных типов
let productName: string = "Laptop"; // Название товара
let price: number = 1499.99; // Цена товара
let inStock: boolean = true; // Есть ли товар в наличии
let discount: null | number = null; // Скидка пока не установлена
let warranty: undefined | string; // Переменная без значения (undefined)

if (!discount) {
    discount = 5;
}

if (!warranty) {
    warranty = "anonymous"
}

// Переменная, которая может быть числом или строкой
let productCode: string | number = 1010;
productCode = "A1010";

// Массив чисел (цены товаров)
const prices: number[] = [499, 1299, 799, 2499, 1599];
// prices.push("2000"); // Ошибка должна быть в TS

// Массив строк (названия товаров)
const products: string[] = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];

// Массив, содержащий только числа или только строки
const ids1: string[] = ["ID001", "ID002", "ID003"]; // Только строки
const ids2: number[] = [101, 102, 103]; // Только числа

// Массив с числами и строками одновременно
const mixedValues: (string | number)[] = [1, "two", 3, "four", 5, "six"];

// Либо строка, либо массив чисел
const mixedValues1: string | number[] = [1, 3, 5];

// Либо массив чисел, либо массив строк
const mixedValues2: string[] | number[] = ["two", "four", "six"];

// Массив булевых значений
const toggles: boolean[] = [true, false, false, true, true];

// Проверка значений (в TS тут должны появиться ошибки при несоответствии типов)
// price = "Expensive"; // Ошибка в TS
// inStock = "yes"; // Ошибка в TS
// prices.push("Free"); // Ошибка в TS
// products.push(100); // Ошибка в TS