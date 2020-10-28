// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
//so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones
//-- everytime you press the button it sends you an array of one-letter strings representing directions to walk
//(eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute
//to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes
//(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It

//With switch (not mine)
//isValidWalk(['n','s','n','s','e','w','n','s','n','n'])
function isValidWalk(walk) {
	let ns = 0;
	let ew = 0;
	for (i = 0; i < walk.length; i++) {
		switch (walk[i]) {
            case 'n': ns++;
            break
            case 's': ns--;
            break
            case 'e': ew++;
            break
            case 'w': ew--;
            break
		}
	}
	if ((ns !== 0 || ew !== 0)||(walk.length > 10 || walk.length < 10)) {
		return false;
	}
}

//Original w/o switch
// function isValidWalk(walk){
//     let s = 0
//     let w = 0
//     let e = 0
//     let n = 0
//     for(i = 0; i < walk.length; i++){
//         if(walk[i] == 'w'){
//             w++
//         }
//         else if(walk[i] == 'e'){
//             e++
//         }
//         else if(walk[i] == 'n'){
//             n++
//         }
//         else if(walk[i] == 's'){
//             s++
//         }
//     }
//     console.log(`N: ${n} :: S: ${s} :: W: ${w} :: E: ${e}`)
//     if(n !== s || w !== e){
//         return false
//     }
//     if(walk.length > 10 || walk.length < 10) {
//         return false;
//     } else {
//         return true;
//     }
// }