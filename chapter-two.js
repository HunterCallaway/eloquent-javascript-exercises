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