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
        courseInfoDiv.setAttribute('class', 'course-info');
        courseInfoDiv.innerHTML = `
            <div class="course-info" style="text-align: center">
                <div style="font-size: 4rem">
                    <strong>Course:</strong> ${this.name}
                </div>
                <div style="font-size: 1.5rem">
                    <strong>Lecturer:</strong> ${this.lecturer}
                </div>
            </div>
            <div style="font-size: 1.5rem; padding-left: 1rem; margin-bottom: 2rem">
                <strong>Student List:</strong>
            </div>
        `;
        courseInfoDiv.style.fontFamily = "Arial";

        // Student List
        let studentListDiv = document.createElement('div');
        studentListDiv.setAttribute('class', 'student-list');
        this.studentList.forEach(student => studentListDiv.innerHTML += student.toHTML());
        studentListDiv.style.cssText = `
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(400px, 0.5fr));
        `

        courseDiv.appendChild(courseInfoDiv);
        courseDiv.appendChild(studentListDiv);

        return courseDiv;
    }
}