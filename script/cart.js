var cartData = JSON.parse(localStorage.getItem("cart"));
console.log(cartData);
var data=JSON.parse(localStorage.getItem("car"))||[];
console.log(data);
var checkout=[];


var total = cartData.reduce(function (sum, elem, index, arr) {
  return sum +Number(elem.price);
},0);
//console.log(total)


  checkout.push(total)
  
localStorage.setItem("car",JSON.stringify(checkout));

var length = cartData.length;
console.log(length)

document.querySelector("#p").innerText ="you have "+length +"items in cart and total is Rs"+total;

cartData.map(function (elem, index) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image_url;

  var name = document.createElement("p");
  name.textContent = elem.name;

  var price = document.createElement("p");
  price.innerText = elem.price;

  var btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.addEventListener("click", function () {
    removeItem(elem, index);
  });

  box.append(img, name, price, btn);

  document.querySelector("#container").append(box);
});

function removeItem(elem, index) {
  console.log(elem, index);
  cartData.splice(index, 1);
  console.log(cartData);
  localStorage.setItem("cart", JSON.stringify(cartData));
  window.location.reload();
}


src="https://kit.fontawesome.com/24c494a6b6.js"
      crossorigin="anonymous"