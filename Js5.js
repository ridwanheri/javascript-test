/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
    // your code here
    const value = students.sort((a, b) =>
        a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
    );
    // participants per groups
    const participantsPerGroup = students.length % groups;
    let tempGroup = [];
    let mainClass = [];
    let counter = 0;

    for (let index = 0; index < students.length; index++) {
        const element = students[index];
        if (counter >= participantsPerGroup) {
            counter = 0;
        } else {
            tempGroup.push(element);
            counter++;
        }
        mainClass.push(tempGroup);
        // tempGroup.shift();
        console.log('temp', tempGroup);
    }
    console.log('student', mainClass);
}

console.log(result(students, groups));
