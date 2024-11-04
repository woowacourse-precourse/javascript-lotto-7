const convertNumbersToArray = (numbers) =>
  numbers.split(",").map((number) => Number(number.trim()));

export default convertNumbersToArray;
