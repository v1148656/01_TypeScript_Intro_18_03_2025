var age = 30; // Под тип данных number входят значения: числа до 2 в 53 степени (а также NaN)
// age = '50' - Ошибка типизации
var age1 = 30;
age1 = '50';
// Пример неявной типизации
// let x = 50;
// x = '50'
var flag = false;
flag = true;
// number, string, boolean, null, undefined             bigint (88888888888888888888888888888888n), symbol(str)
var arr = [1, 2, 3, 4];
// arr.push('5') Пример ошибки типизации
var arr1 = ["1", "2", '3'];
var arr2 = [1, '2', 3, '4'];
console.log("Hello for terminal!");
