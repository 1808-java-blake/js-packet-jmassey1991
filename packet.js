// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n) {
	if (n <= 1) return 1;

	return fib(n - 1) + fib(n - 2);
}
//console.log(fib(7));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
//console.log(array);
function bubbleSort(numArray) {
	for (let i = 0; i < numArray.length; i++) {
		for (let j = 1; j < numArray.length; j++) {
			if (numArray[j - 1] > numArray[j]) {
				//swap
				let temp = array[j - 1];
				array[j - 1] = array[j];
				array[j] = temp;
			}
		}
	}
	return numArray;
}
// console.log(bubbleSort(array));

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {

	let splitString = someStr.split("");
	let reverseArray = splitString.reverse();
	let joinArray = reverseArray.join("");
	return joinArray;
}

//console.log(reverseStr("justin"));


// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
	if (someNum === 0) { return 1; }
	else { return someNum * factorial(someNum - 1); }
}
//console.log(factorial(5));

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {

	if (someStr === null || undefined) alert("Need non-undefined or null value ");
	else if (offset > length - 1 || offset < 0) alert("Need offset to be less than length and greater than or equal to 0");
	else if (length !== someStr.length) alert("Entered wrong value for length of string");

	else {
		let splitString = someStr.split("");
		let subString = [];
		for (let i = offset, j = 0; i < length; i++ , j++) {
			subString[j] = splitString[i];
		}
		return subString.join("");
	}
}
//console.log(substring('justin', 6, 3));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum) {
	return !(someNum & 1);
}
//console.log(isEven(101));

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr) {
	let nospaces = someStr.split(' ').join('');
	let arrayStr = nospaces.split('');
	let reverseArrayStr = arrayStr.reverse();
	if (nospaces === reverseArrayStr.join('')) return true;
	else return false;
	return reverseArrayStr;
}
//console.log(isPalindrome('nurses run'));

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character) {
	switch (shape) {
		case 'Square':
			for (let i = 0; i < height; i++) {
				let stringrow = '';
				for (let j = 0; j < height; j++)stringrow += character;
				console.log(stringrow);
			}
			break;
		case 'Triangle':
			for (let i = 0; i < height; i++) {
				let stringrow = '';
				for (let j = 0; j <= i; j++)stringrow += character;
				console.log(stringrow);
			}
			break;
		case 'Diamond':
			let mid = height / 2 - 1;
			let count = 1;

			for (let i = 0; i < height; i++) {
				let stringrow = '';

				for (let j = 0; j < (height - count) / 2; j++)stringrow += ' ';
				for (let j = 0; j < count; j++)stringrow += character;
				for (let j = 0; j < (height - count) / 2; j++)stringrow += ' ';

				if (i < mid) count += 2;
				else if (i > mid) count = count - 2;
				console.log(stringrow);
			}
			break;
		default:
			return;
	}
}
// printShape('Diamond', 40, 'O');

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
let car = {
	name: "Car",
	id: 1
}

function traverseObject(someObj) {
	let fields = Object.keys(someObj);
	for (let i = 0; i < fields.length; i++) {
		console.log(`Object Field = "${fields[i]}" with a value of "${someObj[fields[i]]}"`);
	}
}
//traverseObject(car);


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
let arr = [0, 1, 2, 3, 4, 5, 6, 7]
function deleteElement(someArr) {
	console.log(someArr.length);
	delete someArr[2];
	console.log(someArr.length);
}
// deleteElement(arr);
// console.log(arr);


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr) {
	console.log(someArr.length);
	someArr.splice(2, 1);
	console.log(someArr.length);
}
// spliceElement(arr);
// console.log(arr);

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
let person = new Person('john', 23);
function Person(name, age) {
	this.name = name;
	this.age = age;
}
// console.log(person);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);

function getPerson(name, age){
	return {name: name, age: age}
}
// let john = getPerson('John', 30);
// console.log(john);




