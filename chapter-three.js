//Minimum

function minFinder (a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

minFinder(88, 33);
minFinder(321, 123);

//Recursion

function isEven(num) {
	if (num === 0) {
		return true;
	} else if (num === 1) {
		return false;
	} else if (num < 0) {
		return isEven(-num);
	} else {
		return isEven(num - 2);
	}
}

console.log(isEven(44));
console.log(isEven(45));
console.log(isEven(-44));
console.log(isEven(-45));

//Bean Counting

function countBs(str) {
	let total = 0;
	for(let i = 0; i < str.length; i ++) {
		let letter = str.charAt(i);
		if (letter === 'B') {
			return total++;
		}
	}
}

countBs('Bees Bees Bees');