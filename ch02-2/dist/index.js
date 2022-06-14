"use strict";
let MAX_AGE = 100;
// class Person implements IPerson{
//     constructor(public name:string,public age:number){}
// }
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