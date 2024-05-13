// Singleton Object

//const user = new Object()
 
const user = {}

user.id = "123abc"
user.name = "Ahmed"
user.email = "ahmed@gmail.com"

//console.log(user);

const appUser = {
    username: {
        appUserName: {
            firstName: "Samani",
            lastName: "Ahmed"
        }
    }
}

//console.log(appUser.username.appUserName.firstName);


const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}
const obj3 = {e: 5, f: 6}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

//console.log(obj4);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('email'));