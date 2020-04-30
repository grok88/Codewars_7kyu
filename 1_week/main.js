// "" + 1 + 0  = '10'
console.log("" + 1 + 0 );
// "" - 1 + 0 = -1
console.log("" - 1 + 0);

// true + false = 1
console.log(true + false);

// 6 / "3" = 2
console.log(6 / "3");
// "2" * "3" = 6
console.log("2" * "3");
// 4 + 5 + "px" = '9px'
console.log(4 + 5 + "px");

// "$" + 4 + 5 = '$45'
console.log("$" + 4 + 5);

// "4" - 2 =2 
console.log("4" - 2 );
// "4px" - 2 = NaN
console.log("4px" - 2);
// 7 / 0 = infinity
console.log(7 / 0);

// "  -9  " + 5 = ' -9 5'
console.log( "  -9  " + 5);
// "  -9  " - 5 = -14
console.log( "  -9  " - 5);

// null + 1 = 1
console.log(null + 1);
// undefined + 1 = NaN
console.log(undefined + 1);
// " \t \n" - 2 = -2
console.log(" \t \n" - 2);

//----------------------
console.log([...'test']);
//Codewars

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
	var vowelsCount = 0;
	
	// enter your majic here
	//1
	// vowelsCount = [...str.toLowerCase()].filter(letter => {
	// 	if(letter === 'i' || letter === 'e' || letter === 'a' || letter === 'o' || letter === 'u') return letter;
	// }).length;

	//2
	// vowelsCount = str.replace(/[^aeiou]/g,'').length;

	//3
	vowelsCount = str.toLowerCase().split('').filter(el => 'aeiou'.includes(el)).length;
	return vowelsCount;
}


console.log(getCount('QwEvigvoboqosdklkbrevkxclvnjzirh ouei'));

//--------------------------------- 2 days

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// ..1
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
	const newArr = [...s].map((el, index) => {
		let temp = el.toLowerCase().repeat(index + 1);
		
		temp = temp[0].toUpperCase() + temp.substr(1);
		return temp;
	});
	return newArr.join('-');
}


console.log(accum("abcd"));

// // 2
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s){
	if( s.length % 2 == 0 ){
		const index = Math.floor(s.length / 2);
		return s.substr(index - 1,2);
	} else {
		console.log('odd');
		const index = Math.floor(s.length / 2);
		return s.substr(index,1);
	}
  //Code goes here!
}

console.log(getMiddle("middle"));

//----------------------------------------------------

//1
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
	const max = Math.max(...numbers.split(' '));
	const min = Math.min(...numbers.split(' '));
	return `${max} ${min}`
}

console.log(highAndLow("1 2 3 4 5"));

// //2
// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
	//may the code be with you
	return parseInt([...String(num)].map((item) => item * item).join(''));
}
console.log(squareDigits(9119));

//3
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
	return Math.min(...s.split(' ').map((item) => {
		return item.length;
	}));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//4
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

//Делал тупой как я
function disemvowel(str) {
	return [...str].filter((item)=> {
		return !'euioa'.includes(item.toLowerCase())
	}).join('');
}

// Код увОжаемого, белого человека 
function disemvowel(str) {
	return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"));