function Total() {
    var name = document.getElementById("name").value;
    var Annual = document.getElementById("Annual").value;
    var months = 12;
    var result = Annual / months;
    if(result){
        document.getElementById("result").value = name + ' earns ' + ` $` + result.toFixed(2)
    }
    }