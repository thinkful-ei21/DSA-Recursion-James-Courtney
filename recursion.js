'use strict';

//COUNTING SHEEP_________________________

function countSheep(num) {
    // base case:
    // if there are no more sheep return
    // if num is negative return
    if (num <= 0) return;

    console.log(`${num} - Another sheep jumps over the fence`);
    countSheep(num - 1);
}

// countSheep(-3); // doesn't return anything
// countSheep(3);


//ARRAY DOUBLE_____________________________

function arrayDouble(arr, doubledArr=[]) {
    // base case:
    // array.length = 0
    if (!arr.length) return doubledArr;

    // general case:
    // each index, multipled by 2 and store in new array
    let doubledValue = arr[0] * 2;

    doubledArr.push(doubledValue);
    return arrayDouble(arr.slice(1), doubledArr);
}

// console.log(arrayDouble([1,2,3,4]));
//[2,4,6,8]

function arrayDouble2(arr) {
    // base case:
    // array.length = 0
    if (!arr.length) return [];

    // general case:
    // each index, multipled by 2 and store in new array
    return [arr[0] * 2, ...arrayDouble2(arr.slice(1))];
}

// console.log(arrayDouble2([1,2,3,4]));
