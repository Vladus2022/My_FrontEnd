// 1.

 const car = {
     model: 'tesla',
     adress: {
         country: {
             city: {
                 name: 'Boston',
                 street: {
                     name: 'pushkina',
                     number: 2
                 }
             }
         },
         region: ['Iowa','Texas','California']
     },
     specs: {
         price: {
             low: 2000,
             mid: 3000,
             high: 5000
         },
         engine: {
             power: 400,
             lowPower: 100
         }
     }
 };

 const {adress:{country:{city:{name:nameCity}}}} = car;
 console.log(nameCity);

const {adress: {region: [ first, second, third, forth = 'Arizona']}} = car;
console.log(forth);

const {specs: {price:{high}}} = car;
console.log(high);

const {specs:fuelConsumption = { city: 12, mix: 10, country: 8 }}  = car;
console.log(fuelConsumption);





// С помощью деструктуризации запишите в отдельны переменные:
// 1.1 Название города в котором находится авто
// 1.2 Четвертый регион из поля `region` (по умолчанию значение должно быть `'Arizona'`)
// 1.3 Поле `high`, объекта `price` 
// 1.4 Из объекта `specs` записать поле `fuelConsumption`, которое по умолчанию должно являться объектом вида:
// ```js 
// { city: 12, mix: 10, country: 8 }
// ```

//========================================================================================================


// 2. Дан объект:
// ```js


// ```
// 2.1 Напишите программу, которая умножит все **ЧИСЛОВЫЕ** (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).


const student = { math: 5, biology: 3, language: 2, isOboltus: true };


for (let key in student) {
    if (typeof student[key] === 'number' )  {

        student[key] *= 2;
        
    }

}
console.log(student);




// 2.2 Напишите программу, которая посчитает среднее арифметическое всех оценок студента.
// Если средняя оценка (после умножения) будет больше `5`, то поле `isOboltus` должно стать `false`.




let sum = 0;
let counter = 0;

for (let key in student) {
    if (typeof student[key] === 'number' ) {
sum += student[key];
counter ++;
    }
    else if (sum / counter > 5) {
        student[key] = false;
    }
}
console.log(student)
 