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
  { rank: "Ace", suit: "Diamonds", value: 13 },
  { rank: "2", suit: "Diamonds", value: 1 },
  { rank: "3", suit: "Diamonds", value: 2 },
  { rank: "4", suit: "Diamonds", value: 3 },
  { rank: "5", suit: "Diamonds", value: 4 },
  { rank: "6", suit: "Diamonds", value: 5 },
  { rank: "7", suit: "Diamonds", value: 6 },
  { rank: "8", suit: "Diamonds", value: 7 },
  { rank: "9", suit: "Diamonds", value: 8 },
  { rank: "10", suit: "Diamonds", value: 9 },
  { rank: "Jack", suit: "Diamonds", value: 10 },
  { rank: "Queen", suit: "Diamonds", value: 11 },
  { rank: "King", suit: "Diamonds", value: 12 },
  { rank: "Ace", suit: "Clubs", value: 13 },
  { rank: "2", suit: "Clubs", value: 1 },
  { rank: "3", suit: "Clubs", value: 2 },
  { rank: "4", suit: "Clubs", value: 3 },
  { rank: "5", suit: "Clubs", value: 4 },
  { rank: "6", suit: "Clubs", value: 5 },
  { rank: "7", suit: "Clubs", value: 6 },
  { rank: "8", suit: "Clubs", value: 7 },
  { rank: "9", suit: "Clubs", value: 8 },
  { rank: "10", suit: "Clubs", value: 9 },
  { rank: "Jack", suit: "Clubs", value: 10 },
  { rank: "Queen", suit: "Clubs", value: 11 },
  { rank: "King", suit: "Clubs", value: 12 },
];

let generatedCard;
let gameCard;
let userPoints;
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
  userAnswer();
};
const userAnswer = () => {
  alert(
    `A continuación le mostramos su carta \n ${generatedCard.rank} ${generatedCard.suit}`
  );
  if (generatedCard.value === gameCard.value) {
    randomGameCard();
  }
  let cardValue = prompt(
    "¿Le parece que la siguiente carta será mayor, o menor?"
  );
  if (cardValue === "mayor") {
    if (generatedCard.value > gameCard.value) {
      alert(
        `Su carta:\n${generatedCard.rank} ${generatedCard.suit} \nEs mayor que nuestra carta: \n${gameCard.rank} ${gameCard.suit}`
      );
      playAgain();
      userPoints++;
    } else {
      alert(
        `se ha equivocado, ha salido la carta ${gameCard.rank} ${gameCard.suit}`
      );
      playAgain();
    }
  }
  if (cardValue === "menor") {
    if (generatedCard.value < gameCard.value) {
      alert(
        `Su carta:\n${generatedCard.rank} ${generatedCard.suit}   \nEs menor que \n${gameCard.rank} ${gameCard.suit}`
      );

      playAgain();
      userPoints++;
    } else {
      alert(
        `se ha equivocado, ha salido la carta ${gameCard.rank} ${gameCard.suit}`
      );
      playAgain();
    }
  }
};
const playAgain = () => {
  let replay = confirm("¿Desea seguir jugando?");
  if (replay === true) {
    randomUserCard();
    randomGameCard();
    userAnswer();
  } else {
    alert(
      `Un placer haber jugado con usted. Ha conseguido ${userPoints} puntos.`
    );
  }
};

startGame();
