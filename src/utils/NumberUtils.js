import { Random } from '@woowacourse/mission-utils';

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

function getRandomNumbers(start, end, count) {
  const randomNumbers = Random.pickUniqueNumbersInRange(start, end, count);
  return randomNumbers;
}

function parseStringToNumber(number) {
  return Number(number);
}

function parseStringWithCommaToNumbers(numbers) {
  return numbers.split(',').map(parseStringToNumber);
}

export {
  sortNumbers,
  getRandomNumbers,
  parseStringToNumber,
  parseStringWithCommaToNumbers,
};
