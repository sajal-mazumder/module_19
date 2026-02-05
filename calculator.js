


function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function calculator (a, b, operation){
    if (operation === 'add') {
        let result = add(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        let result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        let result = multiply(a, b);
        return result;
    }
    else if (operation === 'divide') {
        let result = divide(a, b);
        return result;
    }
    else{
        return " only 'add', 'subtract', 'multiply' and 'divide' is allowed! " ;
    }
}

let result = calculator(4, 6, 'nan');
console.log( result);