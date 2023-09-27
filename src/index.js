const options = [
  {
    name: "rock",
    emoji: "🗿",
    loseTo: ["paper"]
  },
  {
    name: "paper",
    emoji: "📄",
    loseTo: ["scissors"],
  },
  {
    name: "scissors",
    emoji: "✂",
    loseTo: ["rock"],
  },
];

const getRandomNumber = (x) => {
  const randomNumber = Math.floor(Math.random() * x);
  return randomNumber;
};

let playerChoice = null;
let cpuChoice = null;

const divButtons = [...document.querySelectorAll(".options button")];
// El querySelectorAll no devuelve un array así que lo destructuramos

const determineWinner = (playerChoice, cpuChoice) => {
  if (playerChoice === cpuChoice) {
    return "Tie";
  } else if ((playerChoice === "rock" && cpuChoice === "scissors") || (playerChoice === "scissors" && cpuChoice === "paper") || (playerChoice === "paper" && cpuChoice === "rock")) {
    return "You Win";
  } else {
    return "You Lost";
  }
};

const setResultText = (text) => {
  const divResult = document.querySelector(".result");
  divResult.textContent = `Player: ${playerChoice} - CPU: ${cpuChoice} ${text}`;
};

const setPlayerChoice = (option) => {
  const type = option.classList.item(1);
  playerChoice = type;
  const cpuChoiceIndex = getRandomNumber(options.length);
  cpuChoice = options[cpuChoiceIndex].name;
  const text = determineWinner(playerChoice, cpuChoice);
  setResultText(text);
};

divButtons.forEach((button) => {
  button.addEventListener("click", () => setPlayerChoice(button));
});
