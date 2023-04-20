setTimeout(() => {
  const body = document.querySelector("body");
  body.remove();
  const html = document.querySelector("html");
  const newBody = document.createElement("body");
  const button = document.createElement("button");
  const img = document.createElement("img");
  img.src =
    "https://static.wikia.nocookie.net/friends/images/f/f0/We_were_on_a_break.gif/revision/latest?cb=20180430180452";

  const div = document.createElement("div");
  div.innerText = "REMEMBER TO TAKE A BREAK >:D";

  button.innerText = "I'd like to go back to work!";
  button.addEventListener("click", () => {
    newBody.remove();
    html.appendChild(body);
  });

  button.style.width = "300px";

  newBody.style.backgroundColor = "white";
  newBody.style.color = "red";
  newBody.style.width = "100%";
  newBody.style.height = "600px";
  newBody.style.fontSize = "100px";
  newBody.style.display = "flex";
  newBody.style.flexDirection = "column";
  newBody.style.justifyContent = "center";
  newBody.style.alignContent = "center";
  // newBody.style.textAlign = "center";

  //if we want an image

  img.style.height = "200px";
  img.style.width = "300px";

  html.appendChild(newBody);
  newBody.appendChild(div);
  newBody.appendChild(img);
  newBody.appendChild(button);
}, 2000);
