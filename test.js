function calculate() {
    var name = document.getElementById("name").value;
    var height = document.getElementById("height").value;
    var Bodymaths = document.getElementById("Bodymaths").value;

    var solution = Bodymaths / (height * height);
    document.getElementById("solution").value = name + ' ayo is ' + solution.toFixed(3) + ' weight'
}