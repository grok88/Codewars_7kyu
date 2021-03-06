//----------------------day1

// task1
// Largest 5 digit number in a series

// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits){
	let temp = digits.split('');
	const max = Math.max(...temp);

	let temp5 = []
	temp.map((num, i) => {
		if(Number(num) === max) {
			temp5.push(temp.splice(i,5).join(''))
			return num;	
		}
	});
	return Math.max(...temp5.map(elem => Number(elem)));
}

console.log(solution('7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450'));


//TASK2
//Sum of all the multiples of 3 or 5

// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
	let arr =[];
	for(let i=1; i <=n; i++){
		if(i%3 === 0 || i%5 ===0){
			arr.push(i)
		}
	}
	return arr.reduce((acc, elem) => acc+elem)
}

console.log(findSum(5));

//-------- DAY 2 ----------------

//Maximum Length Difference
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
// Find max(abs(length(x) − length(y)))
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// #Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

function mxdiflg(a1, a2) {
	if(a1.length === 0 || a2.length === 0){
		return -1;
	}
	
	let min1 = Math.min(...a1.map(elem => elem.length));
	let max1 = Math.max(...a1.map(elem => elem.length));
	
	
	let min2 = Math.min(...a2.map(elem => elem.length));
	let max2 = Math.max(...a2.map(elem => elem.length));

	let t1 = Math.abs(max1 - min2);
	let t2 = Math.abs(max2 - min1);
	return Math.max(t1,t2)
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1, s2));

//TASK2
// Make a function that does arithmetic!

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".
// A few examples:

// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5


function arithmetic(a, b, operator){
	switch(operator){
		case "add" :
			return a + b;
		case "subtract" : 
			return a - b;
		case "multiply" : 
			return a * b;
		case "divide" : 
			return a / b;
	}
	//your code here!
}

console.log(arithmetic(1, 2, "add"));

// ----day 3
// Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argum
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
	return array.sort((a,b) => a.length - b.length);
};

console.log(sortByLength(["Beg", "Life", "I", "To"]));

//TASk 2
// The Coupon Code
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the exp
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){


	// if (enteredCode !== correctCode) return false;
	// let currentDateMs = new Date(currentDate).getTime();
	// let expirationDateMs = new Date(expirationDate).getTime();
	//   let oneDayMS = 24*60*60*1000;
	// if (currentDateMs === expirationDateMs) return true;
	//   if((currentDateMs + oneDayMS) >= expirationDateMs) return false;
	//   return true;

	return ((enteredCode === correctCode) && Date.parse(expirationDate) >= Date.parse(currentDate)) ? true: false
}
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));



// -----Day 4---------------

//Task1
// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

var gimme = function (inputArray) {
		let middle = [...inputArray].sort((a,b) => a - b)[1];
	return inputArray.indexOf(middle);
};

console.log(gimme([2, 3, 1]));


//Task 2

// Remove duplicate words
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
	let arr = s.split(' ');
	
	return arr.filter((el, i) => {
		return  arr.indexOf(el) === i
	}).join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));


// DAY 5
// Moves in squared strings (I)

// This kata is the first of a sequence of four about "Squared Strings".
// You are given a string of n lines, each substring being n characters long: For example:
// s = "abcd\nefgh\nijkl\nmnop"
// We will study some transformations of this square of strings.
// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:
// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 
// #Task:

// Write these two functions
// high-order function oper(fct, s) where
// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
// #Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"


function vertMirror(strng) {
	let arr = strng.split('\n');
	return arr.map(elem => elem.split('').reverse().join('')).join('\n');
}

function horMirror(strng) {
	let arr = strng.split('\n');
	let newArr = [];
	arr.map(elem => newArr.unshift(elem));
	return newArr.join('\n');
}

function oper(fct, s) {
	return fct(s);
}

// console.log(vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
// console.log(horMirror('lVHt\nJVhv\nCSbg\nyeCt'));

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));


//TASk 2
// Form The Minimum

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications
// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

function minValue(values){
	let set = new Set(values);
	let val = [];
	for(let value of set){
		val.push(value)
	}
	return Number(val.sort((a,b) => a - b).join(''));
	//your code here
}

console.log(minValue([5, 7, 9, 5, 7]));

//---------------- Day ....

//TAsk 1 
//Even or Odd
// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
	return number%2 === 0 ? 'Even' : "Odd"
}

console.log(even_or_odd(0));

//TASK2
//Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
	let sort = arr.filter(num => num > 0)
	return arr.length === 0 || sort.length === 0 ? 0 : sort.reduce((acc, num) => acc + num);
}

console.log(positiveSum([1,-2,3,4,5]));

// -----------------------DAY             ----------

//TASK 1
// Rotate for a Max
// Let us begin with an example:
// Take a number: 56789. Rotate left, you get 67895.
// Keep the first digit in place and rotate left the other digits: 68957.
// Keep the first two digits in place and rotate the other ones: 68579.
// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
// You have the following sequence of numbers:
// 56789 -> 67895 -> 68957 -> 68579 -> 68597
// and you must return the greatest: 68957.

function maxRot(n) {
	let str = String(n)
	let arr = [str]
	//1
	for (let i = 0; i < str.length-1; i++){
		str = str.slice(0,i) + str.slice(i+1) + str[i];
		arr.push(str);
	}
	return Math.max(...arr);
}

console.log(maxRot(56789));

// 67895 -> |7895  -> 5987



// 67895 65987       |8957   5


// --DAY =---------------------
// Opposite number
// Very simple, given a number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
	//your code here
	return -1 * number;

}

console.log(opposite(1));

//task 2

// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a strin
// g. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
// 	let test = str.split('')
// 	test.splice(0,1);
// 	test.splice(test.length -1 ,);
	
//    return test.join('');
// };

const removeChar = str => str.slice(1,-1)
console.log(removeChar('eloquent'));

// ---- DAY BY DAY


// Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n){
	let arr =[];
	if (n === 0) {
		return 1;
	}else if ( n <= 0|| n > 12) {
		throw new Error('Низзя');
	} else {
		for (let i = 1; i <=n ; i++){
			arr.push(i);
		};
		return arr.reduce((acc, elem)=> acc*elem);
	}
}

console.log(factorial(3));

//TAsk2

// Simple Fun #176: Reverse Letter
// Given a string str, reverse it omitting all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {	

	// console.log(str.replace(/[^a-z]/gi,''));
	console.log(str.match(/[a-z]/g));
	
	return str.split('').filter((elem) => /[a-z]/.test(elem)).reverse().join('');
}

console.log(reverseLetter("ultr53o?n"));




// ---DAY BY DAY----------------

//Task 1
//Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:
//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

function sumDigits(number) {

	return String(Math.abs(number)).split('').reduce((acc, num) => {
		console.log(num);
		return acc + +num;
	}, 0);
}

console.log(sumDigits(-32));

//Task2
// Maximum Multiple
// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.
// Notes
// The parameters (divisor, bound) passed to the function are only positve values .
// It's guaranteed that a divisor is Found .
// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .


//My
function maxMultiple(divisor, bound){
	let arr =[]
	for (let i =0; i <= bound;i++){
		if(i%divisor === 0){
			arr.push(i);
		}
	}
	return Math.max(...arr);
}
//The best 
//return bound-bound%divisor

console.log(maxMultiple(10,50));


//----------------DAY BY DAY _---------------

//TASK1
//Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.
// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.
// For example:
// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

function inAscOrder(arr) {
	let temp = [...arr];
	temp.sort((a,b) => a - b);
	return temp.every((num, i) => num === arr[i]);
}

console.log(inAscOrder([19,1, 2, 4, 7]));



//----------------DAY BY DAY _---------------

// Triangular Treasure
// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:
//   triangular(0)==0,
//   triangular(2)==3,
//   triangular(3)==6,
//   triangular(-10)==0

// Return the nth triangular number
function triangular( n ) {
	let sum = 0;
	for(let i =0; i <=n; i++){
		sum += i;
	}
	
	return n < 0 ? 0 : sum
}
console.log(triangular(2));

//----------------DAY BY DAY _---------------
// //Two Oldest Ages
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items.
// For example:
// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
	let firstMax = Math.max(...ages);
	ages.splice(ages.indexOf(firstMax),1);
	let secondMax = Math.max(...ages);
	return [secondMax, firstMax];
}

console.log(twoOldestAges( [1, 2, 10, 8] ));


//Flatten and sort an array
// Challenge:
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


function flattenAndSort(array) {
	// Good luck, brave code warrior!
	const arr = array.reduce((acc,arr) => {
		return [ ...acc, ...arr];
	}, []);
	console.log(arr);
	return arr.sort((a,b) => a - b );
}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));


//----------------DAY BY DAY _---------------

// Sum of Triangular Numbers
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {
	let sum = 0;
	let res = 0;
	if(n <=0) return 0;
	for (let i = 0; i <=n; i++ ){
		sum += i;
		res += sum;
	}
	return res;
}

console.log(sumTriangularNumbers(6));
