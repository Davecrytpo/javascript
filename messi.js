function Total(){
    var name = document.getElementById("name").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var result = end - start;
    if (result) {
        document.getElementById("result").value = name + ' has played for ' + result + ' years'
    }
}