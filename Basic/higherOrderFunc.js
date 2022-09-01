const sayShortForm = (mode) => (word) => {
  console.log(mode + word);
};

const saynoon = sayShortForm("noon, ");
saynoon("hi");

sayShortForm("test, ")("data");

// ----------------------------------------------------------------

const handleSumNumbers = (number1, number2) => (number3, number4) => {
  return number1 + number2 + number3 + number4;
};

const sum = handleSumNumbers(1, 2);
console.log(sum(3, 4));

// ----------------------------------------------------------------

const handleShowNumbers = (config) => (number1, number2) => {
  const handleSumNumbers = (number1, number2) => number1 + number2;
  return `${config} ${handleSumNumbers(number1, number2)}`;
};

const success1 = handleShowNumbers("Sum numbers:")(20, 10); // Sum numbers: 30
// console.log(success1);

const config = handleShowNumbers("Sum numbers:");
const success2 = config(5, 6); // Sum numbers: 11
// console.log(success2);
