function openOrSenior(data) {
    const output = [];
    data.forEach((el) => {
        ((el[0] > 55) && (el[1] < 7)) ? output.push('Senior') : output.push('Open');
    })
    return output;
}


console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
