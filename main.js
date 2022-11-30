console.log("Starting javascript..")
//1st excercise
let myName = "Olja"
console.log(myName);
//2nd excercise
let age = 36

console.log(age);
//3rd excercise
let juliaAge = 32
let ageDiff = 36 - 32
console.log(ageDiff);
//4th excercise
//Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. Save your JavaScript file and reload the page. Make sure you see the correct message. Try changing your age in the JavaScript file to make sure the other message prints when it should.
// let myAge = 36
let x = 21
if (x < age) {
    console.log("you are older than 21")

} else { console.log("you are not older than 21") }

//5th
//Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", Julia is younger than you", or "You have the same age as Julia".
if (age < juliaAge) {
    console.log("Julia is older than you")

} else if (age > juliaAge) {
    console.log("Julia is younger than you")

} else { console.log("You have the same age as Julia") }

//Sorting an Array
//6th excercise 
//Create an array with all the names of your class (including mentors). Sort the array alphabetically. Then print the first element of the array in the console. On the next line, print the last element of the array in the console. On the next line, print all the elements of the array in the console (use a "for" loop). Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.
const students = ["Can", "Juli", "Ercan", "Monique", "Olja", "Roxanne", "Santiago"];
console.log(students.sort());
console.log(students[0]);
console.log(students[6]);
for (let i = 0; i > students.length; i++) {
    const element = students(i);

} console.log(students)

//Looping over an array
//7th excercise
//Create an array with all the ages of the students in your class. Iterate the array using a while loop, and then print every age in the console. Add a conditional inside the while loop to only print even numbers. Write again a loop but use a "for" loop instead of a "while" loop. Save your changes to your JavaScript file. Reload the HTML page in your browser. You should see every age printed, then only the even numbers printed. If not, investigate and fix it.
const stdage = [35, 24, 42, 35, 36, 33, 28]
let i = 0
while (i < stdage.length) {
    console.log(stdage[i]); i++
}

const even = stdage.filter(Number => { return Number % 2 === 0; })
//console.log(even);



for (let j = 0; j < even.length; j++) {
    const evenloop = even[j];

} console.log(even);
// Finctions that use Arrays
// Excercise 8
//Write a function that receives an array as a parameter and prints the lowest number in the array to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the lowest number in the array printed in the console. If not, investigate and fix it.


let arrNum = [3,4,5,6]
let ageMax = 100
// 1st solution
// let lowestNum = Math.min(...arrNum);
// console.log(`The lowest number is: ${lowestNum}`); 

//Solution 2

function eight(){
    
for (let index = 0; index < arrNum.length; index++) {
    if (arrNum[index]< ageMax) {ageMax = arrNum[index]}   
}
}
eight();
console.log(ageMax);

 
//Excercise 9
// Write a function that receives an array as a parameter and prints the biggest number in the array to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the biggest number in the array printed in the console. If not, investigate and fix it.

let arrNum2 = [4,5,6,9]
let ageMin = 1
//Solution 1
//let highestNum = Math.max(...arrNum);
//console.log(`The highest number is: ${highestNum}`); 

// function highestNumber(arrNum) {
 
//  if (highestNum); {console.log(`Number ${highestNum} `);
//  }
 
// }
// highestNumber(arrNum2);

function nine(){
    
    for (let i = 0; i <= arrNum2.length; i++) {
        if (arrNum2[i]> ageMin) {ageMin = arrNum2[i]}   
    }
    }
    nine();
    console.log(ageMin);

//Excercise 10
// Write a function that receives two parameters, an array, and an index. The function will print the value of the element at the given position (one-based) to the console. For example, given the following array and index, the function will print '6'.
// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; Save the changes to your JavaScript file and check your browser console. You should see the number at the correct index printed in the console. If not, investigate and fix it
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let indexNum = 2


function index(array){
    console.log(array[indexNum]);
}
index(array);

// Excercise 11
// Write a function that receives an array and only prints the values that repeat.

// For example, given the following array and index, the function will print '6,23,33,100'.

// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

// Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console. If not, investigate and fix it.
 
const numArray = [1,2,3,4]

for (let counterA = 0; counterA < numArray.length; counterA++) {
    console.log("first loop", counterA);
    

    for (let counterB = 0; counterB < numArray.length; counterB++) {
        console.log("second loop", counterB)
        console.log(numArray[counterB]) 
        
    }
}

//

// Excercise 12
// Write a simple JavaScript function to join all elements of the following array into a string.

// myColor = ["Red", "Green", "White", "Black"];

// Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console:

// "Red", "Green", "White", "Black"

// If not, investigate and fix it.

 let myColor = ["Red", "Green", "White", "Black"];
let text = myColor.join();


console.log(text);

//Java Script String
// Excercise 13
// Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.

function simpleString (){
    let x = "32443";
    console.log("this is a string of "+ x)
}
simpleString();

//Excercise 14
//Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.

// Loop through the string and convert every char into number
let word = "webmaster";
let singlechar = word.split("");
console.log(singlechar);

let sortet = singlechar.sort();
console.log(sortet);
let stringagain= sortet.toString();
console.log(stringagain);
let final= stringagain.replaceAll(",", "");
console.log(final);

//Excercise 15
//Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia". Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.



//1st try
//let sentence = "prince of persia";
//let splitwords= sentence.split("");
// let uppercase = splitwords.toUpperCase(); // returns every letter capital
// console.log(uppercase);

// To do:
// split the sentence into an array
// loop trough the array of three words
// each time use toUpperCase() method on the forst character
// join the words 

function capitalizeFirstLetters(phrase) {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  console.log (capitalizeFirstLetters("prince of persia"));
  
  //Excercise 16
 //Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development". Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.
 //
 
  
  