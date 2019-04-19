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

function countChar(str, charac) {
	let total = 0;
	for(let i = 0; i < str.length; i++) {
		if (str[i] == charac) {
			total = total + 1;
		}
	}
	return total;
}

function countBs(str) {
	return countChar(str, 'B');
}

console.log(countBs('Bees Bees Bees'));
console.log(countChar('citrouille', 'i'));