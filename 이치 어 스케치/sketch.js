const container = document.querySelector("#container");
document.body.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center;"
);

function sketch() {
  container.innerHTML = "";

  const width = prompt("너비를 입력해주세요. (100 이하)", 1);
  if (width > 100) {
    return;
  }

  const flex = document.createElement("div");
  flex.setAttribute("style", "display: flex;");

  for (let i = 0; i < width; i++) {
    const flex = document.createElement("div");
    flex.setAttribute("style", "display: flex;");
    container.appendChild(flex);

    for (let j = 0; j < width; j++) {
      const block = document.createElement("div");
      block.setAttribute(
        "style",
        "width:10px; height:10px; border: 1px solid black;"
      );
      flex.appendChild(block);

      block.addEventListener("mouseover", function (e) {
        block.style.backgroundColor =
          "rgb(" +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          ")";
      });
    }
  }
}

const button = document.querySelector("button");
button.setAttribute(
  "style",
  "margin-bottom: 50px; padding: 10px 20px; border: 3px solid teal; background-color: white; border-radius: 10px; font-size: 15px;"
);

button.addEventListener("click", () => {
  sketch();
});
