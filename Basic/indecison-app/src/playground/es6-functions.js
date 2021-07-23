const fullName = 'Alex Ted';

const getFirstName = () => fullName.split(' ')[0];
// console.log(getFirstName());

const user = {
  name: 'Alex',
  cities: ['Toronto', 'Apple', 'London'],
  showCites() {
    return this.cities.map((city) => console.log(`${this.name} lived in ${city}`));
  },
};

// user.showCites();

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
