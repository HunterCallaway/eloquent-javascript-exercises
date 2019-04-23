//The Sum of a Range

function range(start, end) {
	let numArray = [];
	for(let i = start; i <= end; i++) {
		numArray.push(i);
	}
	return numArray;
}

range(5, 10);

function numberSummer(start, end) {
	let thisArray = [];
	for (let i = start; i <= end; i++) {
		thisArray.push(i);
	}
	const adder = (a, b) => a + b;
	const sum = thisArray.reduce(adder);
	return sum;
}

console.log(numberSummer(3, 7));
console.log(numberSummer(1, 10));