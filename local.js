// Don Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

/*
{
  name: '',
  age: number,
  roll: number
}
*/
const students = [];

const addstudent = (name, age, roll) => {
  students.push({
     name,
     age,
    roll
  })

  localStorage.setItem("students", JSON.stringify(students))

  return { name, age, roll};
}

const createStudentElement = ({name, age, roll}) => {
    //  create elements
     const studentDiv = document.createElement('div');
     const studentName = document.createElement('h2')
     const studentAge = document.createElement('p')
     const studentRoll = document.createElement('p')

    //  fill the content

     studentName.innerText = "student name: " + name
     studentAge.innerText = "student age: " + age;
     studentRoll.innerText = "student roll: " + roll;

    //  Add to the DOM
     studentDiv.append(studentName, studentAge, studentRoll);
     studentsContainer.appendChild(studentDiv);
}


students.forEach(createStudentElement)

 .onsubmit = (e) => {
e.preventDefault();

  const newStudent = addstudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  )

  createStudentElement(newStudent)

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
}
