class Person {
  constructor(name = 'anonymous name', age = 0) {
    this.name = name;
    this.age = age;
  }
  showName() {
    return this.name;
  }
  showAge() {
    return this.age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

const person = new Person('John', 30);
const person2 = new Person();

console.log(person);
console.log(person2);

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  showMajor() {
    return this.major;
  }
}

const mike = new Student('mike', 26, 'CS');

console.log(mike.showAge());

class Traveler extends Person {
  constructor(name, age, country) {
    super(name, age);
    this.country = country;
  }

  showCountry() {
    return this.country;
  }

  getGreeting() {
    if (this.country) {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old. I'm from ${this.country}.`;
    } else {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  }
}

const traveler = new Traveler('John', 30, 'USA');

const traveler1 = new Traveler('Alex', 30);

console.log(traveler.getGreeting());
console.log(traveler1.getGreeting());
