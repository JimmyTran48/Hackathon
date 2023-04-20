// let countDownDate = Date.now();
// console.log(countDownDate);

/*

1. Set timer to how long they wanna work/break 
2. Click start mainButton
  - Get the value from inputs and save to a var
  - Change text of p tags to equal var
  - Change the display of input and p tags
  - Start mainButton turns into stop mainButton
  - Work time will decrement by minute
    *


*/
// const workInput = document.querySelector("#work");
// const workTimer = document.querySelector("#workContainer p");

const mainButton = document.querySelector("#button1");
const resetButton = document.querySelector("#button2");

const breakInput = document.querySelector("#break");
const breakTimer = document.querySelector("#p");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");

const upperCont = document.querySelector("#two");
const lowerCont = document.querySelector("#three");

let id;

// stops work timer and begin break timer
const breaking = () => {
  clearInterval(id);
  upperCont.style.backgroundColor = "rgb(188, 244, 221)";
  lowerCont.style.backgroundColor = "rgb(188, 244, 221)";
  
  let currentMinute = breakInput.value;
  let currentSecond = 0;

  minutes.innerText = currentMinute;
  seconds.innerText = "0" + currentSecond.toString();
  id = setInterval(() => {
    if (currentSecond === 0) {
      currentSecond = 59;
      currentMinute--;
    }

    minutes.innerText = currentMinute;

    if (currentSecond < 10) {
      const string = "0" + currentSecond.toString();
      seconds.innerText = string;
    } else {
      seconds.innerText = currentSecond;
    }
    currentSecond--;
  }, 1000);



  breakInput.style.display = "none";
  breakTimer.style.display = "block";
  mainButton.innerHTML = "Back to work!";

  mainButton.removeEventListener("click", breaking);

  mainButton.addEventListener("click", pause);
};

const reset = () => {
  clearInterval(id);

  breakTimer.style.display = "none";
  breakInput.style.display = "block";

  mainButton.innerText = "Relax now!";

  mainButton.removeEventListener("click", breaking);

  mainButton.addEventListener("click", breaking);
};

const pause = () => {
  mainButton.innerHTML = "Are you SURE?";
  mainButton.removeEventListener("click", pause);

  mainButton.addEventListener("click", pauseAgain);
};

const pauseAgain = () => {
  breakTimer.style.display = "none";
  breakInput.style.display = "block";
  upperCont.style.backgroundColor = "#d9ebf1";
  lowerCont.style.backgroundColor = "#d9ebf1";

  mainButton.innerText = "Relax now!";

  mainButton.removeEventListener("click", pauseAgain);

  mainButton.addEventListener("click", breaking);
};

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

mainButton.addEventListener("click", breaking);
resetButton.addEventListener("click", reset);
