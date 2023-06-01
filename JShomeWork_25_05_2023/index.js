"use strick";

// Cделать три кнопки click me, при загрузке страницы каждой кнопке должна назначаться "бомба" (при клике на кнопку она меняет свою надпись на BOOM!). В любой момент времени может быть только одна кнопка с бомбой. При повторном клике на кнопку она не должна менять свою надпись. При каждой перезагрузке страницы кнопка с бомбой должна переназначаться.

const btn = document.getElementsByClassName("btn");

const btnArray = [...btn];

let bomb = Math.round(Math.random() * 2);

const boom = ({ target }) => {
  target.innerText = "BOOM";
};

const notBomb = ({ target }) => {
  target.innerText = "OK";
};

function boomber(arr) {
  arr.forEach((btn, index) => {
    if (index === bomb) {
      btn.addEventListener("click", boom);
    } else {
      btn.addEventListener("click", notBomb);
    }
  });
}

boomber(btnArray);

// Напишите игру "камень, ножницы, бумага". Должно быть три кнопки для выбора игрока ("камень", "ножницы", "бумага"). При клике игрока на любую из кнопок, под кнопками выводится сообщение "компьютер выбрал: ${computerChoise}", где computerChoise - это рандомный выбор компьютера (выбор рандомим с помощью Math.round(Math.random() * 2)). В этой игре также необходимо выводить результат текущего раунда (кто выиграл).

const parent2 = document.getElementById("parent2");
const computerChois = document.getElementById("computerChois");
const result = document.getElementById("result");
const arrButtons = [...parent2.children];

const playing = ({ target }) => {
  const random = Math.round(Math.random() * 2);
  computerChois.innerText = `The computer has chosen : ${arrButtons[random].innerText}`;
  if (
    (target.innerText === "STONE" &&
      arrButtons[random].innerText === "SCISSORS") ||
    (target.innerText === "SCISSORS" &&
      arrButtons[random].innerText === "PAPER") ||
    (target.innerText === "PAPER" && arrButtons[random].innerText === "STONE")
  ) {
    result.innerText = "YOU WIN";
  } else if (target.innerText === arrButtons[random].innerText) {
    result.innerText = "NO ONE WINS";
  } else {
    result.innerText = "YOU LOOSE";
  }
};

function startPlaying(arr) {
  arr.forEach((elem) => {
    elem.addEventListener("click", playing);
  });
}
startPlaying(arrButtons);
