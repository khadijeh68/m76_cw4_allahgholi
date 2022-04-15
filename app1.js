
// function lastNumber(arr,n){
//     if (n === null){
//        console.log(arr[arr.length-1]);
//     }else if(n > arr.length){
//         console.log(arr);
//     }else {
//         console.log(arr.slice(arr.length-n));
//     }    
// }
// lastNumber([7, 9, 0, -2],3);

function myColor(arr){
    let str = arr.join(',');
    console.log(`" ${str} "`)
    let str2 = arr.join('+');
    console.log(`" ${str2} "`)
}
let array = ["Red", "Green", "White", "Black"]
myColor(array);
