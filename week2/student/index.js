import Student from "./student.js"
import Course from "./course.js"
import randomStudentList from "./utils.js"

let studentList = randomStudentList(20);
let studentA = new Student('Adam', 25, 'Manhattan');
let studentB = new Student('Eve', 23, 'Melbourne');

const CIJS54 = new Course('CIJS54', 'Nguyen Ba Khiem');
CIJS54.studentList = studentList;
CIJS54.addStudent(studentA);
CIJS54.addStudent(studentB);

CIJS54.toHTML();