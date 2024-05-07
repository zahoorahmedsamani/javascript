const city = Symbol();

const obj = {
    name : "Samani",
    age: 28,
    [city] : "Mumbai",
    email: "zahoor@gmail.com"
}

// object calling
// console.log(obj.name);
console.log(obj["name"]);

obj.email = "samani@gmail.com"

console.log(obj);

obj.greeting = function() {
    console.log("Hello Object");
}
console.log(obj.greeting());

obj.greetingOne = function() {
    console.log(`Hello Object ${this.name}`);
}
console.log(obj.greetingOne());
