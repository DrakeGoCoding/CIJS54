import {getDataFromDoc, getDataFromDocs} from "./utils.js"

async function getUserDocumentByID(id){
    // method1: promise
    // firebase.firestore().collection('users').doc(id).get().then(res => console.log(res));

    // method2: async await
    const res = await firebase.firestore().collection('users').doc(id).get();
    const user = getDataFromDoc(res);
    console.log(user);
}

async function getUserDocuments(){
    const res = await firebase.firestore().collection('users').get();
    let users = getDataFromDocs(res.docs);
    users.forEach(user => console.log(user));
}

function addUserDocument(data){
    firebase.firestore().collection('users').add(data);
}

function updateUserDocumentById(id, newData){
    firebase.firestore().collection('users').doc(id).update(newData);
}

function deleteUserDocumentById(id){
    firebase.firestore().collection('users').doc(id).delete();
}