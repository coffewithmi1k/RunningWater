const objectExample = {
    name : 'Yurii',
    surname: 'Ku',
    age : '25',
    hobbies: [
        'football', 'teniss', 'boxing'
    ],
    prof: {
        qa : 'senior',
        automation: 'middle'
    }
}

/**
 * destructuring objects;
 */
let {name, surname} = objectExample;
let {hobbies} = objectExample;
let {automation} = objectExample.prof;
let {prof} = objectExample;
console.log(name, surname)
console.log(hobbies)
console.log(automation)
console.log(prof);
let obj = {};
Object.assign(obj, objectExample)
console.log(obj)

let obj2 = {name: 'yur', surname: 'key2'};
Object.defineProperties(obj2, {
    'name': {
        writable: true,
        configurable: true,
        value: true
    },
    'surname' : {
        value: 'key'
    }
})
console.log(obj2)
console.log(Object.entries(obj2));

console.log(Object.keys(obj2));
console.log(Object.values(obj2))
