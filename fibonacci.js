function fibs(num){
    const array = [];
    for(i = 0; i < num; i++){
        if(array.length <= 1){
            array.push(i);
        } else {
            let num1 = array[array.length -2];
            let num2 = array[array.length -1];
            sum = num1 + num2;
            array.push(sum);
        }
    }
    return array;
}

console.log('fibs: ',fibs(8))

function fibsRec(n) {
    return n <= 0
    ? []
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

console.log('fibsRec: ',fibsRec(8))

/* 
fr8
 fr7
  fr6
   fr5
    fr4
     fr3
      fr2 will return [0, 1] so fr(2) = [0,1]
     returns [0,1,1]        // [...[0,1], (fr(2)[1] === [1]) + (fr(2)[0] === [0])]
    returns [0,1,1,2]       // [...[0,1,1], (fr(3)[2] ==== [1)] + (fr(3)[1] === [1])]
   returns [0,1,1,2,3]      // [...[0,1,1,2], (fr(4)[3] === [2]) + (fr(4)[2] === [1])]
  returns [0,1,1,2,3,5]     // [...[0,1,1,2,3], (fr(5)[4] === [3]) + (fr(5)[3] === [2])]
 returns [0,1,1,2,3,5,8]    // [...[0,1,1,2,3,5], (fr(6)[5] === [5]) + (fr(6)[4] === [3])] 
returns [0,1,1,2,3,5,8,13]  // [...[0,1,1,2,3,5,8], (fr(7)[8] === [5]) + (fr(7)[5] === [5])]
*/