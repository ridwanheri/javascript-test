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
    let uniqueObjArray = [...new Map(data.map((item) => [item['age'], item])).keys()];
    return uniqueObjArray;
}

console.log(result(data));
