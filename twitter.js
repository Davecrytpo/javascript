function twitter(){
    var Full_name = document.getElementById("Full_name").value;
    var Birth = document.getElementById("Birth").value;
    var Origin = document.getElementById("Origin").value;
    var Place = document.getElementById("Place").value;
    var Age = document.getElementById("Age").value;
    var Occupation = document.getElementById("Occupation").value;
    var Nationality = document.getElementById("Nationality").value;
    var Tell = document.getElementById("Tell").value;
    var Email = document.getElementById("Email").value
} 
// JavaScript code to handle form submission
// JavaScript code to handle form submission
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    // Get form data
    const formData = new FormData(form);
    const Full_name = formData.get("Full_name");
    const Birth = formData.get("Birth");
    const Origin = formData.get("Origin");
    const Place = formData.get("Place");
    const Age = formData.get("Age");
    const Occupation = formData.get("Occupation");
    const Nationality = formData.get("Nationality");
    const Tell = formData.get("Tell");
    const Email = formData.get("Email");
    
    //store data in localstorage
    localStorage.setItem('Full_name', Full_name);
    localStorage.setItem('Birth', Birth);
    localStorage.setItem('Origin', Origin);
    localStorage.setItem('Place', Place);
    localStorage.setItem('Age', Age);
    localStorage.setItem('Occupation', Occupation);
    localStorage.setItem('Nationality', Nationality);
    localStorage.setItem('Tell', Tell);
    localStorage.setItem('Email', Email)

    // Optionally, you can provide feedback to the user after successful submission
//   alert('Form data has been saved to LocalStorage!');
window.location.href = 'twitter.html';
}
)
