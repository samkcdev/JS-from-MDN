var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

// number 1

var products = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99']
console.log(products);          



for (var i = 0; i < products.length; i++) { // number 2
  // number 3
  var splitted= products[i].toString().split(':');
  var productName = splitted[0];
  var productPrice = Number(splitted[1]);
//  console.log(splitted);
 console.log(productName);
//  console.log(productPrice);
 
  // number 4
  total += productPrice;
  console.log(total)
  
  // number 5
  itemText = productName + " : " + " $ " + productPrice;
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
