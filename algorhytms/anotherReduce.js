function squareSum(numbers){
    return numbers.reduce((acc, el) => (acc + Math.pow(el, 2)), 0);
}


console.log(squareSum([12, -4]));
