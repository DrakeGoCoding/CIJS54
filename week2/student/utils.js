import Student from "./student.js"

export function getDataFromDoc(doc){
    const data = doc.data();
    data.id = doc.id;
    return data;
}

export function getDataFromDocs(docs){
    return docs.map(getDataFromDoc);
}

// FOR TESTING PURPOSE

export default function randomStudentList(size) {
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