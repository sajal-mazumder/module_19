


// calculate wood quantity for chair table and bed;

function wood(chairNumber, tableNumber, bedNumber){
    let perChairWood = 2;
    let perTableWood = 5;
    let perBedWood = 15;

    let chairTotalWood = perChairWood * chairNumber;
    let tableTotalWood = perTableWood * tableNumber;
    let bedTotalWood = perBedWood * bedNumber;

    let totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

let result = wood(10, 2, 1);
console.log('need total wood for furniture is: ', result , ' cft');


// another solving 

function taka(shirtNumber, pantNumber, shoeNumber, perfume){
    let perShirtPrice = 500;
    let perPantPrice = 800;
    let perShoePairPrice = 2000;
    let perPerfumePrice = 1200;

    let shirtTotalPrice = perShirtPrice * shirtNumber;
    let pantTotalPrice = perPantPrice * pantNumber;
    let shoePairTotalPrice = perShoePairPrice * shoeNumber;
    let perfumeTotalPrice = perPerfumePrice * perfume;

    let totalTaka = shirtTotalPrice + pantTotalPrice + shoePairTotalPrice + perfumeTotalPrice;

    return totalTaka;
}

let payTo = taka(2, 2, 1, 1);
console.log('should pay total taka for items is : ', payTo , ' taka');