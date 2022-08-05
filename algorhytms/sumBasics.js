function getSum( a,b )
{
    let result = 0;
    if(a === b) {
        return a;
    }
    if( a < b) {
        for(let i = a;i<=b;i++ ){
            result+=i;
        }
            } else {
        for(let i = b;i<=a;i++ ){
            result+=i;
        }
    }
    //Good luck!
    console.log(result)
    return result;
}

getSum(15, 4);