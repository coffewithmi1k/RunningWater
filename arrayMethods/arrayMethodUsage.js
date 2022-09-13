const array = [1, 2, 3, 4 ];
const ent = array.entries();

let filteredArr = array.filter((el, index) => {
    return index > 1
});
console.log(filteredArr)
//console.log(ent.next().value)
//find
let found = array.find((el) => el === 2);
console.log(found)
let foundIndex = array.findIndex((index) => index === 3);
console.log(`found index at ${foundIndex}`)

let notFlat = [1, 2, [3, 4]];

console.log(`flat array ${notFlat.flat()}`);
array.forEach(el => console.log(el));

console.log(`this array includes ${array.includes(3)}`);

console.log(`this is index of element in question of ${array.indexOf(3)}`)
console.log(`this is array parsed into string ${array.join('_')}`);
console.log(`last index of certain element in array ${array.lastIndexOf(2)}`)
console.log(`map method is here ${array.map(el => Math.pow(el, 2))}`);
let copyArr = [...array];
console.log(`this is copy of an array ${copyArr}`)
/**
 * Array destructuring;
 */
let [a,b, ...c] = array;
console.log(a,b,c );

console.log(`here I wil delete last element of an array ${copyArr.pop}`)
console.log(`here I will add some data at the end of an array ${copyArr.push(5)}`)

console.log(`here reduce method is used ${array.reduce((prev, current) => prev * current)}`)
let forSplice = [...array];
console.log(`here we have splice array ${forSplice.splice(2, 0, 5,6,7)}`);
let mar = [1,2,3,4,5];
let sli = mar.slice(1,3);
console.log(`Here we have slice example ${sli}`)
console.log()
console.log()

