// Given two arrays a and b write a function comp(a, b) that checks whether the two arrays
//have the "same" elements, with the same multiplicities. "Same" means, here,
//that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144,
//361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If we change the first number to something else, comp may not return true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
function comp(array1, array2){
    if((array1 == null || array2 == null) || array1.length !== array2.length){
        return false
    }
    const a1 = array1.map(num =>{
        return num * num})
    
    if(a1.sort().toString() !== array2.sort().toString()){
        return false
    }
    console.log(a1, array2)
    return true
} 




























// function comp(array1, array2){
//     nums3 = array1
//     if((array1 == null || array2 == null) || array1.length !== array2.length){
//         return false
//     }
//     function multiplication(array1){
//         nums = []
//         array1.forEach(element => {
//             return nums.push(element * element) 
//         });  
//     } 
//     multiplication(array1);
//     nums2 = array2
//     for(let number of nums){
//         if(nums2.includes(number)){
//         } else{
//             return false}
//     }
//     return true
// }