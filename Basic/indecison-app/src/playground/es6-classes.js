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
}

const person = new Person('John', 30);
const person2 = new Person();

console.log(person);
console.log(person2);
