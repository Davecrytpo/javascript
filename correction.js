function Amount() {
    var worker = document.getElementById("worker").value;
    var salary = document.getElementById("salary").value;
    var days = 5;
    var hours = 9;
    var weekly = salary/4;
    var result = weekly / ( hours * days);
    if(result){
        document.getElementById("result").innerHTML = worker + ' hourly rate is ' + '$' + result.toFixed(2)
    }
}

// switch statement

let t_name = ''
switch (t_name) {
    case "peter":
        console.log(`Your name is ${t_name}`);
        break
    case "Dave":
        console.log(`Your name is ${t_name}`);
        break
    case "Rollo":
        console.log(`Your name is ${t_name}`);
        break
        default :
        console.log(`Go sleep abeg you no get life`);
}

// // form validation
// let form = document.querySelector(`form`),
// name = form.querySelector(`input[type="text"]`),
// email = form.querySelector(`input[type="email"]`),
// password = form.querySelector(`input[type="password"]`),
// textarea = form.querySelector(`textarea`),
// h4 = document.querySelector(`h4`)

// form.onsubmit = () => {
//     event.preventDefault() 
//     if (name.value === ''){
//         h4.innerText = 'Name cannot be empty'
//         return
//     }
//     if (email.value === ''){
//         h4.innerText = 'Email cannot be empty'
//         return
//     }
//     if (password.value === ''){
//         h4.innerText = 'password cannot be empty'
//         return
//     }
//     document.write('congrats you won yourself an iphone')
// }