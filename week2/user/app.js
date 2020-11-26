import * as UserModule from "./user.js"

let userCollection = new UserModule.UserCollection();
let user1 = new UserModule.User('Long', 20, 'Male', 'Hello World', 'https://picsum.photos/id/0/367/267');
let user2 = new UserModule.User('Hoang', 21, 'Male', 'Goodbye World', 'https://picsum.photos/id/1000/367/267');

userCollection.addUser(user1);
userCollection.addUser(user2);
userCollection.showUser(userCollection.currentIndex);




