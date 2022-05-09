/**
 * Direction:
 * - combine the data between numbersOne and numberTwo and get the deleted data between originalData and the result of merge
 * - divide the data between total value of numbersOne and numbersTwo that already merge, and total value of deletedData
 *
 * Expected Result:
 * 2.21
 */

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9];

function result(originalData, numbersOne, numbersTwo) {
    // Your Code Here
    let combined = numbersOne.concat(numbersTwo);
    let deleted = originalData.filter((x) => !combined.includes(x));

    const sumCombined = combined.reduce((a, b) => a + b, 0);
    const sumDeleted = deleted.reduce((a, b) => a + b, 0);

    return parseFloat(sumCombined / sumDeleted);
}

console.log(result(originalData, numbersOne, numbersTwo));
