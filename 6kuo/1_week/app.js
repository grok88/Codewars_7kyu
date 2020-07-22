//-----------------------DAY 1-------------------------

//task1
// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number){
// 	if(number <=0) return 0 ;
// 	let arr =[];
// 	for(let i = 0; i < number; i++){
// 		if(i%3 === 0 || i%5 ===0){
// 				arr.push(i);
		
// 		}
// 	}
// 	return arr.reduce((acc,num) => {
// 		return acc+num;
// 	})
// }

// console.log(solution(10));


//-----------------------DAY 2-------------------------

// Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digital_root(n) {
// 	let arrTemp = String(n);
// 	while(arrTemp.length !== 1){
// 		arrTemp = arrTemp.split('');
// 		arrTemp = String(arrTemp.reduce((acc,num) => acc+ Number(num),0));
// 	}
// 	return +arrTemp;
// }
// console.log(digital_root(132189));


//Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//  persistence(4) === 0 // because 4 is already a one-digit number

// function persistence(num) {
// 	let count = 0;
// 	if(String(num).length === 1 ){
// 		return 0
// 	}
// 	let arr = String(num).split('');
	
// 	while(arr.length !==1){
// 		count++;
// 		let res = arr.reduce((acc, num) => {
// 			return acc * num
// 		});
// 		arr = String(res).split('');
// 	}
// 	return count;
// }
// console.log(persistence(25));


// Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


// function findOutlier(integers){
// 	let status = integers.filter(num => num%2 ===0);
// 	if (status.length === 1) {
// 		return status[0]
// 	} else {
// 		return integers.filter(num => num%2 !==0)[0]
// 	}
// }

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));


//----------------PROMISE--------------
// const func = (param) => {
// 	return Promise.resolve(param);
// }

// console.log(11111111111);
//  const test = async () => {
// 	console.log('start');
// 	let res1 = await func('one');
// 	console.log(res1);
// 	let res2 = await func('two');
// 	console.log(res2);
// 	console.log('end');
// 	return [res1, res2];
// }
// console.log(2222222222222222);
// test().then(console.log);
// console.log(333333333333333333);


//1
//Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
	console.log(text);
	let arr = text.toLowerCase().split('');
	let countArr =[];
	arr.forEach((l,i)=> {
		if(text.toLowerCase().indexOf(l) !== i){
			countArr.push(l);
		}
	});
	return [ ...new Set(countArr)].length;
}


console.log(duplicateCount("Indivisibility"));


// Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function likes(names) {
	// TODO
	switch (names.length){
		case 0 :
			return 'no one likes this'
		case 1 :
			return `${names[0]} likes this`
		case 2:
			return  `${names[0]} and ${names[1]} like this`
		case 3 :
			return  `${names[0]}, ${names[1]} and ${names[2]} like this`
		default :
		return  `${names[0]}, ${names[1]} and ${names.length -2} others like this`
	}
}

console.log(likes(['Jacob', 'Alex']));

// task 3

//Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



//---------------------------- НУ И ТУПОЙ ЖЕ Я -------------------

// function duplicateEncode(word){

// 	let arr = word.toLowerCase().split('');
	
// 	let str = word.toLowerCase();
// 	if(str.indexOf(')') !== -1){
// 		str = str.replace(/[\)]/g, "-");
// 	}

// 	let temp = arr.map((letter, i) => {
// 		if(word.toLowerCase().indexOf(letter) !== i){
		
// 			console.log(letter);
// 			str= str.replace(new RegExp( '[' +  letter + ']', "g" ), ")")
// 			// console.log(str);
// 			return ')';
// 		}
// 		// str= str.replace(new RegExp( letter, "g" ), "(")
		
// 		// console.log(str);
// 		return '('
// 	});
// 	str = str.replace(/[^\)]/g, "(");
// 	console.log(str);
// 	return str;
// }

//------------------- РЕШЕНИЕ ПРОВОСЛАВНОГО ЧЕЛОВЕКА -----------
function duplicateEncode(word){
	return  word
	.toLowerCase()
	.split('')
	.map((letter,i, arr) => {
		return arr.indexOf(letter) === arr.lastIndexOf(letter) ? "(" : ")"
	})
	.join('');
}
console.log(duplicateEncode("))))u))O)cly)a)"));


// ..---------------------NEXT KATA

// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
	let binary = n.toString(2);
	let count = 0;
	binary.split('').forEach(num => {
		if(num=== '1') count++;
	})
	return count;
};

console.log(countBits(1234));

// ..---------------------------------

// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// my stupid
function order(words){
	if(words.length === 0){
		return ''
	}
	let arr = words.split(' ');
	let temp = [];
	let res = [];
	arr.map(elem => {
		console.log(elem.split(''));
		return elem.split('').forEach(l => {
			if(parseInt(l)){
				temp.push(l)
			}
		});
	})
	temp.sort((a,b) =>  a - b)
	temp.forEach(item => {
		arr.forEach(w => {
			if(w.indexOf(item) !== -1){
				console.log(w);
				res.push(w)
			}
		})
	})
	console.log(res);
	console.log(temp);
	return res.join(' ');
	// ...
}

// the BEST
// function order(words){
  
// 	return words.split(' ').sort(function(a, b){
// 		return a.match(/\d/) - b.match(/\d/);
// 	 }).join(' ');
//   }   
 
console.log(order("is2 Thi1s T4est 3a"));
