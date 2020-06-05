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