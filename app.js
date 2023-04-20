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

// const start = () => {
//   clearInterval(id);
//   upperCont.style.backgroundColor = "#77eb6e";
//   lowerCont.style.backgroundColor = "#77eb6e";
//   //FUNCTIONALITY
//   let workInputTime = workInput.value;
//   workTimer.innerText = workInputTime;
//   workInput.style.display = "none";
//   workTimer.style.display = "block";
//   mainButton.innerHTML = "Take a break!";

//   const setWork = async () => {
//     const response = await chrome.runtime.sendMessage({
//       method: "set_work",
//       num: workInputTime,
//     });
//   };
//   setWork();
//   // id = setInterval(() => {
//   //   setWork();
//   //   --workInputTime;
//   //   workTimer.innerHTML = workInputTime;
//   //   if (workInputTime <= 0) {
//   //     //play sound
//   //     breaking();
//   //   }
//   // }, 1000);

//   //REMOVE CUrRENt EVENT LISTENER
//   mainButton.removeEventListener("click", start);
//   //ADD NEW EVENT LISTENER
//   mainButton.addEventListener("click", breaking);
// };

// stops work timer and begin break timer
const breaking = () => {
  clearInterval(id);
  upperCont.style.backgroundColor = "#eb6e6e";
  lowerCont.style.backgroundColor = "#eb6e6e";

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
  mainButton.innerHTML = "Back to work?";

  // id = setInterval(() => {
  //   setBreak();
  //   --breakInputTime;
  //   breakTimer.innerHTML = breakInputTime;
  //   if (breakInputTime <= 0) {
  //     //play sound
  //     clearInterval(id);
  //     // start();
  //   }
  // }, 1000);

  mainButton.removeEventListener("click", breaking);

  mainButton.addEventListener("click", pause);
};

const reset = () => {
  // (async () => {
  //   const response = await chrome.runtime.sendMessage({ method: "get_name" });
  //   // do something with response here, not outside the function
  //   console.log(response);
  // })();

  clearInterval(id);

  // workTimer.style.display = "none";
  // workInput.style.display = "block";

  breakTimer.style.display = "none";
  breakInput.style.display = "block";

  mainButton.innerText = "Relax!";

  mainButton.removeEventListener("click", breaking);

  mainButton.addEventListener("click", breaking);
};

const pause = () => {};

mainButton.addEventListener("click", breaking);
resetButton.addEventListener("click", reset);

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.method === "sending_time") {
//     workTimer.innerText = request.num;
//   }
// });
