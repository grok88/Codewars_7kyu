//---------------------day 1 -----------------

//Fix string case

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


function solve(s){
	let count = 0;
	s.split('').forEach(element => {
		if( element === element.toLowerCase() ){
			count++;
		} else {
			count--;
		}
	});
	return count >=0 ? s.toLowerCase() : s.toUpperCase()
}
console.log(solve("CODe"));



//---------------------day 1 -----------------

//Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case)
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
	//The best
	let test = str.replace(/[_-]\w/g, (str) => {
		console.log(str);
		return str[1].toUpperCase();
	})
	console.log(test);
	// My bad
	str = str.replace(/[_-]/g,'*').split('*')
	console.log(str);
	let res = str.map((elem, i )=> {
		if(i === 0){
			return elem;
		} else {
			return elem.slice(0,1).toUpperCase() + elem.slice(1);
		}
		
	}).join('')
	return res;
}

console.log(toCamelCase("the-stealth_warrior"));


//--------------DAY2 ---------------------

//Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"


function findMissingLetter(array){
	let temp =[];
	let res ;
	array.forEach(el => {
		temp.push(el.charCodeAt());
	})
	temp.forEach((el, i, arr) => {
		if(((el + 1) !== arr[i+1]) && el !=arr[arr.length-1] ){
			res = el+1;
		}
	})
	return String.fromCharCode(res);
}

// console.log('a'.charCodeAt());

console.log(findMissingLetter(['a','b','c','d','f']));

//-----------------Day3------------------

// Gauß needs help! (Sums of a lot of numbers).

// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.
// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.
// Here's, an example:
// f(n=100) // returns 5050 


function f(n){
	let res =0;
	for(let i =1; i <= n; i++){
		res += i;
	}
	return Number.isInteger(n)&& n > 0 ? res : false;
};

console.log(f(100));