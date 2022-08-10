/*function findUniq(arr) {
 let unique = [...new Set(arr)];
 let count1 = 0;
 let count2 = 0;
 for(let i = 0; i < arr.length;i++){
  if(arr[i] === unique[0]){
   count1++;
  }
  if(arr[i] === unique[1]){
   count2++
  }
 }

 return count1 < count2 ? unique[0] : unique[1];
}*/

function findUniq(arr) {
 return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([ 0, 0, 1 ]))