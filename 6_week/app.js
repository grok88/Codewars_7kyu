//----DAY 1

//Task1
// Most digits
// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
	const  maxLength = String(Math.max(...array)).length;
	const filtered = array.filter(elem => {
		return String(elem).length === maxLength;
	});
	return filtered[0];
}
console.log(findLongest([9000, 8, 800]) );

// Task 2
//Count the divisors of a number

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples
// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30

function getDivisorsCnt(n){
	let count = 0;
	for (let i = 1; i <= n; i++){
		if(n%i === 0){
			count++;
		}
	}
	return count;
}

console.log(getDivisorsCnt(10));


//------------------------DAY 2-----------------

//TASK1
// Deodorant Evaporator

// This program tests the life of an evaporator containing a gas.
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
// The program reports the nth day (as an integer) on which the evaporator will be out of use.
// Note : Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

function evaporator(content, evap_per_day, threshold){ 
	let all = 1;
	let days = 0;
	while(all >= threshold/100){
		all -= all*(evap_per_day/100);
		days++;
	}
	return days;
}

console.log(evaporator(10,10,10));

// TASk2
// Parts of a list

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

function partlist(arr) {
	let editArr = [];
	
	arr.forEach((elem,i,array) => {
		let temp = [];

		if(i === array.length -1) return editArr;
		let first = array.slice(0,i+1).join(' ');
		let second = array.slice(i+1).join(' ')

		temp.push(first);
		temp.push(second);
	
		editArr.push(temp);
	
	});
	// your code
	return editArr;
}


console.log(partlist(["I", "wish", "I", "hadn't", "come"]));



////--Day 3

// Sorted? yes? no? how?

// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
	const sortAscending = [...array].sort((a,b) => a - b );
	const sortDescending = [...array].sort((a,b) => b - a );

	if (sortAscending.every((elem,i) => elem === array[i])){
		return "yes, ascending";
	} else if (sortDescending.every((elem,i) => elem === array[i])){
		return "yes, descending";
	} else {
		return "no" ;
	}
}

console.log(isSortedAndHow([ 2, 0, -1]));

//TASK2

//Round to the next multiple of 5.

// Given an integer as input, can you round it to the next (meaning, "higher") 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

function roundToNext5(n){
	while(n % 5 !== 0){
			n++;
	}
	return n;
}

console.log(roundToNext5(-3));


//-------------DAY 4----------------

//Task1

//Find the capitals
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	let arr = [];
	word.split('').forEach((elem, i) => {
		if(/[A-Z]/.test(elem)){
			arr.push(i) ;
		}
	});
	return arr;
}
console.log(capitals('CodEWaRs'));


//Task2
// Palindrome chain length

// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.
// Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
// If the input number is already a palindrome, the number of steps is 0.
// Input will always be a positive integer.
// For example, start with 87:
// 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
// 4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4


var palindromeChainLength = function(n) {
	const temp = String(n);
	let reverse = temp.split('').reverse().join('');
	console.log(temp);
	if ( reverse === String(n) ){
		return 0;
	}

	return n;
};

console.log(palindromeChainLength(87));