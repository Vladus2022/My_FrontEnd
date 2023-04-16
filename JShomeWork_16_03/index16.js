// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив


// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];


// console.log(arr.slice(0,-3));
// console.log(Math.pow(2,50));

// let arr2 = arr.slice(2, 5);

// console.log(arr2);


//-------------------------------------------------------------------------------------------------------

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Переставить "Janett", "Franz" в начало массива



// for (i = 0; i < 2 ; i++) {
// arr.unshift(arr.pop());
// }
// console.log(arr);


// console.log(arr.reverse());  //'этот вариант просто перевернет зеркально'



//-------------------------------------------------------------------------------------------------------

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Заменить "Eddie", "Janett" на "Oleg","Valerchik"



// arr.splice(4,2,"Oleg","Valerchik");
// console.log(arr);






//-------------------------------------------------------------------------------------------------------

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// arr.reverse();
// arr.splice(0,4,"Mitrofan")
// console.log(arr);




//-------------------------------------------------------------------------------------------------------


// Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] 
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"] Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)

// arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// const res = arr.concat(arr2.slice(2,arr2.lenght));
// console.log(res);



//-------------------------------------------------------------------------------------------------------

// Дана строка 'Мама мыла раму' С помощью prompt() получите строку. Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово Например:

// prompt() ===>>> 'машину'
// // ‘Мама мыла машину’
// prompt() ===>>> 'рябину'
// // ‘Мама мыла рябину’
// prompt() ===>>> 'картину'
// // ‘Мама мыла картину’
// Вы можете использовать методы split, join, pop, push, slice и любые другие


// let strMama = ['Мама','мыла','раму'];
// let someWord = prompt('Введите любое слово (машину , рябину или картину');
// strMama.pop();
// strMama.push(someWord)
// console.log(strMama.join(' '));

