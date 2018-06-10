var list = document.querySelector('.output ul');
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {
var input = cities[i];
// Change all the array items to lowercase-method used toLowerCase()
var lowerCase = input.toLowerCase();
// then the find the first letter to UpperCase -method used toUpperCase() and slice() 
var firstLetter = lowerCase.slice(0,1).toUpperCase();
// replace method is used to replace the first letter from
// text that was changed to lowercase is applied the replace() method
var newWord = lowerCase.replace(lowerCase[0],firstLetter);
var result = newWord;
 
var listItem = document.createElement('li');
listItem.textContent = result;
list.appendChild(listItem);
}
