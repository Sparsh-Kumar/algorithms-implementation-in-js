/**
 * Used to draw pattern like this,


     *     
    ***    
   *****   
  *******  
 ********* 

 */


let numOfRows = 5;
let numOfSpaces = numOfRows;
let string = '';
for (let i = 0;i < numOfRows;i++) {
  let numOfStars = (2 * i) + 1;
  string += `${' '.repeat(numOfSpaces)}${'*'.repeat(numOfStars)}${' '.repeat(numOfSpaces)}\n`;
  numOfSpaces--;
}

console.log(string);
