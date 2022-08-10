function removeChar(str){
    let arr = str.split('');
    arr.shift();
    arr.pop();
    return arr.join('');

};


/*function removeChar(str) {
    return str.slice(1, -1);
}*/
console.log(removeChar('Jack'));