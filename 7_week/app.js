//--------------DAY 1----------

// TASK 1

// Alphabetical Addition
// Your task is to add up letters to one letter.
// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

function addLetters(...letters) {
	if(letters.length === 0){
		return 'z';
	}
	let sum = 0;
	let alf = 'abcdefghijklmnopqrstuvwxyz';
	letters[0].map(item => {
		let index = alf.indexOf(item);
		sum += index + 1;
	});
	let letter;
	if(sum > alf.length){
		console.log(sum);
		while (sum > alf.length){
			sum = sum - alf.length
		}
		console.log(sum);
		// let index = sum - alf.length;
		// console.log(index);
		letter = alf.charAt(sum - 1 );
		// console.log(letter);
	} else {
		letter = alf.charAt(sum - 1 );
		console.log(2);
	}
	return letter;
}

console.log(addLetters(["s", "k", "j", "f", "b", "k"]));

//DAy 2

//TASK1
// Sum of numbers from 0 to N
// > 6 Output: 0+1+2+3+4+5+6 = 21
// Input: > -15 Output: -15<0
// Input: > 0 Output: 0=0


//My stupid solution

var SequenceSum = (function() {
	function SequenceSum() {}
	SequenceSum.showSequence = function(count) {
		let arr = [];
		let str = '';
		if(count < 0){
			return `${count}<0`;
		} else if(count === 0){
			return `${count}=0`
		} else {
			for (let i = 0; i<= count; i++){
				arr.push(i);
				if(i < count){
					str += i + '+';
				} else {
					str += i;
				}
				
			}
			let sum =  arr.reduce((acc,elem) => acc + elem);

			return str + ' ' + '=' + ' ' + sum
		}
	};
	return SequenceSum;
})();
console.log(SequenceSum.showSequence(6));

//-----------DAY 3-----------

// Alternate capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.


function capitalize(s){
	let odd = [ ...s].map((elem,i) => {
		if(i%2 === 0){
			return elem.toUpperCase();
		}
		else return elem;
	}).join('');

	let even = [ ...s].map((elem,i) => {
		if(i%2 !== 0){
			return elem.toUpperCase();
		}
		else return elem
	}).join('');
	
	return [odd, even];
};

console.log(capitalize("abcdef"));