function Amount() {
  var salary = document.getElementById("salary").value
  var hourly = document.getElementById("hourly").value
  var time_spent = document.getElementById("time_spent").value

  var worker = hourly * time_spent * salary;
  document.getElementById("worker").value = ' Dave earn ' + worker.toFixed(2) + ' $ monthly'
}