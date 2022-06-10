"use strict";
let MAX_AGE = 100;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function makeRandomNumber(max = MAX_AGE) {
    return Math.ceil((Math.random() * max));
}
const makePerson = (name, age = makeRandomNumber()) => ({ name, age });
const testMakePerson = () => {
    let jane = makePerson('Jane');
    let jack = makePerson('Jack');
    console.log(jane, jack);
};
testMakePerson();
//# sourceMappingURL=index.js.map