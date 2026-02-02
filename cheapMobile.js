

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

let mobiles = [
    {name: 'samsung', price: 21000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'oppo', price: 20500, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'htc', price: 12000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'honor', price: 32000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'vivo', price: 25500, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'nokia', price: 40000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'symphony', price: 29000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'xaomi', price: 18000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'infinix', price: 34000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'techno', price: 20900, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'},
    {name: 'samsung', price: 20000, color: 'black', camera: '12mp', ram: '4gb', rom: '128gb'}
]

function buyMobile(mobiles){
    let cheapMobile = mobiles[0];
    for(mobile of mobiles){
        if (mobile.price < cheapMobile.price) {
            cheapMobile = mobile;
        }
    }
    return cheapMobile;
}

let lowPriceMobile = buyMobile(mobiles);
console.log('low price mobile is :', lowPriceMobile);