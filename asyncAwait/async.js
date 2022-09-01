
async function getData(number1, number2) {
    return number1+number2;
}

async function multiplyResult(number){
    return Math.pow(number, 2);
}
/* getData(2,3)
    .then((result) => {
        multiplyResult(result)
            .then((res) => {
                console.log(res);
            });
    })*/

async function calculation() {
    const res = await getData(5,6);
    const res2 = await multiplyResult(res);
    console.log(res2);
    return res2;
}

calculation()
    .then((data) => {
        console.log('success');
    });
