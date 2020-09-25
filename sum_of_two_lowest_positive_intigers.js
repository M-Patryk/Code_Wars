// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//  No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumOfLowest(numbers) {
	for (value of numbers) {
		if (value < 0 || numbers.length < 4 || value % 1 !== 0) {
			return null;
		}
	}
	let total = 0;
	numbers = numbers.sort(function(a, b) {
		return a - b;
	});
	return numbers[0] + numbers[1];
}

console.log(sumOfLowest([ 1, 21, 13, 14 ]));

//Oryginalnie mialem tak, jak na dole

// function sumOfLowest(numbers) {
//     for(i =0; i < numbers.length; i++){
//         if(numbers[i] < 0 || numbers.length < 4 || numbers[i] % 1 !== 0){
//             return null
//         }
//     }
// 	let total = 0;
// 	numbers = numbers.sort(function(a,b){
//         return a-b
//     })
//     for(i = 0; i < 2; i++){
//         total += numbers[i]
//     }
// 	return total;
// }
