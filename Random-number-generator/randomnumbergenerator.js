document.getElementById("btn").addEventListener("click", function () {
  let x = Number(document.getElementById("maxbox").value || 50);
  let y = Number(document.getElementById("minbox").value || 0);
  let a = Math.random() * (x - y + 1);
  let b = Math.floor(a) + y;
  document.getElementById("number").textContent = b;
});
