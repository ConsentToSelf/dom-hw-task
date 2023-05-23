// first
/*
Зная структуру html, с помощью изученных методов получить (в консоль):

1. head

2. body

3. все дочерние элементы body и вывести их в консоль.

4. первый div и все его дочерние узлы

а) вывести все дочерние узлы в консоль

б) вывести в консоль все дочерние узлы, кроме первого и последнего

Для навигации по DOM использовать методы, которые возвращают только элементы

*/

"use strict";
// const head = document.querySelector("head");
// console.log(head);
// const body = document.querySelector("body");
// console.log(body);
// const div = document.querySelector("div");
// // console.log(body.childNodes);
// // const bodyChild = body.firstElementChild.children;

// const bodyFilter = [...div.children].filter(
//   (p) => p !== div.firstElementChild && p !== div.lastElementChild
// );
// console.log(bodyFilter);

// second
/*
Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:


isParent(parent, child);

isParent(document.body.children[0], document.querySelector('mark'));

true так как первый див является родительским элементом для mark


isParent(document.querySelector('ul'), document.querySelector('mark'));

false так ul НЕ является родительским элементом для mark

Функция принимает только DOM объекты. Обязательно проверяйте это.
*/

// const isParent = (parent, child) => {
//   if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) {
//     return "Это не Html Element";
//   }
//   if (parent === child.parentElement.parentElement.parentElement) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const result = isParent(
//   document.body.children[0],
//   document.querySelector("mark")
// );
// const result2 = isParent(
//   document.querySelector("ul"),
//   document.querySelector("mark")
// );
// console.log(result);

// third
// const link = document.querySelectorAll("a");
// function takeCare([...link]) {
//   const ulParent = document.querySelector("ul");
//   let state = [];
//   for (let i = 0; i < link.length; i++) {
//     if (link[i].parentNode.parentElement !== ulParent) {
//       state.push(link[i]);
//     } else {
//       continue;
//     }
//   }
//   return state;
// }
// console.log(takeCare(link));
