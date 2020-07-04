//-----------------------DAY 1-------------------------

//task1
// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
	if(number <=0) return 0 ;
	let arr =[];
	for(let i = 0; i < number; i++){
		if(i%3 === 0 || i%5 ===0){
				arr.push(i);
		
		}
	}
	return arr.reduce((acc,num) => {
		return acc+num;
	})
}

console.log(solution(10));


//-----------------------DAY 2-------------------------

// Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
	let arrTemp = String(n);
	while(arrTemp.length !== 1){
		arrTemp = arrTemp.split('');
		arrTemp = String(arrTemp.reduce((acc,num) => acc+ Number(num),0));
	}
	return +arrTemp;
}
console.log(digital_root(132189));


//Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
	let count = 0;
	if(String(num).length === 1 ){
		return 0
	}
	let arr = String(num).split('');
	
	while(arr.length !==1){
		count++;
		let res = arr.reduce((acc, num) => {
			return acc * num
		});
		arr = String(res).split('');
	}
	return count;
}
console.log(persistence(25));


// Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


function findOutlier(integers){
	let status = integers.filter(num => num%2 ===0);
	if (status.length === 1) {
		return status[0]
	} else {
		return integers.filter(num => num%2 !==0)[0]
	}
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
