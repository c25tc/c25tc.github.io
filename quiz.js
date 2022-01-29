var questionBox = document.querySelector(".question-box");
var container = document.querySelector(".container");
var box1 = document.querySelector(".box1-txt");
var box2 = document.querySelector(".box2-txt");
var box3 = document.querySelector(".box3-txt");
var box4 = document.querySelector(".box4-txt");
var glass = document.querySelector(".glass");
var lastanswer = 0;
var questionOrder = [];
var questionNumber = 0;
var questions = [
  ["what is 2 + 3 adasd a dasd asd asd asd asd ?", "3", "5", "2", "6", 2],
  ["what is 4 + 5?", "9", "6", "20", "1", 1],
];
// question box1 box2 box3 box4 answer-box-number
var reactions = [
  [
    "thank goodness you got that right... if you didn't I would be highly concerned...",
    "",
    "",
    "",
    "",
    "okay... misclick? we will go with that 😅",
  ],
  [
    "yay nice jop keep it up",
    "okay that is more like it i knew you had it in you",
    "",
    "",
    "common! i had trust in you",
    "okay... this is depressing, you cant be that dumb can you? pls prove me wrong 🥺",
  ],
];
// correct-happy correct-medium correct-mad wrong-happy wrong-medium wrong-mad
var emotion = 0;
// <0-mad 1-medium >2-happy

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
  for (let i = 0; i < 2; i++) {
    questionOrder.push(Math.floor(Math.random() * 2));
  }
  if (checkForDuplicates(questionOrder)) {
    return questionOrder;
  } else {
    createQuestionList();
  }
}
createQuestionList();


function next() {
  questionBox.innerHTML = questions[questionOrder[questionNumber]][0];
  box1.innerHTML = questions[questionOrder[questionNumber]][1];
  box2.innerHTML = questions[questionOrder[questionNumber]][2];
  box3.innerHTML = questions[questionOrder[questionNumber]][3];
  box4.innerHTML = questions[questionOrder[questionNumber]][4];
  questionBox.classList.add("on");
  glass.classList.add("on");
  container.classList.add("on");
}

function submit(btnNum) {
  if (btnNum == questions[questionOrder[questionNumber]][5]) {
    emotion++;
    lastanswer = 1;
  } else {
    emotion--;
    lastanswer = -1;
  }

  if (lastanswer < 0) {
    if (emotion < 0) {
      glass.innerHTML = reactions[questionNumber][5];
    } else if (emotion > 0) {
      glass.innerHTML = reactions[questionNumber][3];
    } else {
      glass.innerHTML = reactions[questionNumber][4];
    }
  } else {
    if (emotion < 0) {
      glass.innerHTML = reactions[questionNumber][2];
    } else if (emotion > 0) {
      glass.innerHTML = reactions[questionNumber][0];
    } else {
      glass.innerHTML = reactions[questionNumber][1];
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
