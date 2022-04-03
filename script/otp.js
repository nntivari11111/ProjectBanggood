document.querySelector("form").addEventListener("submit",Fun);


function Fun() {
  event.preventDefault();
var otp=document.querySelector("#otp").value;
 if(otp==1234)
 {
    alert("payment successful you purchage this items")
    window.location.href = "index.html";
 }
 
 else{
    alert("payment failed invalid otp")
 } 
  
 

}