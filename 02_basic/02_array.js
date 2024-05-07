const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// arr1.push(arr2)

// console.log(arr1);

// arr1.concat(arr2)
// console.log(arr1);

const newArr = arr1.concat(arr2)
console.log(newArr);

// Spread Operator

const spreadArr = [...arr1, ...arr2]
console.log(spreadArr);

// Array in array

const multipleArray = [1,2,3, [5, 6, 7, [7, 8,9, [10, 2, 4]]]]
const properArray = multipleArray.flat(Infinity)
console.log(properArray);


console.log(Array.isArray(multipleArray))
console.log(Array.from("Ahmed"))

let arr3 = 100
let arr4 = 200
let arr5 = 300

console.log(Array.of(arr3, arr4, arr5))