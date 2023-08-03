function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2); // get the mid index of the array
    const leftSide = mergeSort(arr.slice(0, mid)); // recursion method that takes the left side of the array as parameter
    const rightSide = mergeSort(arr.slice(mid)); // recursion method that takes the right side of the array as parameter
    return merge(leftSide, rightSide); // sorting and merging process
}

function merge(left, right){
    const mergedArr = [];

    while(left.length > 0 && right.length > 0){
        // comparing both array then taking the lowest num from the array and save it to a variable
        const lowestNum = (left[0] < right[0]) ? left.shift() : right.shift();
        
        mergedArr.push(lowestNum) // placing the lowest number to the `mergedArr`
    }
    return mergedArr.concat(left, right); // appends the remaining elements from both arrays
}

console.log(mergeSort([1, 4, 3, 2]))

/* 
                            mergeSort([1,4,3,2])                           <-- function invocation
                            /                   \
            mergeSort([1, 4])                   mergeSort([3, 2])          <-- first recursion         
            /                \                  /                 \
    mergeSort([1])   mergeSort([4])       mergeSort([3])    mergeSort([2]) <-- base recursion
    
// after reaching the base of recursion it returns the array

                        mergeSort([1,4,3,2]) 
                        /                   \
        mergeSort([1, 4])                   mergeSort([3, 2])
        /                \                  /                 \
    return [1]       return [4]       return [3]         return [2]

// the returned arrays will then be sorted out and merged into one array

            mergeSort([1,4,3,2])  
            /                   \
    return [1, 4]               return [2, 3]  <-- returned array from the first recursion

// then again the returned arrays will be sorted and merged into one array
// returned value is [1, 2, 3, 4]
*/