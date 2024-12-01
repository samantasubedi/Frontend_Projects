function updateclock() {
  const now = new Date();
  let hours = String(now.getHours());
  const minutes = String(now.getMinutes()).padStart(2, 0);
  const seconds = String(now.getSeconds()).padStart(2, 0);
  const med = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours == 0) {
    hours = 12;
  }
  hours = String(hours).padStart(2, 0);

  const time = hours + ":" + minutes + ":" + seconds + "       " + med;
  const time2 = `<div class="flex justify-between gap-10">
  <span>
  ${hours} : ${minutes} : ${seconds}
  </span>
  <span>
  ${med}
  </span>
  </div>`;
  document.getElementById("clock").innerHTML = time2;
}
setInterval(updateclock, 1000);
