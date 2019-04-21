//The Sum of a Range

function range(start, end) {
	let numArray = [];
	for(let i = start; i <= end; i++) {
		numArray.push(i);
	}
	return numArray;
}

range(5, 10);