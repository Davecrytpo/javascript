function  calculateUnits(){
    var name = document.getElementById("name").value;
    var Amount = document.getElementById("Amount").value;
    var Tariff = document.getElementById("Tariff").value;
    
    var unit = Amount / Tariff;
    if(unit){
        document.getElementById("unit").innerHTML = name + ' uses ' + unit.toFixed(2) + ' kilowatt per hour and '  + unit.toFixed(0) + ' units'
    }
}