/*function SeriesSum(n) {
    if(n === 1) {
        return '1.00';
    } else if(n === 0) {
        return '0.00'
    }
    let amp = 4
    let base = 1/amp
    let sum = 1;
    for(let i = 1;i<n;i++) {
       sum+=base;
       amp+=3;
       base = 1/amp;
    }
    let result = `${Math.round(sum*100)/100}`;
    if(result.length === 3) {
        return `${result}0`
    } else if(result.length === 1){
        return `${result}.00`
    }
    return result;
}*/

function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }

    return s.toFixed(2)
}

console.log(SeriesSum(5));