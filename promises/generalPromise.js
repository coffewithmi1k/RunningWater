const promise1 = new Promise((resolve, reject) => {
    resolve(5*20);
})


const promise2 = new Promise((resolve, reject) => {
    const number1 = Math.floor(Math.random()*3+1)
    const number2 = Math.floor(Math.random()*3+1)

    if(number1 === number2){
        reject(new Error('This is an error'))
    } else {
        resolve('success');
    }
})

/*
promise1.then((result) => {
    console.log(result*5);
})*/
promise2.then((result) => {
    console.log(result);
})
