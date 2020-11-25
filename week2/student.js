class Student {
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
}

class Course {
    constructor(name) {
        this.name = name;
        this.studentList = [];
    }

    addStudent(student) {
        this.studentList.push(student);
    }

    findStudentByName(name) {
        return this.studentList.filter(student => student.name === name);
    }

    findStudentByAge(age) {
        return this.studentList.filter(student => student.age === age);
    }

    findStudentByAgeAndPOB(age, placeOfBirth) {
        return this.findStudentByAge(age).filter(student => student.placeOfBirth === placeOfBirth);
    }
}

let studentList = randomStudentList(20);
let studentA = new Student('Adam', 25, 'Manhattan');
let studentB = new Student('Eve', 23, 'Melbourne');

const CIJS54 = new Course('CIJS54');
CIJS54.studentList = studentList;
CIJS54.addStudent(studentA);
CIJS54.addStudent(studentB);

console.log(CIJS54);
console.log('Find 15-year-old students:');
console.log(CIJS54.findStudentByAge(15));
console.log('Count 18-year-old students who live in Ha Noi:', CIJS54.findStudentByAgeAndPOB(18, 'Ha Noi').length)

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// FOR TESTING PURPOSE

function randomStudentList(size) {
    let names = ['Linh', 'Nguyen', 'Trang', 'Tuan', 'Anh', 'Huy', 'Thu', 'Hoang', 'Van', 'Thang'];
    let ages = [15, 16, 17, 18, 19, 20];
    let placeOfBirths = ['Ha Noi', 'Hai Phong', 'Nam Dinh', 'Ha Tinh', 'Hai Duong', 'TP HCM', 'Da Nang'];
    let studentList = [];

    for (let i = 0; i < size; i++) {
        let randomName = Math.floor(Math.random() * names.length);
        let randomAge = Math.floor(Math.random() * ages.length);
        let randomPOB = Math.floor(Math.random() * placeOfBirths.length);
        let student = new Student(names[randomName], ages[randomAge], placeOfBirths[randomPOB]);
        studentList.push(student);
    }
    return studentList;
}