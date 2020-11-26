export class User {
    name;
    age;
    gender;
    description;
    avatar;

    constructor(name, age, gender, description, avatar) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.avatar = avatar;
    }

    toHTML() {
        return `
            <a class="fas fa-chevron-left prev-btn"></a>
            <figure class="user-container"> 
                <img src="${this.avatar}">
                <figcaption class="user-info">
                    Name: ${this.name} <br>
                    Gender: ${this.gender} <br>
                    Age: ${this.age} <br>
                    Description: ${this.description}
                </figcaption>
            </figure>
            <a class="fas fa-chevron-right next-btn"></a>
        `
    }
}

export class UserCollection {
    userList;
    currentIndex;

    constructor() {
        this.userList = [];
        this.currentIndex = 0;
    }

    addUser(user) {
        this.userList.push(user);
    }

    removeUser(index) {
        this.userList.splice(index, 1);
    }

    showUser(index) {
        document.querySelector('.user-collection').innerHTML = this.userList[index].toHTML();
        this.currentIndex = index;

        let prevBtn = document.querySelector('.prev-btn');
        let nextBtn = document.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => this.prevUser());
        nextBtn.addEventListener('click', () => this.nextUser())
    }

    nextUser() {
        if (this.currentIndex !== this.userList.length - 1) this.showUser(++this.currentIndex);
    }

    prevUser() {
        if (this.currentIndex !== 0) this.showUser(--this.currentIndex);
    }
}