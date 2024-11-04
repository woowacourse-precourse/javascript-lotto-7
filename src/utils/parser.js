import { LOTTO_PRICE_PER_TICKET } from '../constants/constants.js';

const parseStringToNumber = (price) => {
  return Number(price);
};

const parseMoneyToLottoCount = (price) => {
  return price / LOTTO_PRICE_PER_TICKET;
};

const parseSortArray = (array) => {
  return array.toSorted((a, b) => a - b);
};

const parseExtractNumbers = (string) => {
  return string.split(',').map((number) => Number(number.trim()));
};

const parseNumberWithCommas = (number, options = {}) => {
  return number.toLocaleString('ko-KR', options);
}

const parser = {
  parseStringToNumber,
  parseMoneyToLottoCount,
  parseSortArray,
  parseExtractNumbers,
  parseNumberWithCommas,
};

export default parser;
