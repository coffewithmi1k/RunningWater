var number = function(busStops){
    // Good Luck!
    let arr = busStops.map((el) => {
        return (el[0] - el[1]);
    })

    console.log(arr.reduce((el, acc) => {
        return acc+=el;
    }));
    return arr.reduce((el, acc) => {
        return acc+=el;
    })
}

number([[10, 5], [3, 2]]);