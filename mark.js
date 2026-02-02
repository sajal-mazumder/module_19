

// let disha = 56;
// let sohan = 67;

// if (disha > sohan) {
//     console.log('disha will eat strawberry');
// }
// else{
//     console.log('sohan will eat strawberry');
// }


// using function : comparison between 2

// function max (num1, num2){
//     if (num1 > num2) {
//         return 'disha will get strawberry';
//     }
//     else{
//         return 'sohan will get strawberry';
//     }
// }
 
// let max1 = max(45, 56);  // sohan
// let max2 = max(87, 78); // disha
// let finalMax = max(max1, max2); // disha
// console.log(finalMax);
// // console.log(max1 , max2);



// comparison among 3

// let shanta = 47;
// let borsa = 45;
// let sajal = 56;

// if (shanta > borsa && shanta > sajal) {
//     console.log('shanta will get gift.')
// }else if (borsa> shanta && borsa > sajal) {
//     console.log('borsa will get the gift')
// }
// else{
//     console.log('sajal will get the gift')
// }

// using function

function getMax(n1, n2, n3){
    if (n1> n2 && n1 > n3) {
        return 'shanta will get gift.'
    }
    else if (n2 > n1 && n2 > n3) {
        return 'borsa will get the gift.'
    }
    else{
        return 'sajal will get the gift'
    }
}

 let result = getMax(67,78, 54);
 console.log(result);