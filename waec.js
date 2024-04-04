function weac(){
    var english = document.getElementById("english").value
    var maths = document.getElementById("maths").value
    var Biology = document.getElementById("Biology").value
    var Chem = document.getElementById("Chem").value
    var phys = document.getElementById("phys").value
    var Geo = document.getElementById("Geo").value
    var Econ = document.getElementById("Econ").value
    var civic = document.getElementById("civic").value
    var first = document.getElementById("first").value
    var second = document.getElementById("second").value
    var Third = document.getElementById("Third").value
    var Forth = document.getElementById("Forth").value
    var Fifth = document.getElementById("Fifth").value
    var Sixth = document.getElementById("Sixth").value
    var Seventh = document.getElementById("Seventh").value
    var eighth = document.getElementById("eighth").value
}   

// JavaScript code to handle form submission
// JavaScript code to handle form submission
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const english = formData.get("english");
  const maths = formData.get("maths");
  const Biology = formData.get("Biology");
  const Chem = formData.get("Chem");
  const phys = formData.get("phys");
  const Geo = formData.get("Geo");
  const Econ = formData.get("Econ");
  const civic = formData.get("civic");
  const first = formData.get("first");
  const second = formData.get("second");
  const Third = formData.get("Third");
  const Forth = formData.get("Forth");
  const Fifth = formData.get("Fifth");
  const Sixth = formData.get("Sixth");
  const Seventh = formData.get("Seventh");
  const eighth = formData.get("eighth");


  // Store data in LocalStorage
  localStorage.setItem('english', english);
  localStorage.setItem('maths', maths);
  localStorage.setItem('Biology', Biology);
  localStorage.setItem('Chem', Chem);
  localStorage.setItem('phys', phys);
  localStorage.setItem('Geo', Geo);
  localStorage.setItem('Econ', Econ);
  localStorage.setItem('civic', civic);
  localStorage.setItem('first', first);
  localStorage.setItem('second', second);
  localStorage.setItem('Third', Third);
  localStorage.setItem('Forth', Forth);
  localStorage.setItem('Fifth', Fifth);
  localStorage.setItem('Sixth', Sixth);
  localStorage.setItem('Seventh', Seventh);
  localStorage.setItem('eighth', eighth);

  // Optionally, you can provide feedback to the user after successful submission
//   alert('Form data has been saved to LocalStorage!');
window.location.href = 'waec.html';
});
