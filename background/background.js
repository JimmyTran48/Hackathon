chrome.runtime.onInstalled.addListener(() => {
  // default state goes here
  // this runs ONE TIME ONLY (unless the user reinstalls your extension)
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method === "set_work") {
    chrome.storage.local.set({ work: request.num, state: request.state });
  } else if (request.method === "set_break") {
    chrome.storage.local.set({ break: request.num, state: request.state });
  }

  let num = request.num;
  let state = request.state;
  sendToPopup(num, state);
});

const sendToPopup = async (num, state) => {
  num--;
  const response = await chrome.runtime.sendMessage({
    method: "sending_time",
    num: num,
  });
};
