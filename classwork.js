function Total(){
    var Marks = document.getElementById("Marks").value;
    var Grade = document.getElementById("Grade").value;
    if (Marks >= 80 ||  Marks == 150) {
        document.getElementById("Grade").value = ' You Scored A1';
    } else if(Marks >= 70 ||  Marks == 79){
        document.getElementById("Grade").value = 'Scored B2';
    } else if(Marks >= 60 || Marks == 69){
        document.getElementById("Grade").value = 'Scored B3';
    } else if(Marks >= 50 || Marks == 59){
        document.getElementById("Grade").value = 'Scored C3'
    } else if(Marks >= 40 || Marks == 49){
        document.getElementById("Grade").value = 'Scored C'
    } else if(Marks >= 0 || Marks == 39) {
        document.getElementById("Grade").value = 'F9'
    } 
}

