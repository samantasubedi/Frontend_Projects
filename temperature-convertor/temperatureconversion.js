let t;
document.getElementById("in-celsius").addEventListener("input", () => {
  let c = Number(document.getElementById("in-celsius").value);
  if (c < -273.5) {
    document.getElementById("in-far").value = null;
    document.getElementById("in-kelvin").value = null;
    document.getElementById("output").textContent =
      "Temperature can't be less than -273.5 degree celsius";
    output.display.display = "flex";
    clearTimeout(t);
    t = setTimeout(function () {
      output.style.display = "none";
    }, 7000);
  } else {
    const f1 = (9 / 5) * c + 32;
    const k1 = c + 273.15;
    console.log({ f1, k1 });
    document.getElementById("in-far").value = f1;
    document.getElementById("in-kelvin").value = k1;
    output.style.display = "none";
  }
});

document.getElementById("in-kelvin").addEventListener("input", () => {
  let k = Number(document.getElementById("in-kelvin").value);
  if (k < 0) {
    document.getElementById("in-far").value = null;
    document.getElementById("in-celsius").value = null;
    document.getElementById("output").textContent =
      "Temperature can't be less than 0 degree kelvin";
    clearTimeout(t);
    t = output.style.display = "flex";
    setTimeout(function () {
      output.style.display = "none";
    }, 7000);
  } else {
    const c3 = k - 273.15;
    const f3 = ((k - 273.15) * 9) / 5 + 32;
    document.getElementById("in-celsius").value = c3;
    document.getElementById("in-far").value = f3;
    output.style.display = "none";
  }
});
document.getElementById("in-far").addEventListener("input", function () {
  let f = Number(document.getElementById("in-far").value);
  if (f < -459.67) {
    document.getElementById("in-celsius").value = null;
    document.getElementById("in-kelvin").value = null;
    document.getElementById("output").textContent =
      "Temperature can't be less than -459.67 degree fahrenheit";
    output.style.display = "flex";
    clearTimeout(t);
    t = setTimeout(function () {
      output.style.display = "none";
    }, 7000);
  } else {
    const c2 = (5 / 9) * (f - 32);
    const k2 = ((f - 32) * 5) / 9 + 273.15;
    document.getElementById("in-celsius").value = c2;
    document.getElementById("in-kelvin").value = k2;
    output.style.display = "none";
  }
});
