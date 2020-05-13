// Day 1

// TASK 1
// Sum of the first nth term of Series

// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

//my
function SeriesSum(n){
	if(n === 0 || n === 1) return n.toFixed(2);
	let num  = 4;
	let value = 1;
	for (let i = 1; i < n; i++){
		value += 1/num;
		console.log(value);
		num +=3;
	}
	return value.toFixed(2);
}

//kata
// function SeriesSum(n) {
// 	var sum = 0;
// 	for(var i = 0; i < n; i++) {
// 	  sum += 1 / (3 * i + 1);
// 	}
// 	return sum.toFixed(2);
// }

console.log(SeriesSum(5));

//TASk 2
// Remove the minimum

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

function removeSmallest(numbers) {
	// throw "TODO: removeSmallest";
	let min = Math.min(...numbers);
	let newArr = [...numbers];
	newArr.splice(newArr.indexOf(min),1);
	return newArr;
}	
console.log(removeSmallest([1, 2, 3, 4, 5,1]));


//------DAY 3-------------------

//TASK 1

//Find the odd int
//Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
	return  arr.filter( num => {
		return arr.filter(item => item === num).length %2 === 1
	})[0];
	
}


console.log( findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

//TASK 2
//Reverse words


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
	return str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));