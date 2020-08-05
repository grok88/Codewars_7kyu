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

//------------------day 4-----------------

// Are they the "same"?

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

function comp(array1, array2){
	if (array1 == null || array2 == null) return false;
	if (array1.length !== array2.length) return false;

	for (let i =0; i<array1.length; i++){
		if(array2.findIndex( current => current === array1[i]*array1[i]) !== -1){
			let index = array2.findIndex( current => current === array1[i]*array1[i])
			 array2.splice(index,1);
		}else {
			return false
		}
	}
	return true;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));

//-----day 5 ----------

//Reverse a Number

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1	

function reverseNumber(n) {
	if(n > 0 ){
		return Number(String(n).split('').reverse().join(''))
	}else if(n < 0){
		return  -Number(String(Math.abs(n)).split('').reverse().join(''))
	}else if(n ===0) {
		return 0
	}
}
console.log(reverseNumber(-123));


// ..---DAY 6--------------------------

// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
	temp1=[];
	temp2=[];
	arr.forEach((el,i,arr) => {
		if(el === arr[0]){
			temp1.push(el);
		}else {
			temp2.push(el);
		}
	})
	return temp1.length > temp2.length ? temp2[0] : temp1[0];
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));


