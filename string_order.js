//Your order, please
//You are given a string which contains words. Each word has a number inside it. You have to sort the string in ascending order
//using the numbers inside words
'as1 p8os lu5ck bam2 bamb9a';

//I couldn't do it. Havn't learnt stuff, like regexp to actually do it w/o cheating

function order(words) {
	words = words.split(' ');
	let array = [];
	return words;
}

console.log(order('as1 p8os lu5ck bam2 bamb9a'));

//This is a solution

// function order(words){
//     return words.split(' ').sort(function(a,b){
//         return a.match(/\d/) - b.match(/\d/);
//       }).join(' ');
//     }
