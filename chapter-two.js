//Looping a Triangle

/*
First attempt
The first printed line is two hash tags long.


let hashTag = '#';

for(let i = 0; i < 7; i++) {
	hashTag += '#';
	console.log(hashTag);
}

 */

/*
Second Attempt
 */

for (let hashTag = "#"; hashTag.length <= 7; hashTag += "#")
	console.log(hashTag);

//FizzBuzz

function fizzBuzz() {
	for(let num = 1; num < 101; num++) {
		if(num % 3 === 0 && num % 5 !== 0) {
			console.log('Fizz');
		} else if(num % 5 === 0 && num % 3 !== 0) {
			console.log('Buzz');
		} else if (num % 15 === 0) {
			console.log('FizzBuzz');
		} else {
			console.log(num);
		}
	}
}

fizzBuzz();

//Chess Board

let size = 8;
let result = '';

for (let i = 0; i < size; i++) {
	for (let j = 0; j < size; j++) {
		if ((i + j) % 2 === 0) {
			result = result + ' ';
		} else {
			result = result + '#';
		}
	}
	result = result + '\n';
}

console.log(result);