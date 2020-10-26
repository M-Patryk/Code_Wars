// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *
// JavaScript: returns an Array;
// for example, a tower of 3 floors looks like below

// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

function towerBuilder(nFloors) {
	array = [];
	for (i = 1; i <= nFloors; i++) {
		array.push(' '.repeat(nFloors - i) + '*'.repeat(i + i - 1) + ' '.repeat(nFloors - i));
	}
	return array;
}
