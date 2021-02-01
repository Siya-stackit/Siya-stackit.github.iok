function convert(amount, rate){

    //conversion and return answer.
    var convertedAnswer = amount* rate;
    return convertedAnswer;
}

//main
function main(){
    //exchange rates constants will go here


    var amount = document.getElementById("first").value; // zar
    
    var rate = 16; //dollar
    var ans = convert(amount, rate);
    if(!isNaN(amount) && amount !=0){
       // document.getElementById("second").innerHTML = 5+6;
        alert(convert(amount, rate)); // need to change so i display in the htm file
    }
    else{
        alert("Please enter an Interger value...");
    }
    
}
