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