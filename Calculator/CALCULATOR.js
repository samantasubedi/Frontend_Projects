let dis = document.getElementById("display");
function appendtodisplay(inputvalue) {
  dis.value += inputvalue;
}
function clear() {
  console.log("fas0");
}

document.getElementById("allclear").addEventListener("click", () => {
  dis.value = null;
});

const numberBUttons = document.querySelectorAll(".num");

numberBUttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;
    dis.value += buttonValue;
  });
});

function calculate() {
  try {
    dis.value = eval(dis.value);
  } catch {
    dis.value = "Invalid Syntax";
  }
}
