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