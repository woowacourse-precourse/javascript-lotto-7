import { ERROR_MESSAGE } from './constant';

export function validateAmount(amount) {
  if (isNaN(amount)) throw new Error(ERROR_MESSAGE.NOT_NUM_ERROR);
  if (amount % 1000 !== 0)
    throw new Error(ERROR_MESSAGE.LOTTO_AMOUNT_UNIT_ERROR);
}

export function validateNumbers(userInput) {
  const formatRegex = /^(\d{1,2},){5}\d{1,2}$/;
  if (!formatRegex.test(userInput)) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUM_FORMAT_ERROR);
  }
  const numbers = userInput
    .toString()
    .split(',')
    .map((num) => parseInt(num, 10));
  if (numbers.length != 6) {
    throw new Error(ERROR_MESSAGE.LOTTO_CNT_ERROR);
  }
  numbers.forEach((num) => {
    if (num < 1 || num > 45) throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_ERROR);
  });

  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUM_NOT_UNIQUE_ERROR);
  }
}

export function validateBonus(bonus, numbers) {
  if (isNaN(bonus)) throw new Error(ERROR_MESSAGE.NOT_NUM_ERROR);
  if (bonus < 1 || bonus > 45)
    throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_ERROR);
  if (numbers.includes(bonus))
    throw new Error(ERROR_MESSAGE.BONUS_NUM_NOT_UNIQUE_ERROR);
}
