import {getDataFromDoc, getDataFromDocs} from "./utils.js"

async function getUserDocumentByID(id){
    // method1: promise
    // firebase.firestore().collection('users').doc(id).get().then(res => console.log(res));

    // method2: async await
    const res = await firebase.firestore().collection('users').doc(id).get();
    const user = getDataFromDoc(res);
    console.log(user);
}

// getUserDocumentByID('1QxoZXZFUPzIdcFwyRlJ');
// getUserDocumentByID('NStmi4kg2qDrI5tNwRo3');

async function getUserDocuments(){
    const res = await firebase.firestore().collection('users').get();
    let users = getDataFromDocs(res.docs);
    users.forEach(user => console.log(user));
}

// getUserDocuments();

function addDocument(data){
    firebase.firestore().collection('users').add(data);
}

// const data = {
//     name: 'Paul Templeton',
//     age: 28,
//     phoneNumber: '0234576934'
// }

// addDocument(data);

function updateDocumentById(id, newData){
    firebase.firestore().collection('users').doc(id).update(newData);
}

// const id = '1QxoZXZFUPzIdcFwyRlJ';

// const newData = {
//     name: 'Alice Simpson',
//     age: 24,
//     phoneNumber: '0234869372'
// }

// if only some fields need changing, just pass the desired fields
// const newData = {
//     name: 'Alice Beverly',
//     phoneNumber: '0234869372'
// }

// if a field needs to append a new value
// const newData = {
//     phoneNumber: firebase.firestore.FieldValue.arrayUnion('0346178433')
// }

// updateDocumentById(id, newData);

function deleteDocument(id){
    firebase.firestore().collection('users').doc(id).delete();
}

// deleteDocument('RUUbazVly5yBKrJ1HRGa');