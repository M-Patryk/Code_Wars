//Your order, please
//You are given a string which contains words. Each word has a number inside it. You have to sort the string in ascending order
//using the numbers inside words
str = 'as1 p8os lu5ck bam2 bamb9a';

//I couldn't do it.

function order(words){
	if(words == '') return words
	else {
		re = /\d/
		return words.split(' ').sort(function(a,b){
			return a.match(re) - b.match(re)
		})
	}
}