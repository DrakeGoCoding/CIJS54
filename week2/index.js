class Person {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    introduce() {
        console.log(`Hi! My name is ${this.name}. I'm ${this.age} years old and I'm from ${this.address}`);
    }
}

class Student extends Person {
    university;
    major;

    constructor(name, age, address, university, major) {
        super(name, age, address);
        this.university = university;
        this.major = major;
    }

    introduce() {
        super.introduce();
        console.log(`And I'm a student of ${this.major} at ${this.university}`);
    }
}

class MyMath {
    static sum(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
}

const LONG = new Person('Long', 20, 'Thai Binh');
console.log(LONG);
LONG.introduce();

const ANOTHER_LONG = new Student('Long', 20, 'Thai Binh', 'Hanoi University Of Science and Technology', 'Global ICT');
console.log(ANOTHER_LONG);
ANOTHER_LONG.introduce();

console.log(MyMath.sum(1, 2));

// this shows error
// console.log(MyMath.subtract(1, 2));