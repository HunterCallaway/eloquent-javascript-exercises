// Flattening

const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const singleArray = multiArray.reduce((a, b) => {
	return a.concat(b);
});

console.log(singleArray);