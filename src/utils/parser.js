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

const parsePrice = (price) => {
  return price.toLocaleString('ko-KR');
}

const parser = {
  parseStringToNumber,
  parseMoneyToLottoCount,
  parseSortArray,
  parseExtractNumbers,
  parsePrice,
};

export default parser;
