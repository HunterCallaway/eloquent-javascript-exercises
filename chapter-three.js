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
	if (num % 2 === 0) {
		return true;
	} else if (num % 2 === 1) {
		return false;
	} else {
		return isEven(num -2);
	}
}

isEven(44);