class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
}

function greeter(person) {
    return "Hello, " + person;
}

let user = "Jeffrey";

document.body.innerHTML = greeter(user)