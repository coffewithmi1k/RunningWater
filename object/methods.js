const person = {
    name: 'Jack',
    age : 15
}

const arr = Object.entries(person);
//console.log(arr[0][0]);
const objectFromArrayOfEntries = Object.fromEntries(arr);
console.log(objectFromArrayOfEntries)
//console.log(Object.entries(person));


/**
 * Object prototype from which other object is created;
 * @type {{name: string}}
 */
var proto = {
    name: 'Jack'
};
var obj = Object.create(proto);
//Object.getPrototypeOf(obj) === proto; // true
console.log(Object.getPrototypeOf(obj));

/**
 * Has own, return true or false if property exist in object
 */
const object1 = {
    prop: 'exists'
};

console.log(Object.hasOwn(object1, 'prop'));
// expected output: true

