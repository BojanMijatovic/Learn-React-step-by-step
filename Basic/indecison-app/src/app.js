import React from 'react';
import ReactDOM from 'react-dom';

// import './utils';

// import { square, add } from './utils';
import test from './utils';
import senior from './person';

import { canDrink, isAdult } from './person';

// console.log(square(3));
// console.log(add(3, 4));

// console.log(test(13, 4));
// console.log(canDrink(18));
// console.log(isAdult(20));
// console.log(senior(20));
// console.log(senior(18));
// console.log('test here is and here');
import validator from 'validator';

console.log(validator.isEmail('test@gmail.com'));

const template = <p>lorem</p>;

ReactDOM.render(template, document.getElementById('root'));
