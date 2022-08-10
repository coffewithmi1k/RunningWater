function getMiddle(s)
{
    if(s.length === 1) {
        return  s;
    }
    return s.length % 2 === 0 ? `${s.charAt(s.length/2-1)}${s.charAt(s.length/2)}`:s.charAt(s.length/2);
}

console.log(getMiddle('testing'));