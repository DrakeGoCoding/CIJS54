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

const LONG = new Person('Long', 20, 'Thai Binh');
console.log(LONG);
LONG.introduce();

const HA = new Person('Ha', 20, 'Ha Noi');
console.log(HA);
HA.introduce();