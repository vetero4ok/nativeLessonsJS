console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/
//
// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU
//
//
// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     // do some code
//     setTimeout(() => {
//         resolve(10); // all ok
//         //reject(0); // some error
//     }, 2000); //  some async action
// }); // res, rej
//

// prom
//     .then(res => {
//     console.log('reslove ', res);
//         throw -15;
//     return 50;
// }, err => {
//         console.log('err ', err);
//         throw -1;
//     })
//     .then(res2 => {
//         console.log('res2 ', res2)
//     }, err2 => {
//         console.log('err2 ', err2);
//     })
//     .then(res3 => {
//         console.log('res2 ', res3)
//     }, err3 => {
//         console.log('err2 ', err3);
//     });

// prom
//     .then(res => {
//         console.log('reslove ', res);
//         throw -15;
//         return 50;
//     })
//     .then(res2 => {
//         console.log('res2 ', res2)
//         return res2 + 50;
//     })
//     .then(res3 => {
//         console.log('res3 ', res3)
//     }, err3 => {
//         console.log('err3 ', err3);
//     });
//
// prom
//     .then(res => {
//         console.log('reslove ', res);
//         return Promise.reject('YoYo');
//     })
//     //@ts-ignore
//     .finally(fin => {
//         console.log('fin ', fin);
//         return 100500;
//     })
//     .then(res2 => {
//         console.log('res2 ', res2)
//         return res2 + 50;
//     })
//
//     .then(res3 => {
//         console.log('res3 ', res3)
//     })
//     .catch(err => {
//         console.log('err ', err);
//         return 1000;
//     })
//     .then(res4 => {
//         console.log('res4 ', res4);
//     })
//
// let a = 10;

// some code



//Promise.reject()
//Promise.resolve()

// just a plug
export default ()=>{};