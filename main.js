document.addEventListener("DOMContentLoaded", main);

function main() {
  cardsFunction();
}

function cardsFunction() {
  const cardArray = [
    {
      name: "anime",
      img: "./images/Anime.png",
    },
    {
      name: "apple",
      img: "./images/Apple.png",
    },
    {
      name: "avocado",
      img: "./images/Avocado.png",
    },
    {
      name: "car",
      img: "./images/Car.png",
    },
    {
      name: "dog",
      img: "./images/Dog.png",
    },
    {
      name: "iron-man",
      img: "./images/Iron Man.png",
    },
    {
      name: "pixels",
      img: "./images/Pixels.png",
    },
    {
      name: "tank",
      img: "./images/Tank.png",
    },
    {
      name: "troll",
      img: "./images/Troll.png",
    },
    {
      name: "anime",
      img: "./images/Anime.png",
    },
    {
      name: "apple",
      img: "./images/Apple.png",
    },
    {
      name: "avocado",
      img: "./images/Avocado.png",
    },
    {
      name: "car",
      img: "./images/Car.png",
    },
    {
      name: "dog",
      img: "./images/Dog.png",
    },
    {
      name: "iron-man",
      img: "./images/Iron Man.png",
    },
    {
      name: "pixels",
      img: "./images/Pixels.png",
    },
    {
      name: "tank",
      img: "./images/Tank.png",
    },
    {
      name: "troll",
      img: "./images/Troll.png",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());
  console.log(cardArray);

  createBoard();

  function createBoard() {
    const grid = document.querySelector(".grid");
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./images/blank.jpg");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
      card.addEventListener("click", flipCard);
    }
  }

  let cardsChosen = [];
  let cardsChosenIDs = [];
  let cardsWon = [];

  function flipCard() {
    let cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenIDs.push(cardID);
    this.setAttribute("src", cardArray[cardID].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 100);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneID = cardsChosenIDs[0];
    const optionTwoID = cardsChosenIDs[1];

    if (optionOneID === optionTwoID) {
      alert("Your have clicked the same image!");
      cards[optionOneID].setAttribute("src", "./images/blank.jpg");
      cards[optionTwoID].setAttribute("src", "./images/blank.jpg");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      // alert("You have found a match!")
      cards[optionOneID].setAttribute("src", "./images/white.png");
      cards[optionTwoID].setAttribute("src", "./images/white.png");
      cards[optionOneID].removeEventListener("click", flipCard);
      cards[optionTwoID].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      let myInterval = setInterval(function () {
        cards[optionOneID].setAttribute("src", "./images/blank.jpg");
        cards[optionTwoID].setAttribute("src", "./images/blank.jpg");
        clearInterval(myInterval);
      }, 250);
    }
    cardsChosen = [];
    cardsChosenIDs = [];
    let resultDisplay = document.querySelector("#result");
    resultDisplay.textContent = cardsWon.length;
    console.log(cardsWon.length);
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You have won!";
    }
  }
}
