function solve(){
    var first_num = parseInt(document.getElementById("first_num").value);
    var operator = document.getElementById("operator").value;
    var second_num = parseInt(document.getElementById("second_num").value);

    var Total 
    
    if(operator == "+"){
        Total = first_num + second_num;
    }

    if(operator == "-"){
    Total = first_num - second_num
}
    if(operator == "/"){
    Total = first_num / second_num
}
    if(operator == "*"){
    Total = first_num * second_num
}

    document.getElementById("answer").innerHTML = Total;
}