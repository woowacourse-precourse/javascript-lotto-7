
const parseStringToNumber = (price) => {
  return Number(price);
};

const parseMoneyToLottoCount = (price) => {
  return price / 1_000;
};

const parseSortArray = (array) => {
  return array.toSorted((a, b) => a - b);
};

const parseExtractNumbers = (string) => {
  return string.split(',').map((number) => Number(number.trim()));
};

const parser = {
  parseStringToNumber,
  parseMoneyToLottoCount,
  parseSortArray,
  parseExtractNumbers,
};

export default parser;
