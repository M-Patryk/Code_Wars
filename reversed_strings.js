// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'

function reverse(string) {
	return string.split('').reverse().join('');
}


//Different look
// function rev(str) {
// 	let newStr = '';
// 	for (i = str.length - 1; i >= 0; i--) {
// 		newStr += str[i];
// 	}
// 	return newStr;
// }
