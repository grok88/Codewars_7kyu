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


//----DAY 4-------------------------


//TASK 1
// Money, Money, Money

// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T' on the interests that were just gained (and only on the interests part).
// Example:
//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00

// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.


function calculateYears(principal, interest, tax, desired) {
	// your code
	if (principal === desired) return 0;
	let initial = principal;
	let year = 0;
	while (desired > initial ){
		let interestYear = initial *  interest; 
		let taxSum = interestYear * tax;
		let amount = interestYear - taxSum;
		initial += amount;
		year++;
	}

	return year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));


// Task2:
//Odd or Even?

// Given a list of numbers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

function oddOrEven(array) {
	if(array.length === 0 ) return 'even'
	
	return [...array].reduce((initial, item) => initial + item) %2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0, 1, 5]));




//----------------------------------------

//TASK1


// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// I have also created other katas. Take a look if you enjoyed this kata!

function dontGiveMeFive(start, end){
	let arr =[];
	for (let i=start; i <=end; i ++){
		if (String(i).includes('5')) continue;
		arr.push(i);
	}
	return arr.length;
}

console.log(dontGiveMeFive(4,17));

// TASk 2

// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

// Как делать ненадо!!!
function declareWinner(fighter1, fighter2, firstAttacker) {
	let fight = true;
	let fight1 = {...fighter1};
	let fight2 =  {...fighter2};

	if (fight1.name === firstAttacker){
		while(fight){
			fight2.health -= fight1.damagePerAttack;
			if (fight2.health <=0){
				fight=false;
				return fight1.name;
			}  else{
			let temp ={...fight1};
			fight1 = {...fight2};
			fight2 = {...temp};
      		}
	} 
}	else {
		while(fight){
			fight1.health -= fight2.damagePerAttack;
			console.log(fight1.health);
			if (fight1.health <=0){
				fight=false;
				return fight2.name;
			} else{
      		let temp ={...fight1};
			fight1 = {...fight2};
			fight2 = {...temp};
      		}
		}
	}
};


//------------------------------------------------
// The last day

// Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
	// console.log(numbers);
	numbers.forEach((num,i) => {
		if(!(numbers.indexOf(num) === i)){
			temp = num;
		}
	});
	return numbers.filter(elem => elem !== temp)[0]
}

//The best
// const stray = nums => nums.reduce((a, b) => a ^ b);


console.log(stray([17, 17, 3, 17, 17, 17, 17]));


//TASk2
// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

function breakChocolate(n,m) {
	return n*m -1;
}
console.log(breakChocolate(5, 5));

//3
// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
	const reg = new RegExp(ending + "$",'g');
	return str.match(reg) ? true : false;
}

//The best
// function solution(str, ending){
// 	return str.endsWith(ending);
//   }

console.log(solution('abcde', 'cde'));
