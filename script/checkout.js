document.querySelector("form").addEventListener("submit", signUpFun);
var data=JSON.parse(localStorage.getItem("car"));
 
var userData = JSON.parse(localStorage.getItem("userCreds"))||[]
function signUpFun() {
  event.preventDefault();

  var userObj = {
    number: document.querySelector("#number").value,
    month: document.querySelector("#month").value,
    cvv:document.querySelector("#cvv").value,
  };
  
 
  userData.push(userObj);
  
  localStorage.setItem("userCreds",JSON.stringify(userData))

}
