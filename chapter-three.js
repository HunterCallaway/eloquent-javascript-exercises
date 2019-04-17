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