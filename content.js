setTimeout(() => {
  const body = document.querySelector("body");
  body.remove();
  const html = document.querySelector("html");

  const div = document.createElement("div");
  div.style.backgroundColor = "white";
  div.style.color = "red";
  div.style.width = "100%";
  div.style.height = "600px";
  div.style.zIndex = "500";
  div.style.fontSize = "100px";
  div.innerText = "TAKE A BREAK :D";

  html.appendChild(div);

  alert("I WORK!");
}, 2000);
