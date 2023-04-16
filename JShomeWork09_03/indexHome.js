
// 1. Пользователь вводит **ТРИ** числа
// вывести в консоль наибольшее из них.
// В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число)



// const firstNum = Number(prompt('Input first number'));
// const secondNum = Number(prompt('Input second number'));
// const thirdNum = Number(prompt('Input third number'));

// if (firstNum >= secondNum && firstNum >= thirdNum) {
//     console.log(`${firstNum} is the biggest number from inputed.`);
// } 
// else if (secondNum >= firstNum && secondNum >= thirdNum) {
//     console.log(`${secondNum} is the biggest number from inputed.`);
// }
// else if (thirdNum >= secondNum && thirdNum >= firstNum) {
//     console.log(`${thirdNum} is the biggest number from inputed.`);
// }


// -------------------------------------------------------------------------


// 2. Используя конструкцию switch, напишите
// программу, которая переводит числа в слова.
// Например: пользователь вводит число 2,
// программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)




// const numIn = prompt('Input a number from 0 to 5');

// switch (numIn) {
//     case '0':
//         console.log('Noul');
//         break;
//     case '1':
//         console.log('One');
//         break;
//     case '2':
//         console.log('Two');
//         break;
//      case '3':
//         console.log('Three');
//         break;
//     case '4':
//         console.log('Four');
//         break;
//      case '5':
//         console.log('Five');
//         break;
// }


// -------------------------------------------------------------------------




// 3. Дан следующий код:

// ```js
    // let age = 10;

    // if (age < 10) {
    //     console.log('hi!');
    // } else if (age < 20) {
    //     console.log('hello!');
    // } else {
    //     console.log('good day!');
    // }
// ```

// Необходимо переписать этот код используя `тернарный оператор`

// let age = 10;
// console.log(age < 10 ? 'hi!' : age < 20 ? 'hello!' : 'good day!');







// -------------------------------------------------------------------------




// 4. Написать программу для проверки таблицы умножения:
//     1. Пользователь вводит число `a`
//     2. Пользователь вводит число `b`
//     3. Пользователь вводит ответ на `a * b`

// Нам необходимо проверить ответ пользователя на корректность, если пользователь ответил неправильно то выводим ответ вида:
// **Ошибка! Правильный ответ: `correctAnswer`**

// Где `correctAnswer` - это переменная, в которой находится правильный ответ

// Если пользователь ввел правильный ответ, то выводим сообщение вида:
// **Правильно!**



// const aData = Number(prompt('Input data A'));
// const bData = Number(prompt('Input data B'));
// const result = Number(prompt('Calculate what is result: A * B = ? '));

// if (result === (aData * bData)) {
//     console.log(`Your answer is CORRECT! (${aData} * ${bData} = ${aData * bData})`);
// }
// else {
//     console.log(`WRONG! The correct answer is: (${aData} * ${bData} = ${aData * bData})`);
// }



// -------------------------------------------------------------------------



// 1. Создать программу в которой сравнивается возраст
// двух человек (Федота и Митрофана).
// Если возраст Федота больше чем возраст Митрофана,
// то должно выводится сообщение, в котором указана
// разница в возрасте: 
// «Федот старше Митрофана на 3 ».
// Если возраст Митрофана больше, то выводится такое
// сообщение:
//  «Митрофан старше Федота на 5».
// Если возраст обоих человек один и тот же, то
// выводится такое сообщение: 
// «Федот и Митрофан одного возраста».




// const ageFedot =Number(prompt('Hello Fedot! How old are you?'));
// const ageMitrofan =Number(prompt('Hello Mitrofan! How old are you?'));
// if (ageFedot < 0 || ageMitrofan < 0 ) {
//     console.log(`The age can't be negative.`);
// } else if (ageFedot > ageMitrofan) {
//     console.log(`Fedot is elder then Mitrofan on ${ageFedot - ageMitrofan} years. `);
// } else if (ageMitrofan > ageFedot) {
//     console.log(`Mitrofan is elder then Fedot on ${ageMitrofan - ageFedot} years.`);
// } else {
//     console.log(`The age of Fedot = the age of Mitrofan`);
// }


// const num1 = Number(prompt('Input num1'));
// const num2 = Number(prompt('Input num2'));
// const num3 = Number(prompt('Input num3'));

// const sum = num1 + num2 + num3;
// console.log(sum);



// 1. вывести в консоль числа от 7 до 3
// 2. вывести на экран двузначные числа которые делятся на 4 но не делятся на 6
// 3. написать программу которая выводит числа от 1 до n (n вводится prompt'ом)


//        1


// for (let i = 7 ; i >= 3 ; i--) {
//     console.log (i);
// }

          2
          

// for (let i = 10; i < 100 ; i++) {
//     if (i % 4 === 0 && i % 6 !== 0) {
//         console.log(i);
//     }

// }


//        3


// let userNum = Number(prompt('Input some number'));

// for ( let i = 1; i <= userNum; i++ ) {
//     console.log(i);
// }

let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for (let i =0 ; i<arr.length; i++) {
sum += Math.pow(arr[i],5);
}
console.log(sum);
