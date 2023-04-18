const deck = [
  { rank: "Ace", suit: "♠️", value: 13 },
  { rank: "2", suit: "♠️", value: 1 },
  { rank: "3", suit: "♠️", value: 2 },
  { rank: "4", suit: "♠️", value: 3 },
  { rank: "5", suit: "♠️", value: 4 },
  { rank: "6", suit: "♠️", value: 5 },
  { rank: "7", suit: "♠️", value: 6 },
  { rank: "8", suit: "♠️", value: 7 },
  { rank: "9", suit: "♠️", value: 8 },
  { rank: "10", suit: "♠️", value: 9 },
  { rank: "Jack", suit: "♠️", value: 10 },
  { rank: "Queen", suit: "♠️", value: 11 },
  { rank: "King", suit: "♠️", value: 12 },
  { rank: "Ace", suit: "♥️", value: 13 },
  { rank: "2", suit: "♥️", value: 1 },
  { rank: "3", suit: "♥️", value: 2 },
  { rank: "4", suit: "♥️", value: 3 },
  { rank: "5", suit: "♥️", value: 4 },
  { rank: "6", suit: "♥️", value: 5 },
  { rank: "7", suit: "♥️", value: 6 },
  { rank: "8", suit: "♥️", value: 7 },
  { rank: "9", suit: "♥️", value: 8 },
  { rank: "10", suit: "♥️", value: 9 },
  { rank: "Jack", suit: "♥️", value: 10 },
  { rank: "Queen", suit: "♥️", value: 11 },
  { rank: "King", suit: "♥️", value: 12 },
  { rank: "Ace", suit: "♦️", value: 13 },
  { rank: "2", suit: "♦️", value: 1 },
  { rank: "3", suit: "♦️", value: 2 },
  { rank: "4", suit: "♦️", value: 3 },
  { rank: "5", suit: "♦️", value: 4 },
  { rank: "6", suit: "♦️", value: 5 },
  { rank: "7", suit: "♦️", value: 6 },
  { rank: "8", suit: "♦️", value: 7 },
  { rank: "9", suit: "♦️", value: 8 },
  { rank: "10", suit: "♦️", value: 9 },
  { rank: "Jack", suit: "♦️", value: 10 },
  { rank: "Queen", suit: "♦️", value: 11 },
  { rank: "King", suit: "♦️", value: 12 },
  { rank: "Ace", suit: "♣️", value: 13 },
  { rank: "2", suit: "♣️", value: 1 },
  { rank: "3", suit: "♣️", value: 2 },
  { rank: "4", suit: "♣️", value: 3 },
  { rank: "5", suit: "♣️", value: 4 },
  { rank: "6", suit: "♣️", value: 5 },
  { rank: "7", suit: "♣️", value: 6 },
  { rank: "8", suit: "♣️", value: 7 },
  { rank: "9", suit: "♣️", value: 8 },
  { rank: "10", suit: "♣️", value: 9 },
  { rank: "Jack", suit: "♣️", value: 10 },
  { rank: "Queen", suit: "♣️", value: 11 },
  { rank: "King", suit: "♣️", value: 12 },
];

const biggerButton = document.querySelector("biggerbutton");
const smallerButton = document.querySelector("smallerbutton");
const playAgainButton = document.querySelector("playagain");
const userCard = document.querySelector("displayusercard");
const guessCard = document.querySelector("displayguesscard");
const userResult = document.querySelector("finalMessage");
let generatedCard;
let gameCard;
const showDisplay = () => {
  userCard.innerText = generatedCard;
  guessCard.innerText = gameCard;
};
const randomUserCard = () => {
  randomCard = Math.floor(Math.random() * deck.length);
  generatedCard = deck[randomCard];
};
const randomGameCard = () => {
  randomCard = Math.floor(Math.random() * deck.length);
  gameCard = deck[randomCard];
};
const startGame = () => {
  randomUserCard();
  randomGameCard();
};
const biggerUserAnswer = () => {
  if (generatedCard.value === gameCard.value) {
    randomGameCard();
  }

  if (generatedCard.value > gameCard.value) {
    userResult.innerHTML = "Ha acertado";
    playAgain();
  } else {
    userResult.innerHTML = "Ha fallado";
    playAgain();
  }
};

const smallerUserAnswer = () => {
  if (generatedCard.value === gameCard.value) {
    randomGameCard();
  }

  if (generatedCard.value < gameCard.value) {
    alert(
      `Su carta:\n${generatedCard.rank} ${generatedCard.suit}   \nEs menor que \n${gameCard.rank} ${gameCard.suit}`
    );

    playAgain();
  } else {
    alert(
      `se ha equivocado, ha salido la carta ${gameCard.rank} ${gameCard.suit}`
    );
    playAgain();
  }
};

const playAgain = () => {
  let replay = playAgainButton;
  if (replay === true) {
    randomUserCard();
    randomGameCard();
    userAnswer();
  }
};

startGame();

playAgainButton.addEventListener("click", playAgain);
biggerButton.addEventListener("click", biggerUserAnswer);
smallerButton.addEventListener("click", smallerUserAnswer);
