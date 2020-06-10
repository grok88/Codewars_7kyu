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