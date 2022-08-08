function nbYear(p0, percent, aug, p) {
    let years = 0;
    for(let i = p0; i < p;i = Math.floor(i + i*percent/100 +aug )){
        years++;
    }
    return years;
}

console.log(nbYear(1500000, 0.25, 1000, 2000000));