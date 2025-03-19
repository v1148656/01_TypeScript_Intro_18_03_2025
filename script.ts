let age: number = 30; // Под тип данных number входят значения: числа до 2 в 53 степени (а также NaN)
// age = '50' - Ошибка типизации

let age1: number | string = 30;
age1 = "50";

// Пример неявной типизации
// let x = 50;
// x = '50'

let flag: boolean = false;
flag = true;

// number, string, boolean, null, undefined             bigint (88888888888888888888888888888888n), symbol(str)

const arr: number[] = [1, 2, 3, 4];
// arr.push('5') Пример ошибки типизации

const arr1: number[] | string[] = ["1", "2", "3"];
const arr2: (number | string)[] = [1, "2", 3, "4"];
const arr3: number | string[] = 50;

console.log("Hello for terminal!");

interface IPerson {
  name: string;
  age: number;
}

// type Person = {
//     name: string,
//     age: number
// }

const person: IPerson = {
  name: "Bill",
  age: 38,
};

type Direction = "left" | "right" | "up" | "down";

let direction: Direction = "left";
direction = "right";
direction = "up";
direction = "down";

// direction = 'eight'; Ошибка типизации значения переменной direction

const sum = (a: number, b: number): string | number => {
  return (
    a + b > 100 ?
        a + b :
        a + b + ""
    );
};

console.log(typeof sum(200, 5));
// console.log(sum('2', 5)); Примеры ошибок типизации параметров
// console.log(sum(true, 5));
