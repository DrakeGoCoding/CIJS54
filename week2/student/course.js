export default class Course {
    constructor(name, lecturer) {
        this.name = name;
        this.lecturer = lecturer
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

    toHTML() {
        let courseDiv = document.querySelector('.course');

        // Course Info
        let courseInfoDiv = document.createElement('div');
        courseInfoDiv.setAttribute('class', 'course-detail');
        courseInfoDiv.innerHTML = `
            <div class="course-info">
                <div class="course-name">
                    <strong>Course:</strong> ${this.name}
                </div>
                <div class="lecturer">
                    <strong>Lecturer:</strong> ${this.lecturer}
                </div>
            </div>
            <div class="students">
                <strong>Student List:</strong>
            </div>
        `;
        courseInfoDiv.style.fontFamily = "Arial";

        // Student List
        let studentListDiv = document.createElement('div');
        studentListDiv.setAttribute('class', 'student-list');
        this.studentList.forEach(student => studentListDiv.innerHTML += student.toHTML());
        courseDiv.appendChild(courseInfoDiv);
        courseDiv.appendChild(studentListDiv);

        return courseDiv;
    }
}