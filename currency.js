function convert(amount, rate){

    //conversion and return answer.
    var convertedAnswer = amount * rate;
    var rounded = convertedAnswer.toFixed(3);
    return convertedAnswer;
}

//main
function main(){
    //exchange rates constants will go here
    var rate = 0.0;
    var ZarUsd = 14.70, ZarPound = 20.31 , ZarNaira = 25.91;
    var UsdPound = 0.72 , UsdNaira = 381.25 ;
    var PoundNaira = 526.95 ; //must be updated daily I guess..


    var amount = document.getElementById("first").value; // zar
    var from = document.getElementById("currency").value;//convert from
    var to = document.getElementById("currency1").value;//convert to..
    console.log(amount, from, to); // debugging
    //all for Zar to currency
    if((from == "ZAR") && (to == "USD")){
        rate = ZarUsd;
    }
    if ((to == "ZAR") && (from == "USD")) {
        rate = 1/ZarUsd;
    //so that in the convertion function it will multiply by the inverse of the rate in short divides :)
    }
    if ((from == "ZAR") && (to == "Pound")) {
        rate = ZarPound;
    }
    if ((to == "ZAR") && (from == "Pound")) {
        rate = 1/ZarPound;
    }
    if ((from == "ZAR") && (to == "Naira")) {
        rate = ZarNaira;
    }
    if ((from == "Naira") && (to == "ZAR")) {
        rate = 1/ZarNaira;
    }
    if ((from == "ZAR") && (to == "ZAR")) {
        rate = 1;
    }

    //USD to currency
    if ((from == "USD") && (to == "Pound")) {
        rate = UsdPound;
    }
    if ((to == "USD") && (from == "Pound")) {
        rate = 1/UsdPound;
    }
    if ((from == "USD") && (to == "Naira")) {
        rate = UsdNaira;
    }
    if ((to == "USD") && (from == "Naira")) {
        rate = 1/UsdNaira;
    }
    if ((from == "USD") && (to == "USD")) {
        rate = 1;
    }

    //all for pound
    if ((from == "Pound") && (to == "Naira")) {
        rate = PoundNaira;
    }
    if ((to == "Pound") && (from == "Naira")) {
        rate = 1/PoundNaira;
    }
    if ((from == "Pound") && (to == "Pound")) {
        rate = 1;
    }
    //Naira
    if ((from == "Naira") && (to == "Naira")) {
        rate = 1;
    }
console.log(rate); //debugging
    var ans = convert(amount, rate);
    if(!isNaN(amount) && amount !=0){
        document.getElementById("second").value = ans;
      //  console.log(convert(amount, rate)); // need to change so i display in the htm file

    }
    else{
        alert("Please enter an Interger value...");
    }
    
}
