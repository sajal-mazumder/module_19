
// find the larger number in an array

let arr = [34, 4, 33, 32, 13, 25, 46, 68, 54, 47, 63];

// function max(numbers){
//     // console.log(numbers); // access the array
//     let max = numbers[0];
//     for(number of numbers){
//         // console.log(number); // access the elements separately
//         if (number > max ) {
//             max = number;
//         }
//     }
//     return max;
// }
// let result = max(arr);
// console.log('result of the array max is : ', result)

function getMax(numbers){
    let maxNumber = numbers[0];
    for(let number of numbers){
        // console.log(maxNumber); // access all elements
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    return maxNumber;
}

let res = getMax(arr);
console.log('result of the array is the larger number : ', res)


// finding min number

function getMin(numbers){
    let minNumber = numbers[0];
    for(let number of numbers){
        if (number < minNumber) {
            minNumber = number;
        }
    }
    return minNumber;
}

let minResult = getMin(arr);
console.log('the result of min number in the array is: ', minResult);