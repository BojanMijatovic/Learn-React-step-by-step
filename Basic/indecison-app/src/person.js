const isAdult = (age) => {
  return age >= 18;
};

const canDrink = (age) => {
  return age >= 21;
};

export { isAdult, canDrink, isSenior as default };

const isSenior = (age) => {
  return age >= 65;
};
