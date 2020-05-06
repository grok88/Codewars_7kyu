//DAY 1------------------------------

// TASK 1 - Printer Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// #Examples:
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

//my
function printerError(s) {
	let temp = [];
	s.replace(/[a-m]/g,(x) => temp.push(x));
	return `${s.length - temp.length}/${s.length}`;
}

//The best
// function printerError(s) {
// 	return `${s.match(/[^a-m]/g).length}/${s.length}`;
// }

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));



// TASK 2 - Find the next perfect square!
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect


function findNextSquare(sq) {
	return !Number.isInteger(Math.sqrt(sq)) ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

console.log(findNextSquare(121));



//----------------------------DAY 2

//1
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// eg:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN (pin) {
	//return true or false
	const reg = /^(\d{4}|\d{6})$/g;
	return reg.test(pin);
}

console.log(validatePIN("1222221"));


//2

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Note for F#: The input will be of (int list list) which is a List<List>
// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
	return data.map((item)=>{
		return (item[0] < 55 || item[1]) <= 7 ?  "Open" : "Senior";
	})
}

console.log(openOrSenior([[90, 7], [54, 9], [60, 12], [21, 21], [90, 8], [1, 1], [55, 10], [0, 0], [75, 11], [90, 9]]));

