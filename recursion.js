'use strict';
// base case:

// if there are no more sheep return

// if num is negative return

function countSheep(num) {
    if (num <= 0) return;

    console.log(`${num} - Another sheep jumps over the fence`);
    countSheep(num - 1);
}

countSheep(-3); // doesn't return anything
countSheep(3);
