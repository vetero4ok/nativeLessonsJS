console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

// // Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827
//
// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/
//
// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// function/class , loops, anonimus code, switch, try/catch, if/else

// let globalScope = {
//     outerScope: null,
//     a: 10,
//     f: 'Function',
//     b: 50,
// }
//
// f(5);
//
// function f(arg1) {
//     let functionScope = {
//         outerScope: globalScope,
//         c: 50,
//         arg1: 5,
//         s: 100,
//     }
//
//     var c = 50;
//     let s = 100;
//
// }
//
// var a = 10;
//
// let b = 50;

// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 0,
// }
//
// let a = 10;
//
// function f() {
//     let functionScope = {
//         outerScope: globalScope,
//         innerF: 'Function',
//         b: 50,
//     }
//     console.log(a);
//     let b = 50;
//
//     function innerF() {
//         let innerFunctionScope = {
//             outerScope: functionScope,
//         }
//         console.log(a);
//         a = 0;
//         console.log(b);
//     }
//     innerF();
// }
//
// f();


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 600,
//     test: 'Function',
// }
//
// let a = 10;
//
// function f() {
//     let functionScope = {
//         outerScope: globalScope,
//         innerF: 'Function',
//         b: 200,
//     }
//     let b = 50;
//
//     function innerF() {
//         let innerFunctionScope = {
//             outerScope: functionScope,
//         }
//         console.log(b);
//         b += 50;
//     }
//     return innerF;
// }
//
// let test = f();
// a = 600;
// test();
// test();
// test();
// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(n: number) {
//     return function (n1:number) {
//         return n1+ n;
//     }
// }
//
// console.log(sum(3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let count = 0;
//        return  function () {
//             return ++count
//
//     }
//
//
// }
// const counter = makeCounter();
// console.log(counter())
// console.log(counter())
//
// const counter2 = makeCounter();
// console.log(counter2())
// console.log(counter())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter(start: number) {
//     let count = start;
//     return function () {
//         return {
//             increase: () => ++count,
//             decrease: () => --count,
//             reset: () => {
//                 count = 0
//                 return count
//             },
//             set: (start: number) => {
//                 count = start
//                 return count
//             },
//             getCount: () =>  count
//         }
//
//     }
// }
//
// console.log(makeCounter(2))


// Recursion

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050


//
// function sumTo(n: number): number {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// }
// console.log(sumTo(100))

// function sumTo(n: number, acc: number): number {
//     if (n === 1) return n + acc;
//     return sumTo(n - 1, acc + n);
// }

//console.log(sumTo(100, 0))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10


// function superSum(param: number) {
//     if (param < 0) return 0;
//     if (param === 1) return param;
//     let acc: number[] = [];
//
//     function helper(...args: number[]) {
//         acc = [...acc, ...args]
//         if (acc.length >= param) {
//             acc.length = param
//             return acc.reduce((acc, cv) => acc + cv)
//         } else {
//             return helper
//         }
//
//     }
//
//     return helper
// }
// //@ts-ignore
// console.log(superSum(3)(2,5,3));
// //@ts-ignore
// console.log(superSum(3)(2,5)(3));
// //@ts-ignore
// console.log(superSum(3)(2,5)(3,9));

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// function factorial(n:number):number {
//     if (n === 1) return n;
//     return n * factorial (n-1);
//
// }
//
// console.log(factorial(8))
// function factorial(n:number):number {
//      //return n ? n * factorial(n - 1) : 1;
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }

// function fibonaci(n: number): number {
//     if (n < 0) return n
//     if (n === 1) return n
//     return (n - 1) + fibonaci(n - 2)
//     //return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//
// }
//
// console.log(fibonaci(77))


// function fib(n:number) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// console.log(fib(77))

// Напишите функцию printList(list), которая выводит элементы списка по одному.
//
//     Сделайте два варианта решения: используя цикл и через рекурсию.
//
//     Как лучше: с рекурсией или без?
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//@ts-ignore
// function printList(list) {
//     let tmp = list;
//
//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//     }
//
// }
// printList(list)
// function logList(list) {
//     console.log(list.next)
//     if (list.next){
//         logList(list.next)
//     }
//
// }
// logList(list)
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};