document.addEventListener("DOMContentLoaded", main);

function main() {
  cardsFunction();
}

function cardsFunction() {
  const cards = [
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
  cards.sort(() => 0.5 - Math.random());
  console.log(cards);

  createBoard(cards);

  function createBoard(cards) {
    const grid = document.querySelector(".grid");
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./images/blank.jpg");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
      card.addEventListener("click", flipCard);
    }
  }

  let cardsChosen = [];

  function flipCard() {
    let cardID = this.getAttribute("data-id");
    console.log(cards[cardID].name);
    cardsChosen.push(cards[cardID].name);
  }
}
