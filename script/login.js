document.querySelector("form").addEventListener("submit", loginFun);
var regdUsers = JSON.parse(localStorage.getItem("userCreds"));


function loginFun() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#email").value;
  var enteredPass = document.querySelector("#pass").value;
 

  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i]);
    if (
      regdUsers[i].email == enteredEmail &&
      regdUsers[i].password == enteredPass
    ) {
      alert("login success");

      window.location.href = "index.html";
      break;
    } else {
      alert("login failed wrong UserName Or Password");
    }
  }
}
src="https://kit.fontawesome.com/24c494a6b6.js"
crossorigin="anonymous"