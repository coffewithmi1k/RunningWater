function XO(str) {
    let arr = str.split('');
    let x = 0;
    let o = 0;
    for(let i =0;i< arr.length;i++){
        if(arr[i].toLowerCase() === 'x' ){
            x++;
        } else if(arr[i].toLowerCase() === 'o'){
            o++;
        }

    }
    if(x === 0 && o === 0){
        return true
    } else if (x === o) {
        return true
    }
    return false;
}

XO('xxxm');