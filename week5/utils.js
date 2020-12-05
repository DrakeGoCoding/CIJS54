export function getDataFromDoc(doc) {
    const data = doc.data();
    data.id = doc.id;
    return data;
}

export function getDataFromDocs(docs) {
    return docs.map(getDataFromDoc);
}

export async function getUserDocumentByID(id){
    const res = await firebase.firestore().collection('users').doc(id).get();
    const user = getDataFromDoc(res);
    return user;
}

export async function getUserDocuments(){
    const res = await firebase.firestore().collection('users').get();
    let users = getDataFromDocs(res.docs);
    return users;
}

export function addUserDocument(data){
    firebase.firestore().collection('users').add(data);
}

export async function getUserDocumentsByEmail(email){
    const res = await firebase.firestore().collection('users').where("email", "==", email).get();
    let users = getDataFromDocs(res.docs);
    return users;
}

export function isValidRegistration(firstName, lastName, email, password, confirmPassword) {
    return isValidName(firstName + lastName) &&
        isValidEmail(email) &&
        isValidPassword(password) && 
        password === confirmPassword;
}

export function isValidName(name) {
    let regex = /^[a-zA-Z-' ]*$/;
    return regex.test(name);
}

export function isValidEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export function isValidPassword(password) {
    let regex = /^[a-zA-Z0-9]{6,15}$/;
    return regex.test(password);
}