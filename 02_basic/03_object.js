// symbol declaration
const city = Symbol();

// Object Declaration
const obj = {
    name : "Samani",
    age: 28,
    [city] : "Mumbai", //symbol value
    email: "zahoor@gmail.com"
}

// 2 type of object calling
//console.log(obj.name); // First
console.log(obj["name"]); //Second

obj.email = "samani@gmail.com"

console.log(obj);

obj.greeting = function() {
    console.log("Hello Object");
}
console.log(obj.greeting());

obj.greetingOne = function() {
    console.log(`Hello Object ${this.name}`); // This is known as Template literal
}
console.log(obj.greetingOne());
