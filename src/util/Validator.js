import { ERROR_MESSAGE } from "../constants/Constants.js";
const MIN_RANGE = 1;
const MAX_RANGE = 45;
const VALID_COUNT = 6;
const VALID_SIZE = 6;

class Validator {
  isNumber(value, errorMessage) {
    const condition = !Number.isNaN(Number(value, 10));
    if (!condition) {
      throw new Error(errorMessage);
    }
    return Number(value);
  }
  isPriceNumber(lottoPrice) {
    return this.isNumber(lottoPrice, ERROR_MESSAGE.PRICE_NUMBER_ERROR);
  }
  isBonusAsNumber(bonusInput) {
    return this.isNumber(bonusInput, ERROR_MESSAGE.BONUS_NUMBER_ERROR);
  }
  isAnswerNumber(numbers) {
    numbers.forEach((i) => this.isNumber(i, ERROR_MESSAGE.ANSWER_NUMBER_ERROR));
    numbers = numbers.map((i) => Number(i));
    return numbers;
  }

  isInRange(value, errorMessage) {
    const condition = value >= MIN_RANGE && value <= MAX_RANGE;
    if (!condition) {
      throw new Error(errorMessage);
    }
  }
  isAnswerInRange(intNumbers) {
    intNumbers.forEach((i) =>
      this.isInRange(i, ERROR_MESSAGE.ANSWER_RANGE_ERROR)
    );
  }
  isBonusInRange(intBonus) {
    this.isInRange(intBonus, ERROR_MESSAGE.BONUS_RANGE_ERROR);
  }

  isPricePositive(lottoPrice) {
    const condition = lottoPrice > 0;
    if (!condition) {
      throw new Error(ERROR_MESSAGE.PRICE_NEGATIVE_ERROR);
    }
  }
  isPriceDivisible(lottoPrice) {
    const condition = lottoPrice % 1000 == 0;
    if (!condition) {
      throw new Error(ERROR_MESSAGE.PRICE_DIVISIBLE_ERROR);
    }
  }
  isAnswerValidCount(intNumbers) {
    const condition = intNumbers.length == VALID_COUNT;
    if (!condition) {
      throw new Error(ERROR_MESSAGE.ANSWER_COUNT_ERROR);
    }
  }
  isAnswerNotDuplicate(intNumbers) {
    const numberSet = new Set(intNumbers);
    const condition = numberSet.size == VALID_SIZE;
    if (!condition) {
      throw new Error(ERROR_MESSAGE.ANSWER_DUPLICATE_ERROR);
    }
  }
  isBonusNotInAnswer(intBonus, lottoAnswer) {
    lottoAnswer = lottoAnswer.map((i) => Number(i));
    const condition = !lottoAnswer.includes(intBonus);
    if (!condition) {
      throw new Error(ERROR_MESSAGE.BONUS_INANSWER_ERROR);
    }
  }
}

export default Validator;
