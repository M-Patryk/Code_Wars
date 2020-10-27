// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

str = 'foo';
str2 = 'foobar23';
str3 = 'foo099';
str4 = 'fooo99';
str5 = 'foooo09';
str6 = 'fooasdaoo0999';

//Mine, kinda hardcoded solution... :(
//I did not realize that the string can only end with numbers... They can't have nums in the middle!
function incrementString(strng) {
	const re = /(\d)$/;
	if (re.exec(strng)) {
		if (strng.endsWith('0999')) {
			return strng.substring(0, strng.length - 4) + 1000;
		}
		if (strng.endsWith('999')) {
			return strng.substring(0, strng.length - 3) + 1000;
		}
		if (strng.endsWith('099')) {
			return strng.substring(0, strng.length - 3) + 100;
		}
		if (strng.endsWith('99')) {
			return strng.substring(0, strng.length - 2) + 100;
		}
		if (strng.endsWith('09')) {
			return strng.substring(0, strng.length - 2) + 10;
		}
		lastDigit = re.exec(strng)[0];
		lastDigit++;
		return strng.substring(0, strng.length - 1) + lastDigit;
	} else {
		return strng + 1;
	}
}

//How it should be coded
function incrementString2(str) {
	//Define regExp
	let numreg = /[0-9]/;

	//.test returns boolean value
	if (numreg.test(str)) {
		// Jesli znajdzie liczbe to .index podaje, na ktorym indexie znalazlo pierwsza
		let i = str.match(numreg).index;

		//Usuwa wszystko od "i", do konca
		let num = str.slice(i);

		//Dodaje jeden do tego co usunelo, zmienia w stringa i "padStart" wrzuca na koniec "num"
		return str.slice(0, i) + (+num + 1).toString().padStart(num.length);
	} else {
		return str + '1';
	}
}
