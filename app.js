(function () {
  let button = document.getElementById("btn");
  let values = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let backGround = document.querySelector(".backGround");
  let hexCode = document.getElementById("hexCode");

  button.addEventListener("click", changeBg);

  function changeBg() {
    let hexValue = "#";

    for (let i = 0; i < 6; i++) {
      hexValue += values[Math.floor(Math.random() * values.length)];
    }
    backGround.style.background = hexValue;
    hexCode.textContent = hexValue;
  }
})();
