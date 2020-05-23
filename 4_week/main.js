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
