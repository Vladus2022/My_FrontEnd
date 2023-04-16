// DONE!!!!!!!!!


// Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).
// toggleMe() // true
// toggleMe() // false
// toggleMe() // true
// toggleMe() // false

//THE SOLUTION

// let count= 0;
// function toggleMe() {
//     count++;
//     if (count % 2 === 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());

//=======================================================================================================

// DONE!!!!!!!!!

// Создать функцию counter(), которая способна считать количество своих вызовов (возвращает число). Если передать в эту функцию число как аргумент, то она должна возвращать счетчик начиная с этого числа.
// Пример:

// counter() // 1
// counter() // 2
// counter(6) // 7
// counter() // 8
// counter(11) // 12
// counter() // 13
// counter() // 14

//THE SOLUTION

// let count = 0;
// function counter(a = 1) {
//   count++;
//   if (a === 1) {
//     return count;
//   } else {
//     return (count = a + 1);
//   }
// }

// console.log(counter());
// console.log(counter());
// console.log(counter(6));
// console.log(counter());
// console.log(counter(11));
// console.log(counter());
// console.log(counter());

//=======================================================================================================

// Создать функцию classNameEditor(), задача которой "управлять" css-классами. Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.
// Пример:

// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз (это невозможно тк класс уже удален)

// function classNameEditor (a = '', b) {
// if ( b = 'true'&& a === ' ') {
//     return 10;
// } else {
//     return b;
// }

// };

// console.log(classNameEditor(2, 5 ));

//=======================================================================================================

// DONE!!!!!!!!!

// Callbacks
// Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.
// Пример вызова:

// checkLogin('user-admin', 'admin', itsOk, itsNotOk);

//THE SOLUTION

// function itsOk() {
//   console.log("It is a correct login.");
// }
// function itsNotOk() {
//   console.log("It is not a correct login.");
// }

// function checkLogin(cb1, cb2) {
//   const userAdmin = prompt("Enter your login.");
//   const correctUserAdmin = "admin";
//   if (userAdmin === correctUserAdmin) {
//     cb1();
//   } else {
//     cb2();
//   }
// }
// checkLogin(itsOk, itsNotOk);

//=======================================================================================================

// DONE!!!!!!!!!  но с частичным пониманием на сравнения.............

// Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.
// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив. 2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.

// Arrays
// Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.
// myFuncName([1,1,1,4,4,5,1,6,6,74,74,74,3]) //  [1,4,6,74]

//THE SOLUTION

// const arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

// const removeSameNum = (massive) => {
//   const uniqueNum = massive.reduce((resultArr, item) => {
//     const isNumAlong =
//       massive.filter((innerItem) => innerItem === item).length === 1;
//     if (isNumAlong || (!resultArr.includes(item) && !isNumAlong)) {
//       return [...resultArr, item];
//     } else {
//       return resultArr;
//     }
//   }, []);

//   console.log(uniqueNum);
// };

// removeSameNum(arr);

//=======================================================================================================

// DONE!!!!!!!!!

// Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

//THE SOLUTION

// const array = [
//   [2, 3, 6, 1],
//   [1, 8, 3, 4],
// ];

// const sortBigMassive = (massive) => {
//   let arr1 = massive[0];
//   let arr2 = massive[1];

//   let sumOfArr1 = arr1.reduce((sum, item) => {
//     return (sum += item);
//   });

//   let sumOfArr2 = arr2.reduce((sum, item) => {
//     return (sum += item);
//   });

//   if (sumOfArr1 > sumOfArr2) {
//     return arr1;
//   } else {
//     return arr2;
//   }
// };
// console.log(sortBigMassive(array));

//=======================================================================================================

// DONE!!!!!!!!!

// Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

//THE SOLUTION

// let arr2 = [3, 45, 66, 77, 9, 13, 42, 64, 8, 22, 102, 98, 10];

// const sortEvenArr = (massive) => {
//   const even = massive.filter((item) => {
//     if (item % 2 === 0 && item > 9 && item < 100) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   console.log(even);
// };
// sortEvenArr(arr2);

//=======================================================================================================

// Дан массив объектов:

const fbTeam = [
  {
    playerName: "Messi",
    team: "Barcelona",
  },
  {
    playerName: "Suarez",
    team: "Barcelona",
  },
  {
    playerName: "Ronaldo",
    team: "Juventus",
  },
  {
    playerName: "Buffon",
    team: "Juventus",
  },
  {
    playerName: "Valerchik",
    team: "Vedrich97",
  },
  {
    playerName: "Gonsalo",
    team: "Juventus",
  },
  {
    playerName: "Pedro",
    team: "Chelsea",
  },
  {
    playerName: "Zuma",
    team: "Chelsea",
  },
  {
    playerName: "PSG",
    team: "Rico",
  },
];

//   const fbPlayersByTeams = fbTeam.reduce((accum, item) => {
//    const nameOfTeam = fbTeam.filter(({team}) => {team} === item.team).length === 1;
//   }, {});

// console.log(fbPlayersByTeams);

// С помощью метода reduce() преобразуйте его в объект вида:

// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
// }
// Игроки должны быть сгруппированы по командам в соответствующие поля объекта fbPlayersByTeams. Под {} в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)



// Этот код просто для себя.....

// const arr = [2, 3, 6, 8, 13, 24, 53, 6];

// const foo = (array) => {
//     const result = [];
//     for ( let i = 0; i < array.length; i++) {
//         if(array[i] % 2 === 0) {
// result.push(array[i]);
//         };
//     };
//     console.log(result.length);
// };
// foo(arr);
// console.log(arr.includes(13));
