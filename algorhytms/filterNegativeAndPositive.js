function countPositivesSumNegatives(input) {
    if(!input || input.length === 0) {
        return []
    }
    let result = [];
    let pos = (input.filter((el) => el > 0).length);
    let neg = input.filter((el) => el < 0).reduce((el, acc) => acc+=el, 0);
    result.push(pos);
    result.push(neg);
    return result;
}

console.log(countPositivesSumNegatives([4,5,6]))