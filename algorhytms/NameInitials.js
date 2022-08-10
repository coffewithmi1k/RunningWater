function abbrevName(name) {
    let arr = name.split(' ');
    return `${arr[0].charAt(0)}.${arr[1].charAt(0)}`
}



/*function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}*/
console.log(abbrevName("Pour Jeff"));