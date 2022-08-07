function reverseWords(str) {
    return  str.split(' ').map((el) => {
       return el.split('').reverse().join('');
    }).join(' ');
    console.log(arr);
}

reverseWords('The quick brown fox jumps over the lazy dog.');
