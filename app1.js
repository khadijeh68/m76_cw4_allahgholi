// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
//console.log(last([7, 9, 0, -2],3));
//console.log(last([7, 9, 0, -2],6));


function lastNumber(arr,n){
    if (n === null){
       console.log(arr[arr.length-1]);
    }else if(n > arr.length){
        console.log(arr);
    }else {
        console.log(arr.slice(arr.length-n));
    }    
}
lastNumber([7, 9, 0, -2],6);
