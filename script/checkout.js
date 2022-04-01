document.querySelector("form").addEventListener("submit", signUpFun);
var data=JSON.parse(localStorage.getItem("car"));
document.querySelector("#h1").append(data);
var userData = JSON.parse(localStorage.getItem("usrCreds"))||[]
function signUpFun() {
  event.preventDefault();

  var userObj = {
    number: document.querySelector("#number").value,
    month: document.querySelector("#month").value,
    cvv:document.querySelector("#cvv").value,
  };
  
 
  userData.push(userObj);
  
  localStorage.setItem("usrCreds",JSON.stringify(userData))

}
