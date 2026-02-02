

// discount in any cart

// function discountTicket(tickets){
//     if (tickets <= 100) {
//         let total = tickets * 100;
//         return total;
//     }
//     else if (tickets > 100 && tickets <=200) {
//         let total = tickets * 90;
//         return total;
//     }
//     else{
//         let total = tickets * 80;
//         return total;
//     }
// }

// // discountTicket();
// // console.log(discountTicket(120)) // or

// let ticketsPrice = discountTicket(10);
// console.log(ticketsPrice);



// layered discount
/**
 * 1st 100 ---> 100tk
 * 2nd 100 : 101 - 200 ----> 90tk
 * above 200 ---> 80tk
 */

function layerDiscount(productsQuantity){
    let first100price = 100;
    let second100price = 90;
    let above200price = 80;

    if (productsQuantity <= 100) {
        let totalTaka = first100price * productsQuantity;
        return totalTaka;
    }
    else if (productsQuantity <= 200) {
        let first100Taka = first100price * 100;
        let  remain200Products = productsQuantity - 100;
        let remain200Taka = remain200Products * second100price;
        let totalTaka = first100Taka + remain200Taka;
        return totalTaka;
    }
    else{
        let first100Taka = first100price * 100;
        let second100Taka = second100price * 100;
        let remainAbove200Products = productsQuantity - 200;
        let payAbove200Taka = remainAbove200Products * above200price;
        let totalTaka = first100Taka + second100Taka + payAbove200Taka;
        return totalTaka;
    }

}

let payment = layerDiscount(20);
console.log(payment);
