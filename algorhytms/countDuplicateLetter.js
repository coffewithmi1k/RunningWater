function duplicateCount(text){
    let arr = text.toLowerCase().split('');
    let counters = [];
    for(let i=0;i< arr.length-1; i++) {
        let count = 1;
        for(let k = i+1;k<arr.length;k++){
            if(arr[i] ===arr[k]){
                count+=1;
            }
        }
        counters.push(count);

    }
    if(Math.max(...counters) === 1 || text === ''){
        return 0;
    }
    console.log(Math.max(...counters));
    return (Math.max(...counters));
        }

        duplicateCount('aabBcde');