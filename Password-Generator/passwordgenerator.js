document.getElementById("generate").addEventListener("click", function () {
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "1234567890";
  let symbol = "!@#$%^&*()_";
  let password = "";
  let actualpassword = "";
  let includeuppercase = document.getElementById("uppercase").checked;
  let includelowercase = document.getElementById("lowercase").checked;
  let includenumbers = document.getElementById("numbers").checked;
  let includesymbols = document.getElementById("symbols").checked;

  includeuppercase ? (password += uppercase) : (password += "");
  includelowercase ? (password += lowercase) : (password += "");
  includenumbers ? (password += numbers) : (password += "");
  includesymbols ? (password += symbol) : (password += "");

  if (!password) return;

  for (let i = 0; i < 8; i++) {
    let randomindex = Math.floor(Math.random() * password.length);
    actualpassword = actualpassword + password[randomindex];
  }
  document.getElementById("output").value = actualpassword;
});
