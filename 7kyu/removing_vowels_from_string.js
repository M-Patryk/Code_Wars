//Remove vowels from the string
//Tutaj nie ma wszystkich polskich, bo nie przechodzily na CW. Brakuje y, I. "I" nie chcialo nie widzieciec czemu przejsc

function disemvowel(str) {
	str = str.replace(/a|e|i|o|u|A|E|i|O|U/g, '');
	return str;
}

console.log(disemvowel('This website is for losers LOL'));