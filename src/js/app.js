"use strict"



// ---------------------------------Adaptive-FontSize----------------------------

// const title = document.querySelector(".title");
// const titleComputerStyle = getComputedStyle(title);
// console.log(titleComputerStyle.fontSize);




//----------------------------------CALCULATE_Basement-------------------------

const result = document.querySelector(".result");
let arr = [0];
result.innerHTML = 0;
let countFeel = false;


//--------------------------------------NUMBERS------------------------------

const zero = document.querySelector(".calc__item_zero");
const one = document.querySelector(".calc__item_one");
const two = document.querySelector(".calc__item_two");
const three = document.querySelector(".calc__item_three");
const four = document.querySelector(".calc__item_four");
const five = document.querySelector(".calc__item_five");
const six = document.querySelector(".calc__item_six");
const seven = document.querySelector(".calc__item_seven");
const eight = document.querySelector(".calc__item_eight");
const nine = document.querySelector(".calc__item_nine");

function addNumbers(number) {
  if (countFeel) arr = [""]
  if (result.innerHTML[1] !== ".") {
    if (Number(result.innerHTML[0]) == 0 && arr.length <= 1 && arr[0] != " -") {
      arr.shift()
    }
  }
  if (arr[arr.length - 1] != ")") {
    arr.push(number);
    result.innerHTML = arr.join("");
    countFeel = false;
  }
  addShadowRightArc()
  showAnswer()
}
function addZero() {
  if (countFeel || arr.length == 1 && arr[0] == 0) arr = []
  if (arr[arr.length - 1] != ")") {
    if (arr[arr.length - 1] != 0 || arr[arr.length - 2] !== " - " &&
      arr[arr.length - 2] !== " + " &&
      arr[arr.length - 2] !== " / " &&
      arr[arr.length - 2] !== " * " &&
      arr[arr.length - 2] !== " % " &&
      arr[arr.length - 2] !== "(") {
      arr.push(0);
      result.innerHTML = arr.join("");
      countFeel = false;
      addShadowRightArc()
      showAnswer()
    }
  }
}
function addOne() {
  addNumbers(1)
}
function addTwo() {
  addNumbers(2)
}
function addThree() {
  addNumbers(3)
}
function addFour() {
  addNumbers(4)
}
function addFive() {
  addNumbers(5)
}
function addSix() {
  addNumbers(6)
}
function addSeven() {
  addNumbers(7)
}
function addEight() {
  addNumbers(8)
}
function addNine() {
  addNumbers(9)
}

zero.addEventListener("click", addZero)
one.addEventListener("click", addOne)
two.addEventListener("click", addTwo)
three.addEventListener("click", addThree)
four.addEventListener("click", addFour)
five.addEventListener("click", addFive)
six.addEventListener("click", addSix)
seven.addEventListener("click", addSeven)
eight.addEventListener("click", addEight)
nine.addEventListener("click", addNine)


document.addEventListener("keydown", function (event) {
  if (event.key == 0) {
    addZero()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 1) {
    addOne()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 2) {
    addTwo()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 3) {
    addThree()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 4) {
    addFour()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 5) {
    addFive()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 6) {
    addSix()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 7) {
    addSeven()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 8) {
    addEight()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == 9) {
    addNine()
  }
})


//-----------------------------------------POINT---------------------------------------


const point = document.querySelector(".calc__item_point");

function addPoint() {
  if (Number(arr[arr.length - 1]) || arr[arr.length - 1] == 0) {
    if (arr.includes(".")) {
      if (arr.slice(arr.lastIndexOf(".")).includes(" + ")
        || arr.slice(arr.lastIndexOf(".")).includes(" - ")
        || arr.slice(arr.lastIndexOf(".")).includes(" / ")
        || arr.slice(arr.lastIndexOf(".")).includes(" * ")
        || arr.slice(arr.lastIndexOf(".")).includes(" % ")) {
        arr.push('.');
        result.innerHTML = arr.join("")
      }
    } else {
      arr.push('.');
      result.innerHTML = arr.join("")
    }
  }
  if (Number(arr[arr.length - 1]) || arr[arr.length - 1] == 0) {
    if (arr.includes(".")) {
      if (arr.slice(arr.lastIndexOf(".")).includes(" + ")
        || arr.slice(arr.lastIndexOf(".")).includes(" - ")
        || arr.slice(arr.lastIndexOf(".")).includes(" / ")
        || arr.slice(arr.lastIndexOf(".")).includes(" * ")
        || arr.slice(arr.lastIndexOf(".")).includes(" % ")) {
        arr.push('.');
        result.innerHTML = arr.join("")
      }
    } else {
      arr.push('.');
      result.innerHTML = arr.join("")
    }
  }
  addShadowRightArc()
}

point.addEventListener("click", addPoint)

document.addEventListener("keydown", function (event) {
  if (event.key == ".") {
    addPoint()
  }
})


//-------------------------------------------OPERATORS-------------------------

const share = document.querySelector(".calc__item_share");
const myltiply = document.querySelector(".calc__item_multiply");
const minus = document.querySelector(".calc__item_minus");
const add = document.querySelector(".calc__item_add");
const interest = document.querySelector(".calc__item_interest");


function afterCount() {
  if (countFeel) {
    arr = [result.innerHTML];
    result.innerHTML = arr.join("");
    countFeel = false;
  }
}

function addShareMyltiplyInterest(operator) {
  if (arr[arr.length - 1] !== "(") {
    if (arr[arr.length - 1] !== " - " &&
      arr[arr.length - 1] !== " -" &&
      arr[arr.length - 1] !== " + " &&
      arr[arr.length - 1] !== " / " &&
      arr[arr.length - 1] !== " * " &&
      arr[arr.length - 1] !== " % ") {
      arr.push(`${operator}`);
      result.innerHTML = arr.join("")
      addShadowRightArc()
      showAnswer()
    } else {
      if (arr[arr.length - 2] !== " - " &&
        arr[arr.length - 2] !== " + " &&
        arr[arr.length - 2] !== " / " &&
        arr[arr.length - 2] !== " * " &&
        arr[arr.length - 2] !== " % ") {
        arr.pop();
        arr.push(`${operator}`);
        result.innerHTML = arr.join("")
        addShadowRightArc()
        showAnswer()
      }
    }
  }
}
function addAdd() {
  afterCount()
  if (arr[arr.length - 1] !== " - " &&
    arr[arr.length - 1] !== " -" &&
    arr[arr.length - 1] !== " + " &&
    arr[arr.length - 1] !== " / " &&
    arr[arr.length - 1] !== " * " &&
    arr[arr.length - 1] !== " % " &&
    arr[arr.length - 1] !== "(") {
    arr.push(` + `);
    result.innerHTML = arr.join("")
  } else {
    if (arr[arr.length - 2] !== " - " &&
      arr[arr.length - 2] !== " + " &&
      arr[arr.length - 2] !== " / " &&
      arr[arr.length - 2] !== " * " &&
      arr[arr.length - 2] !== " % " &&
      arr[arr.length - 1] !== "("
    ) {
      arr.pop("");
      arr.push(` + `);
      result.innerHTML = arr.join("")
    }
  }
  addShadowRightArc()
  showAnswer()
}
function addMinusOdinar() {
  if (arr[arr.length - 1] != " -") {
    if (arr[arr.length - 1] == " / " ||
      arr[arr.length - 1] == " * " ||
      arr[arr.length - 1] == " % " ||
      arr[arr.length - 1] == "(" ||
      arr == [0]) {
      arr.push(" -");
      result.innerHTML = arr.join("")
    }
    else {
      if (arr == 0) {
        arr.pop("")
        arr.push(" -");
        result.innerHTML = arr.join("")
      }
    }
  }
}
function addMinusBenar() {
  if (arr[arr.length - 1] !== " - " &&
    arr[arr.length - 1] !== " + " &&
    arr[arr.length - 1] !== " / " &&
    arr[arr.length - 1] !== " * " &&
    arr[arr.length - 1] !== " % " &&
    arr[arr.length - 1] !== "(" &&
    arr[arr.length - 1] !== " -") {
    arr.push(` - `);
    result.innerHTML = arr.join("")
  } else {
    if (arr[arr.length - 2] !== " - " &&
      arr[arr.length - 2] !== " + " &&
      arr[arr.length - 2] !== " / " &&
      arr[arr.length - 2] !== " * " &&
      arr[arr.length - 2] !== " % "
    ) {
      if (arr[arr.length - 1] == " - " || arr[arr.length - 1] == " + ") {
        arr.pop("");
        arr.push(` - `);
        result.innerHTML = arr.join("")
      }
    }
  }
}
function addMinus() {
  addMinusOdinar();
  addMinusBenar();
  showAnswer();
  addShadowRightArc();
}
function addMyltiply() {
  afterCount()
  addShareMyltiplyInterest(" * ")
}
function addShare() {
  afterCount()
  addShareMyltiplyInterest(" / ")
}
function addInterest() {
  afterCount()
  addShareMyltiplyInterest(" % ")
}

add.addEventListener("click", addAdd)
minus.addEventListener("click", addMinus)
myltiply.addEventListener("click", addMyltiply)
share.addEventListener("click", addShare)
interest.addEventListener("click", addInterest)

document.addEventListener("keydown", function (event) {
  if (event.key == "+") {
    addAdd()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == "-") {
    addMinus()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == "*") {
    addMyltiply()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == "/") {
    addShare()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == "%") {
    addInterest()
  }
})


//----------------------------------------------------ARCS-----------------------------------------------------------------------

const leftArc = document.querySelector(".calc__item_left-arc");
const rightArc = document.querySelector(".calc__item_right-arc");
const shadowRightArc = document.createElement("span");
shadowRightArc.style.color = "gray";
let arrArcs = [];

function addLeftArc() {
  if (countFeel || arr[0] == 0 && arr.length == 1) arr = [];
  if (arr[arr.length - 1] == " + " ||
    arr[arr.length - 1] == " - " ||
    arr[arr.length - 1] == " / " ||
    arr[arr.length - 1] == " * " ||
    arr[arr.length - 1] == "(" ||
    arr.length == 0) {
    arr.push(`(`);
    result.innerHTML = arr.join("")
    countFeel = false;
    addShadowRightArc()
    showAnswer()
  }
}
function addRightArc() {
  let leftArcCount = arr.filter(function (item, index, array) {
    return item == "("
  }).length
  let rightArcCount = arr.filter(function (item, index, array) {
    return item == ")"
  }).length
  if (leftArcCount >= ++rightArcCount) {
    if (
      arr.slice(arr.lastIndexOf("(")).includes(" + ")
      || arr.slice(arr.lastIndexOf("(")).includes(" - ")
      || arr.slice(arr.lastIndexOf("(")).includes(" / ")
      || arr.slice(arr.lastIndexOf("(")).includes(" * ")
    ) {
      if (arr[arr.length - 1] == ")"
        || Number(arr[arr.length - 1])
        || arr[arr.length - 1] == 0) {
        arr.push(`)`);
        result.innerHTML = arr.join("");
      }
    }
  }
  addShadowRightArc()
}
function addShadowRightArc() {
  let countLeftArcs = arr.filter(function (item, index, array) {
    return item == "("
  }).length
  let countRightArcs = arr.filter(function (item, index, array) {
    return item == ")"
  }).length
  for (let i = 0; i < countLeftArcs - countRightArcs; i++) {
    arrArcs.push(`)`);
  }
  arrArcs.length = countLeftArcs - countRightArcs;
  shadowRightArc.innerHTML = arrArcs.join("")
  result.append(shadowRightArc)
}

leftArc.addEventListener("click", addLeftArc)
rightArc.addEventListener("click", addRightArc)

document.addEventListener("keydown", function (event) {
  if (event.key == "(") {
    addLeftArc()
  }
})
document.addEventListener("keydown", function (event) {
  if (event.key == ")") {
    addRightArc()
  }
})


//-------------------------------------------ARASE---------------------------------------------------------------------------------


const araseComputer = document.querySelector("[data-computer]");
const araseMobil = document.querySelector("[data-mobil]");
const araseOne = document.querySelector(".calc__item_arase-one");

function AddArase() {
  arr = [0]
  result.innerHTML = arr.join("");
  addShadowRightArc()
}
function AddAraseOne() {
  if (countFeel) {
    arr = [];
    for (let x = 0; x < result.innerHTML.length; x++) {
      arr.push(`${result.innerHTML[x]}`)
    }
    arr.pop()
    result.innerHTML = arr.join("");
  }
  if (!countFeel) {
    arr.pop()
  }
  if (arr.length === 0) arr = [0]
  result.innerHTML = arr.join("");
  addShadowRightArc()
  countFeel = false;
}

araseComputer.addEventListener("click", AddArase)
araseMobil.addEventListener("click", AddArase)
araseOne.addEventListener("click", AddAraseOne)

document.addEventListener("keydown", function (event) {
  if (event.key == "Backspace") {
    AddAraseOne()
  }
})


//-----------------------------------------COUNT---------------------------------------


const count = document.querySelector(".calc__item_count");

function expressionAudit() {
  let leftArcCount = 0;                              // arcsError
  let rightArcCount = 0;
  arr.forEach(function (item, index, array) {
    if (item == "(") {
      leftArcCount++
    };
    if (item == ")") {
      rightArcCount++
    };
  })
  for (let num = 0; num < leftArcCount - rightArcCount; num++) {
    arr.push(")");
  }

  if (arr.includes(" % ")) {                      // interestError
    countFeel = true;
    arr.splice(arr.indexOf(" % "), 1, " / 100 * ")
  }


  if (eval(arr.join("")) == 0.30000000000000004) {  // NumbersError
    result.innerHTML = 0.3;
    NumbersError = false;
  }


}

function ShowCount() {
  let NumbersError = true;
  animation()
  showPreresult()
  addBackElement()
  expressionAudit()
  if (NumbersError) {
    result.innerHTML = eval(arr.join(""))
    // spanResult.textContent = eval(arr.join(""));
    arr = result.innerHTML.split("");
    countFeel = true;
  }
  answer = result.innerHTML;
  if (arr.includes(" + ")) {
    countFeel = true;
  }
  if (arr.includes(" - ")) {
    countFeel = true;
  }
  if (arr.includes(" * ")) {
    countFeel = true;
  }
  if (arr.includes(" / ")) {
    countFeel = true;
  }
  if (arr.includes(" % ")) {
    countFeel = true;
  }
  arr = result.innerHTML.split("");
}


count.addEventListener("click", ShowCount)
document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    ShowCount()
  }
})

const preresult = document.querySelector(".preresult");
function showPreresult() {
  preresult.innerHTML = `${arr.join("")} =`
}

let answer = "0";
function showAnswer() {
  if (!countFeel) preresult.innerHTML = `Ans = ${answer}`
}



//-----------------------------------------BACKGROUND---------------------------------------

// const backgroundActive = document.querySelector(".back-ground-image")
// const backGroundStyle = getComputedStyle(backgroundActive)
// function dinamicBackGround(){
//   let backGroundCount = 
// }

// set

// document.addEventListener("keydown", function (event) {
//   console.log(event.key);
// })

//----------------------------------------BACKLIST-------------------------------------

const backBody = document.querySelector(".back")
const backList = document.querySelector(".back__list")
const backButton = document.querySelector(".back-svg")
const backElement = document.createElement("li")
backElement.classList.add("back__item")
const vladWish = document.querySelector(".vlad-wish")


let arrExpression = [];
let arrResult = [];
let ExpressionCount = 0;
let backOpenCount = 2;
const wrapper = document.querySelector(".wrapper")

function addBackElement() {
  vladWish.remove();
  arrExpression.push(arr.join(""))
  arrResult.push(eval(arr.join("")))
  backElement.innerHTML = `<span class="expression">${arrExpression[ExpressionCount]}</span> = <span class="expression">${arrResult[ExpressionCount]}</span>`
  const newBackElement = backElement.cloneNode(true);
  backList.append(newBackElement);
  ExpressionCount++;
}
function showBackList(event) {
  if (true) {
    if (backOpenCount % 2 && !event.target.closest(".back") || event.target.closest(".expression")) {
      backBody.style.display = "none";
      backButton.classList.remove("back-svg-top")
      ++backOpenCount
    } else {
      if (event.target.closest(".back-svg")) {
        backBody.style.display = "block";
        backButton.classList.add("back-svg-top")
        ++backOpenCount
        removeBorder()
      }
    }
  }
}
function removeBorder() {
  let backBodyStyles = getComputedStyle(backList);
  if (parseInt(backBodyStyles.height) == 300) {
    backList.style.borderRight = '0';
    backList.style.borderRadius = '20px 0 0 20px';
    backList.style.overflowY = 'scroll';
  }
}
function returnHistory(event) {
  if (event.target.closest(".expression")) {
    let activeHistory = event.target.closest(".expression").innerHTML
    result.innerHTML = activeHistory
    answer = eval(arr.join(''))
    preresult.innerHTML = `Ans = ${answer}`
  }
}

wrapper.addEventListener("click", showBackList)
backBody.addEventListener("click", returnHistory)

//-----------------------------Animation--------------------------------------------

function animation() {
  activePreresult()
  activeResult()
}

function activePreresult() {
  preresult.classList.add("preresult_active_bigger");
  function preresultSmaller() {
    preresult.classList.remove("preresult_active_bigger");
  }
  setTimeout(preresultSmaller, 250)
}

function activeResult() {
  console.log(result.className);
  result.classList.add("result_start-position")
  console.log(result.className);

  function addLastPosition() {
    result.classList.add("result_active")
    result.classList.remove("result_start-position")
  }

  setTimeout(addLastPosition, 200)

  setTimeout(function () {
    result.classList.remove("result_active")
  }, 300)

  //   result.classList.add("result_active")
}

















