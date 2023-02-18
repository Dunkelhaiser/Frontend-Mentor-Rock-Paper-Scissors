import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

const movesBtns = document.querySelectorAll(".moveButton") as NodeListOf<HTMLDivElement>;
const resultScreen = document.querySelector(".results") as HTMLDivElement;
const choiceScreen = document.querySelector(".choice") as HTMLDivElement;
const playAgainBtn = document.querySelector(".result button") as HTMLButtonElement;

const img = new Map([
    ["rock", rock],
    ["paper", paper],
    ["scissors", scissors],
]);

let score = 0;

const getResult = (userMove: string, pcMove: string) => {
    const scoreCounter = document.querySelector(".score span") as HTMLSpanElement;
    const result = document.querySelector(".result h2") as HTMLHeadingElement;
    if (userMove === "paper" && pcMove === "paper") {
        result.innerText = "Tie";
    } else if (userMove === "rock" && pcMove === "rock") {
        result.innerText = "Tie";
    } else if (userMove === "scissors" && pcMove === "scissors") {
        result.innerText = "Tie";
    } else if (userMove === "rock" && pcMove === "paper") {
        result.innerText = "You lose";
    } else if (userMove === "rock" && pcMove === "scissors") {
        result.innerText = "You win";
        score += 1;
        scoreCounter.innerText = String(score);
    } else if (userMove === "paper" && pcMove === "rock") {
        result.innerText = "You win";
        score += 1;
        scoreCounter.innerText = String(score);
    } else if (userMove === "paper" && pcMove === "scissors") {
        result.innerText = "You lose";
    } else if (userMove === "scissors" && pcMove === "rock") {
        result.innerText = "You lose";
    } else if (userMove === "scissors" && pcMove === "paper") {
        result.innerText = "You win";
        score += 1;
        scoreCounter.innerText = String(score);
    }
};

const computerMove = () => {
    const pcMoveImg = document.querySelector("#pcMove") as HTMLDivElement;
    const moves = ["rock", "paper", "scissors"];
    const pcMove = moves[Math.floor(Math.random() * 3)];

    pcMoveImg.className = `moveButton ${pcMove}`;
    pcMoveImg?.querySelector("img")?.setAttribute("alt", pcMove);
    pcMoveImg?.querySelector("img")?.setAttribute("src", img.get(pcMove) || rock);

    return pcMove;
};

const pickMove = (move: string) => {
    choiceScreen.classList.add("none");
    resultScreen.classList.remove("none");

    const userMoveImg = document.querySelector("#userMove") as HTMLDivElement;

    userMoveImg.className = `moveButton ${move}`;
    userMoveImg?.querySelector("img")?.setAttribute("alt", move);
    userMoveImg?.querySelector("img")?.setAttribute("src", img.get(move) || rock);

    const pcMove = computerMove();

    getResult(move, pcMove);
};

const playAgain = () => {
    choiceScreen.classList.remove("none");
    resultScreen.classList.add("none");
};

movesBtns.forEach((moveBtn) => moveBtn.addEventListener("click", () => pickMove(moveBtn.id)));
playAgainBtn.addEventListener("click", playAgain);
