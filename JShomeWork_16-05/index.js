// "use strict";

//Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ответ и выведите в консоль только тех юзеров у которых в поле last_name не менее 5ти символов

fetch("https://reqres.in/api/users?page=1")
  .then((reqObj) => {
    return reqObj.json();
  })
  .then(({ data }) => {
    data.forEach((obj) => {
      if (obj.first_name.length >= 5) {
        console.log(obj);
        console.log(obj.first_name);
      }
    });
  });

//Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ошибку этого запроса и выведите в консоль Не удалось загрузить данные

// fetch("https://reqes.in/api/users?page=1")
// .catch(() => {
//   console.log("ERROR!");
// });

//Cделайте запрос https://reqres.in/api/users?page=1, ПОСЛЕ чего найдте id пользователя под именем и фамилией Emma Wong, сделайте следующий запрос на https://reqres.in/api/users/${id}, ПОСЛЕ выведите данные пользователя в консоль

fetch("https://reqres.in/api/users?page=1")
  .then((reqObj) => {
    return reqObj.json();
  })
  .then(({ data }) => {
    const emmaWang = data.find(
      ({ first_name, last_name }) =>
        first_name === "Emma" && last_name === "Wong"
    );
    if (emmaWang) {
      console.log("Emma was found");
    }
    return emmaWang;
  })
  .then((emma) => {
    return fetch("https://reqres.in/api/users/${emma.id}");
  })
  .then((reqObj) => {
    return reqObj.json();
  })
  .then(({ data }) => {
    console.log("emmas data", data);
  });

  //ВЛАДИСЛАВ!!!!! Не могу понять почему у меня во втором fetch  ${emma.id} не читается как аргумент?????
