function expandedForm(num) {
    let digits = String(num).split('')
    let result = digits.map(function(el, i) {
        return Number(el.concat("0".repeat(digits.length - i - 1)))
    }).filter(function(n) { return n !== 0 })
    return result.join(' + ')
}

console.log(expandedForm(12))