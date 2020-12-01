import Student from "./student.js"
import Course from "./course.js"
import {getDataFromDocs} from "./utils.js"

async function getStudentList(){
    let studentList = [];
    const res = await firebase.firestore().collection('student').get();
    let studentsData = getDataFromDocs(res.docs);
    for (const student of studentsData){
        let newStudent = new Student(student.name, student.age, student.placeOfBirth);
        studentList.push(newStudent);
    }
    return studentList;
}

const CIJS54 = new Course('CIJS54', 'Nguyen Ba Khiem');
getStudentList().then(studentList => {
    CIJS54.studentList = studentList;
    CIJS54.toHTML();
})
