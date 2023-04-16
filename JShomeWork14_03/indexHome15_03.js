// Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. Пользователь вводит числа с помощью prompt() до тех пор пока не нажмет отмена. Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.

// let positivNum = 0;
// let negativNum = 0;
// let zeroNum = 0;

// for ( ; inputedNum = prompt('Input any number you want.') ; ) {

//     if (isNaN(inputedNum) === true) {
//         break;
//     }

//     inputedNum = Number(inputedNum);

//     if ( inputedNum > 0) {
//         positivNum ++;
//     }

//     if ( inputedNum < 0) {
//         negativNum++;
//     }

//     if (inputedNum === 0) {
//         zeroNum++;
//     }
    
// } 

// console.log(`You inputed ${positivNum} positive numbers , ${negativNum} negative numbers , and ${zeroNum} zero.`);




 //-------------------------------------------------------------------------------------------------------


// Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. Ввод чисел прекращается, когда нажали отмена, после чего выводится среднее арифметическое.



// let summAmount = 0;
// let numAmount = 0;

// for ( ; inputedNum = prompt('Input any number.') ; ) {

//     if (isNaN(inputedNum) === true) {    
//          break;
//     }

//          inputedNum = Number(inputedNum); 
//          numAmount++;
//          summAmount += inputedNum;   
// }

// console.log(`The middle amount of inputed numbers = ${summAmount / numAmount}`);




//-------------------------------------------------------------------------------------------------------



// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем каждое последующее число должно быть больше предыдущего, иначе вывести текст ошибка! в консоль и прекратить ввод.


// let num = 0;
// let sum = []; //это что бы посмотреть какие цифры были введены корректно

// for (let i = 0; i < 5; i++) {
//     let inNum = Number(prompt("enter any number in growing rate."));

//     if (num < inNum) {
//         num = 0;
//         num += inNum;
// sum.push(inNum); //это что бы посмотреть какие цифры были введены корректно
//       } else { 
//         console.log("Error!");
//         break;
//       }

// }
// console.log(`Your correct inputed num : ${sum}`); //это что бы посмотреть какие цифры были введены корректно




//-------------------------------------------------------------------------------------------------------




// Написать программу-генератор популярных песен. Пользователь вводит число. Вывести количество pam равное этом числу. Строка должна начинаться с param. Например: Вводим 3 Программа выводит: "param-pam-pam-pam" Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" ==В этом задании запрещено использовать .repeat() (все делаем циклом)==



// let arr = ['param'];

// const inputedNum = Number(prompt('Input any number.'));

// for ( let i = 0; i < inputedNum; i++) {
//     arr.push('pam');
// }
// console.log(arr.join('-'));












// 1.
// const arr = [3,6,3,7,3,41,51,76,23];
// найти сумму всех элементов

// let result = 0
// const arr = [3,6,3,7,3,41,51,76,23];
// for ( let i = 0 ; i < arr.length; i++) {

// result += arr[i];


// }
// console.log(result);


// 2. Найти среднее арифметическое всех элементов массива которые стоят на четных местах