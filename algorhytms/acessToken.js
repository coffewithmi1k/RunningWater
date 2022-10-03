
let accessToken;

function doSomething() {
    if(accessToken){
        return accessToken;
    }
    accessToken = "true";
    setTimeout(() => {
        accessToken = false;
    }, 10000);
}

doSomething();
setTimeout(() => {
    doSomething()
}, 3000);

setTimeout(() => {
    doSomething()
}, 15000);