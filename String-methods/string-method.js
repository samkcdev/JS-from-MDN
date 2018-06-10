var list = document.querySelector('.output ul');
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {
var input = cities[i];
var lowerCase = input.toLowerCase();
var firstLetter = lowerCase.slice(0,1).toUpperCase();
var newWord = lowerCase.replace(lowerCase[0],firstLetter);
  var result = newWord;
  console.log(result);
var listItem = document.createElement('li');
  listItem.textContent = result;
 list.appendChild(listItem);
}
