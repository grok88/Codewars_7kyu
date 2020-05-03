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


//-----------------------------------

//1
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// My solution
// var isSquare = function(n){
// 	if (n < 0) return false;
// 	if(n == 0) return true;
// 	return  n %  Math.sqrt(n) === 0 ?  true : false;
// }

var isSquare = function(n){
	return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(2));



//2
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My
function XO(str) {
	str = str.toLowerCase();
	if(!str.includes('x') & !str.includes('o') ) return true;

	let tempO = [...str].filter((item) => item === 'o').length;
	let tempX = [...str].filter((item) => item === 'x').length;

	return tempO === tempX ? true : false;
}

//2
function XO(str) {
	let x = str.match(/x/gi);
	let o = str.match(/o/gi);
	return (x && x.length) === (o && o.length);
}

//3
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}
console.log(XO('ghoooo xxxx'));


//3
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//My
// function DNAStrand(dna){
// 	return [...dna].map((item) => {
// 		switch (item){
// 			case 'A' : 
// 				return 'T';
// 			case 'T' : 
// 				return 'A';
// 			case 'C' : 
// 				return 'G';
// 			case 'G' : 
// 				return 'C';
// 		}
// 		return item;
// 	}).join('');
// }

//2
function DNAStrand(dna){
	const obj = {
		'A' : 'T',
		'T' : 'A',
		'C' : 'G',
		'G' : 'C',
	}

	return  dna.replace(/./g, (elem) => {
		// console.log(obj[elem]);
		return obj[elem];
	});
}

console.log(DNAStrand("ATTGC"));

//----------------------------------------------

//1
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


function isIsogram(str){
	// console.log(!/(\w).*\1/i.test(str));
	const temp = [...str.toLowerCase()];
	return temp.every((item,i)=> temp.indexOf(item) == i);
}

console.log(isIsogram("abjhl"));

//2
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


String.prototype.toJadenCase = function () {
	// my
	return this.split(' ').map((item) => {
		return item.charAt(0).toUpperCase() + item.substr(1);
	}).join(' ');

	// best solition
	// return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());

//3
// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1

//my
function getSum( a,b ){
	const arr = [];

	if(a === b ) return a;

	if (a < b){
		while(a <= b){
			arr.push(a);
			a++;
		}
	} else {
		while(a >= b){
			arr.push(a);
			a--;
		}
	}

	return arr.reduce((current, item) => {
		return current + item;
	});
}

//GetSum = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;

console.log(getSum(1,2));

//-------------------------------------------

// //1
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

function nbYear(p0, percent, aug, p) {
	const percentNew = percent / 100;
	let population = p0;
	let years = 0;

	while (population < p){
		population = population + population * percentNew + aug;
		years++;
	}

	return years;
}

console.log(nbYear(1500, 5, 100, 5000));

//2

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// my solution
// function longest(s1, s2) {
// 	const test = [...s1, ...s2];

// 	return test.filter((item, i) => {
// 		return test.indexOf(item) == i;
// 	}).sort().join('');
// }

// The best
function longest(s1, s2) {
	return [...new Set(s1 + s2)].sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere"));


//3
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
	// Return a new array with the strings filtered out
	return l.filter(item => typeof item === 'number');
}

console.log(filter_list([1,2,'a','b']));