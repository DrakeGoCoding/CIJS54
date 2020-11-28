import StudentCard from './studentCard.js'

export default class Student {
    constructor(name, age, placeOfBirth) {
        this.name = name;
        this.age = age;
        this.placeOfBirth = placeOfBirth;
    }

    displayInfo() {
        console.log(`-----------------------------------------------`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Place of birth: ${this.placeOfBirth}`);
        console.log(`-----------------------------------------------`);
    }

    toHTML() {
        return `
        <student-card name="${this.name}" age="${this.age}" pob="${this.placeOfBirth}"></student-card>
        `
    }
}