

// discount in any cart

function discountTicket(tickets){
    if (tickets <= 100) {
        let total = tickets * 100;
        return total;
    }
    else if (tickets > 100 && tickets <=200) {
        let total = tickets * 90;
        return total;
    }
    else{
        let total = tickets * 80;
        return total;
    }
}

// discountTicket();
// console.log(discountTicket(120)) // or

let ticketsPrice = discountTicket(10);
console.log(ticketsPrice);