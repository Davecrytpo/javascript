// var roster = {
//     luke: 'Car',
//     matt: 'phone',
//     Dave: 'watch',
//     Rolex: 15000,
//     mike: 7800,
//     calAmount: function(){
//         this.Amount = this.Rolex - this.mike
//         return this.Amount
//     }
// }
// roster.calAmount
// console.log(roster.luke + ' is for ' + roster.calAmount() + " worth ")


// var supply = {
//     bid: 'Car',
//     matt: 'phone',
//     Dan: 'watch',
//     mid: 6450,
//     john: 6000,
//     calTotal: function(){
//         this.Total = this.mid - this.john
//         return this.Total
//     }
// }
// supply.calTotal
// console.log(supply.bid + ' is for ' + supply.calTotal() + " worth ")


// var charges = {
//     joel: 'Car',
//     matt: 'phone',
//     jacob: 'watch',
//     Anita: 100000,
//     James: 94000,
//     calFee: function(){
//         this.Fee = this.Anita - this.James
//         return this.Fee
//     }
// }
// charges.calFee
// console.log(charges.joel + ' is for ' + charges.calFee() + " worth ")

// if (charges.calFee() || roster.calAmount() <= supply.calTotal()) {
//     console.log("Then borrow him some little money")
// } else if (charges.calFee() || roster.calAmount() >= supply.calTotal()) {
//     console.log("Manage the funds you have")
// } else {

// }

function funcla() {
    var userdb = document.getElementById("userdob").value;
    var currentyear = document.getElementById("currentyear").value;

    var result = currentyear - userdb ;

    document.getElementById("result").innerHTML = 'You are ' + result + ' year old';

    if(result < 0) {
        document.getElementById("result").innerHTML = 'You should be dead by now';
    }else{
        document.getElementById("result").innerHTML = 'You are ' + result + ' years old';
    } 
}


function power() {
    var Firm = document.getElementById("Firm").value;
    var data = document.getElementById("data").value;

    var Total = Firm - data ;
    document.getElementById("Total").innerHTML = 'profit is ' + Total + ' Good work 👍🏿';
    // Total.innerHTML.style.color = 'Green'

    if(Total < 100) {
        document.getElementById("Total").innerHTML = ' Be encouraged and continue'
    }else if(Total > 1000){
        document.getElementById("Total"),innerHTML = ' Keep it going'
    }else{

    }
}