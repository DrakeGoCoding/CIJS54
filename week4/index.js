import {getDataFromDoc, getDataFromDocs} from "./utils.js"

async function getUserDocumentByID(id){
    // promise
    // const res = firebase.firestore().collection('users').doc('0t5vihUYNxMs2jxrpCWM').get()
    // .then(res => console.log(res));

    // async await
    const res = await firebase.firestore().collection('users').doc(id).get();
    const user = getDataFromDoc(res);
    console.log(user);
}

getUserDocumentByID('0t5vihUYNxMs2jxrpCWM');
getUserDocumentByID('qF6rCyEnwUWTGHwZtTfe');

async function getUserDocuments(){
    const res = await firebase.firestore().collection('users').get();
    let users = getDataFromDocs(res.docs);
    users.forEach(user => console.log(user));
}

getUserDocuments();
