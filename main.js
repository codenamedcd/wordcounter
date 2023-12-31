const word = document.getElementById("word");
const char = document.getElementById("char");

let subject = document.getElementById("subject");

const copy = document.querySelector(".copy");
const clear = document.querySelector(".clear");
const uppercase = document.querySelector(".text-uppercase");
const lowercase = document.querySelector(".text-lowercase");
const titlecase = document.querySelector(".text-titlecase");
const sentececase = document.querySelector(".text-sentececase");

let tooltip = document.querySelector(".tooltip");

// get + show save item
const data = sessionStorage.getItem("value");
subject.innerText = data;

let countWord = data.trim().split(/\s+/).length;
let countChar = data.split(" ").join("").replaceAll("\n", "").length;
word.innerHTML = countWord;
char.innerHTML = countChar;

function getInput() {
  if (subject.value.length == 0) {
    removeInput();
  } else {
    let countWord = subject.value.trim().split(/\s+/).length;
    let countChar = subject.value.split(" ").join("").replaceAll("\n", "").length;
    word.innerHTML = countWord;
    char.innerHTML = countChar;

    saveInput();
  }
}

function saveInput() {
  sessionStorage.setItem("value", subject.value);
}

function copyInput() {
  navigator.clipboard.writeText(subject.value);
}

function removeInput() {
  subject.value = "";
  sessionStorage.removeItem("value");
  word.innerHTML = "0";
  char.innerHTML = "0";
}

// copy
copy.addEventListener("click", function () {
  tooltip.classList.add("hide");
  tooltip.innerHTML = "Copied!";

  setTimeout(function () {
    tooltip.classList.remove("hide");
  }, 1000);
});
// clear
clear.addEventListener("click", function () {
  tooltip.classList.add("hide");
  tooltip.innerHTML = "Clear!";

  removeInput();

  setTimeout(function () {
    tooltip.classList.remove("hide");
  }, 1000);
});

function caseChange() {
  let optionCase = document.getElementById("optionCase").value;
  // uppercase
  if (optionCase == 1) {
    subject.value = subject.value.toLocaleUpperCase();
    tooltip.classList.add("hide");
    tooltip.innerHTML = "Uppercase!";

    saveInput();

    setTimeout(function () {
      tooltip.classList.remove("hide");
    }, 1000);
  }
  // lowercase
  else if (optionCase == 2) {
    subject.value = subject.value.toLowerCase();
    tooltip.classList.add("hide");
    tooltip.innerHTML = "Lowcase!";

    saveInput();

    setTimeout(function () {
      tooltip.classList.remove("hide");
    }, 1000);
  }
  // title
  else if (optionCase == 3) {
    subject.value = subject.value.toLowerCase();
    let wordTitle = subject.value.trim().split(/\s+/);
    for (let i = 0; i < wordTitle.length; i++) {
      wordTitle[i] = wordTitle[i][0].toLocaleUpperCase() + wordTitle[i].substr(1);
    }

    subject.value = wordTitle.join(" ");

    tooltip.classList.add("hide");
    tooltip.innerHTML = "Title!";

    saveInput();

    setTimeout(function () {
      tooltip.classList.remove("hide");
    }, 1000);
  }
  // sentece
  else if (optionCase == 4) {
    subject.value = subject.value.toLowerCase();
    let dotSplit = subject.value.split(". ");
    let capitalizedSentences = [];

    for (let i = 0; i < dotSplit.length; i++) {
      let wordCap = dotSplit[i].trim();
      let firstWord = wordCap.charAt(0).toUpperCase() + wordCap.slice(1);
      capitalizedSentences.push(firstWord);
    }

    let joinedSentences = capitalizedSentences.join(". ");

    subject.value = joinedSentences;

    tooltip.classList.add("hide");
    tooltip.innerHTML = "Sentece!";

    saveInput();

    setTimeout(function () {
      tooltip.classList.remove("hide");
    }, 1000);
  }
}

// uppercase.addEventListener("click", function () {
//   subject.value = subject.value.toLocaleUpperCase();
//   tooltip.classList.add("hide");
//   tooltip.innerHTML = "Uppercase!";

//   setTimeout(function () {
//     tooltip.classList.remove("hide");
//   }, 1000);
// });

// lowercase.addEventListener("click", function () {
//   subject.value = subject.value.toLowerCase();
//   tooltip.classList.add("hide");
//   tooltip.innerHTML = "Lowcase!";

//   setTimeout(function () {
//     tooltip.classList.remove("hide");
//   }, 1000);
// });

// titlecase.addEventListener("click", function () {
//   subject.value = subject.value.toLowerCase();
//   let wordTitle = subject.value.trim().split(/\s+/);
//   for (let i = 0; i < wordTitle.length; i++) {
//     wordTitle[i] = wordTitle[i][0].toLocaleUpperCase() + wordTitle[i].substr(1);
//   }

//   subject.value = wordTitle.join(" ");

//   tooltip.classList.add("hide");
//   tooltip.innerHTML = "Title!";

//   setTimeout(function () {
//     tooltip.classList.remove("hide");
//   }, 1000);
// });

// sentececase.addEventListener("click", function () {
//   subject.value = subject.value.toLowerCase();
//   let dotSplit = subject.value.split(".");
//   for (let i = 0; i < dotSplit.length; i++) {
//     let wordCap = dotSplit[i].trim().split(/\s+/);
//     for (let j = 0; j < wordCap.length; j++) {
//       wordCap[0] = wordCap[j][0].toLocaleUpperCase() + wordCap[j].substr(1);
//     }
//     dotSplit[i] = wordCap.join(" ");
//   }
//   subject.value = dotSplit.join(". ");

//   tooltip.classList.add("hide");
//   tooltip.innerHTML = "Sentece!";

//   setTimeout(function () {
//     tooltip.classList.remove("hide");
//   }, 1000);
// });
