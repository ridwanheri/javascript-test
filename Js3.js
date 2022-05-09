/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
    { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
    { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
    // your code here
    let allkeys = {};

    data.forEach((element) => {
        let keys = Object.keys(element);
        keys.forEach((el) => {
            if (!(el in allkeys)) {
                allkeys[el] = 0;
            }
        });
    });

    allkeysdata = {};

    Object.keys(allkeys).forEach((element) => {
        allkeysdata[element] = data[0][element];
    });

    data.forEach((element) => {
        let keys = Object.keys(element);
        keys.forEach((el) => {
            // console.log(element[el])
            if (element[el] === allkeysdata[el]) {
                allkeys[el] = allkeys[el] + 1;
            }
        });
    });

    const result = [];
    Object.keys(allkeys).forEach((element) => {
        if (allkeys[element] < data.length) {
            result.push(element);
        }
    });
    return result;
}

console.log(result(data));
