

// to buy cheapest mobile

// let mobilePrice = [12000, 23000, 30500, 16000];

// function cheapMobile(numbers){
//     let minPrice = numbers[0];
//     for(let number of numbers){
//         if (number < minPrice) {
//             minPrice = number;
//         }
//     }
//     return minPrice;
// }

// let getMobile = cheapMobile(mobilePrice);
// console.log('the lowest price of the mobile phone is : ', getMobile, ' taka.');


// to buy cheapest mobile from an array object

// let mobiles = [
//     {name: 'samsung', price: 21000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'oppo', price: 20500, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'htc', price: 12000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'honor', price: 32000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'vivo', price: 25500, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'nokia', price: 40000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'symphony', price: 29000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'xaomi', price: 18000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'infinix', price: 34000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'techno', price: 20900, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'samsung', price: 20000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'}
// ]

// function buyMobile(mobiles){
//     let cheapMobile = mobiles[0];
//     for(mobile of mobiles){
//         if (mobile.price < cheapMobile.price) {
//             cheapMobile = mobile;
//         }
//     }
//     return cheapMobile;
// }

// let lowPriceMobile = buyMobile(mobiles);
// console.log('low price mobile is :', lowPriceMobile);

// dami phone

// let phones = [
//     {name: 'samsung', price: 21000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'oppo', price: 20500, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'htc', price: 12000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'honor', price: 32000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'vivo', price: 25500, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'nokia', price: 40000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'symphony', price: 29000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'xaomi', price: 18000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'infinix', price: 74000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'techno', price: 20900, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
//     {name: 'samsung', price: 20000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'}
// ]

// function damiPhone(phones){
//     let damimobile = phones[0];
//     for( phone of phones){
//         if (phone.price > damimobile.price) {
//             damimobile = phone;
//         }
//     }
//     return damimobile;
// }

// let myPhone = damiPhone(phones);
// console.log('the most dami mobile is : ', myPhone);


// total price of an array object

// let products = [
//     {name: 'shirt', price:500},
//     {name: 'pant', price:1500},
//     {name: 'shampoo', price:400},
//     {name: 'perfume', price:600},
//     {name: 'watch', price:2500},
// ]

// function totalPay(products){
//     let payTotal = 0;
//     for(product of products){
//         // console.log(product); //access all elements
//         payTotal = payTotal + product.price;
//     }
//     return payTotal;
// }

//  let needToPay = totalPay(products);
//  console.log('should pay total :', needToPay, ' taka.')


// buy multi items in one cart 

let products = [
    {name: 'shirt', price:500, quantity: 5},
    {name: 'pant', price:1500, quantity: 2},
    {name: 'shampoo', price:400, quantity: 4},
    {name: 'perfume', price:600, quantity: 1},
    {name: 'watch', price:2500, quantity: 3}
]

function totalPay(products){
    let payTotal = 0;
    for(product of products){
        // console.log(product); //access all elements
        let allPay =product.price * product.quantity;
        payTotal = payTotal + allPay; // this two line show same output
        // payTotal = payTotal + product.price *product.quantity; // this two line show same output
    }
    return payTotal;
}

 let needToPay = totalPay(products);
 console.log('should pay total :', needToPay, ' taka.')