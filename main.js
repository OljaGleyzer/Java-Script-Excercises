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