var fruit = ['🥭', '🍉', '🍎', '🍍']

var schoolData = {
    name: 'Dave marks',
    class: 'ss3',
    dob: 2003,
    currentYear: 2023,
    calAge : function() {
        this.age = this.currentYear - this.dob
        return this.age
    }
}
schoolData.calAge()
console.log(schoolData.name + 'age is ' + schoolData.calAge() + 'years old')
// console.log(fruit)
// console.log("the best fruit`s is +" + fruit[1])

// var dailyRoute = {
//     mon: 'Work',
//     tue: 'Gym',
//     wed: 'cook',
//     thur: 'game',
//     fri: 10000,
//     sat: 8473,
//     dayValue : function() {
//         this.Value = this.fri - this.sat
//         return this.Value
//     }
// }
// dailyRoute.dayValue()
// console.log(dailyRoute.mon + ' go to the ' + dailyRoute.tue + ' return home and ' + dailyRoute.wed + ' then ' + dailyRoute.dayValue())

var school_data = {
    name: 'Dave marks',
    class: 'ss3',
    dob: 2003,
    currentYear: 2023,
    calAge : function() {
        this.age = this.currentYear - this.dob
        return this.age
    }
}
school_data.calAge()
console.log(school_data.name + 'age is ' + school_data.calAge() + 'years old')
// console.log(fruit)
// console.log("the best fruit`s is +" + fruit[1])

var subject = {
    day: 'mon',
    class: 'ss3',
    dob: 2000,
    currentYear: 2023,
    calDuration : function() {
        this.duration = this.currentYear - this.dob
        return this.duration
    }
}
subject.calDuration()
console.log(subject.day + ' age is ' + subject.calDuration() + " years old ")
// console.log(fruit)
// console.log("the best fruit`s is +" + fruit[1])


var market = {
    day: 'weekend',
    item: 'Rice',
    lastWeek: 5000,
    current: 7500,
    calCost : function() {
        this.cost = this.current - this.lastWeek
        return this.age
    }
}
market.calCost()
console.log(market.day + ' age is ' + market.calCost() + " years old ")
// console.log(fruit)


if (school_data.calAge() || subject.calDuration() <= market.calCost()) {
    console.log("yes, you can guadate");
} else if (school_data.calAge() || subject.calDuration() >= market.calCost()) {
    console.log("no you can`t guadate, you must have to complete your sections")
} else {
    
}
// console.log("the best fruit`s is +" + fruit[1])
// conditonal statement
// $age = 15

// if ($age >= 18) {
//     console.log("yes, you can take beer");
// } else if ($age <= 17) {
//     console.log("no you can`t take beer, you can stick to fruit juice");
// } else{
//     console.log("you can`t take non")
// }