

function add(num1, num2){
    // let result = num1 + num2; // concat the parameter, no absolute result
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provide a valid number.'
    }
    let result = num1 * num2; // not a number
    return result;
}

let result = add( 3,'four');
// console.log(result);


function fullName(first, last){
    if (typeof first !== 'string') {
        return 'First name should be a String!'
    }
    else if (typeof last !== 'string') {
        return 'Last name should be a String!'
    }
    let name = first + ' ' + last;
    return name;
}
let names = fullName('shanta', 4);
// console.log(names);

function getPrice (product){
    if (typeof product !== 'object') {
        return 'Please provide an object!'
    }
    let price = product.price;
    return price;
}

// let price = getPrice({name:'shampoo', price: 50, model: 'B04'}); // it works
let price = getPrice(20); // please provide an object.
// console.log(price);


function second(numbers){
    // console.log( typeof numbers); // result is object
    // console.log(Array.isArray(numbers)); // true, it means it is an array

    if (Array.isArray(numbers) === false) {
        return 'please provide an array.'
    }
    let secondNumber = numbers[1];
    return secondNumber;
}

// let numbers = second([2,3, 4,5]);
// let numbers = second(3);
console.log(numbers);