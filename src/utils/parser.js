
const parseStringToNumber = (price) => {
  return Number(price);
}

const parseMoneyToLottoCount = (price) => {
  return price / 1_000;
}

const parseSortArray = (array) => {
  return array.toSorted((a, b) => a - b);
}

const parser = {
  parseStringToNumber,
  parseMoneyToLottoCount,
  parseSortArray,
}

export default parser;
