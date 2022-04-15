
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

// function myColor(arr){
//     let str = arr.join(',');
//     console.log(`" ${str} "`)
//     let str2 = arr.join('+');
//     console.log(`" ${str2} "`)
// }
// let array = ["Red", "Green", "White", "Black"]
// myColor(array);

//q3
// function myfunc(array){
//     for (let i = 0 ; i <array.length ; i++){
//         console.log("row" + i + ":");
//         for (let j = 0 ; j <array.length-1 ; j++)
//         console.log(array[i][j])
        
//     }  
// }
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// myfunc(a);

//q3 with map
// function printArr(arr){
//    arr.map(function(item , index) {
//      console.log(`"row ${index}" \n`)
//      console.log(`" ${item} " \n`);
//    });
//}
//var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//printArr(a);

//q4
// function concatArrs(arr){
//     let concatedArr = arr.map(function(item, index){
//         console.log(item)
//         let res = item.reduce((acc, i) =>
//             acc = acc+' ' +i
//         )
//         console.log(res);
//     })
// }
// concatArrs([
//     ["The","red", "horse"],
//     ["Plane","over","the","ocean"],
//     ["Chocolate","ice","cream","is","awesome"],
//     ["this","is","a","long","sentence"]
//     ])

//q4 with return
function concatArrs1(arr){
    let concatedArr = arr.map(function(item, index){
        let res = item.reduce((acc, i) => {
            acc = acc+' ' +i;
        return acc;
        },'')
        console.log(res);
    })
}
concatArrs1([
    ["The","red", "horse"],
    ["Plane","over","the","ocean"],
    ["Chocolate","ice","cream","is","awesome"],
    ["this","is","a","long","sentence"]
    ])      
        
    


