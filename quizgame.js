var bg = document.querySelector(".background");
var questionBox = document.querySelector(".question-box");
var container = document.querySelector(".container");
var box1 = document.querySelector(".box1-txt");
var box2 = document.querySelector(".box2-txt");
var box3 = document.querySelector(".box3-txt");
var box4 = document.querySelector(".box4-txt");
var glass = document.querySelector(".glass");
var quizPage = document.querySelector(".quiz-page");
var selectPage = document.querySelector(".select-page");
var robotNum = 0;
var lastanswer = 0;
var questionOrder = [];
var questionNumber = 0;
var quizNumber = 0;
var entertainment = [
  [
    "who is the girl in the beatles song Get Back?",
    "Jane",
    "Loretta",
    "Jude",
    "Madonna",
    2,
  ],
  [
    "what is the name of Michael Jackson's famous sister?",
    "Jen",
    "Laurie",
    "Janet",
    "Karen",
    3,
  ],
  [
    "what planet is Superman from?",
    "Omicron",
    "Electronite",
    "Kalon",
    "Krypton",
    4,
  ],
  [
    "what is Eminem's nickname?",
    "Slim shady",
    "Slim shadowy",
    "Fat boi",
    "Vanilla Ice",
    1,
  ],
  [
    "what team does Ted Lasso coach?",
    "Manchester",
    "Richmond",
    "Cambridge",
    "Oxford",
    2,
  ],
];
var historys = [
  ["what is the first year?", "wrong", "correct", "wronger", "wrongest", 2],
  ["what is the last year?", "wrong", "wronger", "correct", "wrongest", 3],
  ["what is the last year?", "wrong", "wronger", "correct", "wrongest", 3],
  ["what is the last year?", "wrong", "wronger", "correct", "wrongest", 3],
  ["what is the last year?", "wrong", "wronger", "correct", "wrongest", 3],
];
var quizes = [entertainment, historys];
// question box1 box2 box3 box4 answer-box-number
var happy = [
  [
    "Hey! Way to go! Keep it up!!!",
    "",
    "",
    "",
    "",
    "okay... misclick? Really focus this time...",
  ],
  [
    "Off to a great start! ready for more???",
    "okay that is more like it i knew you had it in you",
    "",
    "",
    "oops...everyone makes mistakes",
    "don't worry! you can still turn it around :)",
  ],
  [
    "nice job! you've got the hang of this!",
    "",
    "you are turning things around now...keep at it!",
    "oh no! you were doing so well! you still got this!",
    "",
    "you may be missing something here 🤔",
  ],
];
var emoji = [
  ["👍", "", "", "", "", "🤔"],
  ["😁", "😊", "", "", "😅", "😭"],
  ["🥳", "", "😌", "🤨", "", "😰"],
];
var robots = [happy, emoji];
// correct-happy correct-medium correct-mad wrong-happy wrong-medium wrong-mad
var emotion = 0;
// <0-mad 1-medium >2-happy

function changeRobot(Num) {
  robotNum = Num;
  if (Num == 0) {
    document.querySelector(".happy").classList.add("selected");
    document.querySelector(".emoji").classList.remove("selected");
  }
  if (Num == 1) {
    document.querySelector(".emoji").classList.add("selected");
    document.querySelector(".happy").classList.remove("selected");
  }
}

function startGame(gameNum) {
  quizNumber = gameNum;
  quizPage.classList.remove("hide");
  selectPage.classList.add("hide");
}

function checkForDuplicates(array) {
  let valuesAlreadySeen = [];

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (valuesAlreadySeen.indexOf(value) !== -1) {
      return false;
    }
    valuesAlreadySeen.push(value);
  }
  return true;
}

function createQuestionList() {
  questionOrder = [];
  for (let i = 0; i < 5; i++) {
    questionOrder.push(Math.floor(Math.random() * 5));
  }
  if (checkForDuplicates(questionOrder)) {
    return questionOrder;
  } else {
    createQuestionList();
  }
}
createQuestionList();

function next() {
  questionBox.innerHTML = quizes[quizNumber][questionOrder[questionNumber]][0];
  box1.innerHTML = quizes[quizNumber][questionOrder[questionNumber]][1];
  box2.innerHTML = quizes[quizNumber][questionOrder[questionNumber]][2];
  box3.innerHTML = quizes[quizNumber][questionOrder[questionNumber]][3];
  box4.innerHTML = quizes[quizNumber][questionOrder[questionNumber]][4];
  questionBox.classList.add("on");
  glass.classList.add("on");
  container.classList.add("on");
  bg.style.background = "#dba7ee";
}

function submit(btnNum) {
  if (btnNum == quizes[quizNumber][questionOrder[questionNumber]][5]) {
    emotion++;
    lastanswer = 1;
    bg.style.background = "#aaecd4";
  } else {
    emotion--;
    lastanswer = -1;
    bg.style.background = "#eea0a0";
  }

  if (lastanswer < 0) {
    if (emotion < 0) {
      glass.innerHTML = robots[robotNum][questionNumber][5];
    } else if (emotion > 0) {
      glass.innerHTML = robots[robotNum][questionNumber][3];
    } else {
      glass.innerHTML = robots[robotNum][questionNumber][4];
    }
  } else {
    if (emotion < 0) {
      glass.innerHTML = robots[robotNum][questionNumber][2];
    } else if (emotion > 0) {
      glass.innerHTML = robots[robotNum][questionNumber][0];
    } else {
      glass.innerHTML = robots[robotNum][questionNumber][1];
    }
  }

  console.log(emotion);
  questionBox.innerHTML = "Next";
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  questionBox.classList.remove("on");
  glass.classList.remove("on");
  container.classList.remove("on");
  questionNumber++;
}
