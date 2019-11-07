var gallonsToLiters = function(number1){
return number1*3.78541;
};

var poundsToGrams = function(number1){
  return number1*453.592;
};

var cupsToTablespoons = function(number1){
  return number1*16;
};

var ouncesToTeaspoons = function(number1){
  return number1*6;
};

var number1 = parseInt(prompt("Enter a number:"));


alert(gallonsToLiters(number1));
