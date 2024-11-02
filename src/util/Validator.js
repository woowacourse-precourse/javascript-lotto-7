const MIN_RANGE = 1;
const MAX_RANGE = 45;
const VALID_COUNT = 6;
const VALID_SIZE = 6;

class Validator {
  PRICE_NUMBER_ERROR = "[ERROR] 로또 구입 금액은 숫자만 입력할 수 있습니다.";
  PRICE_NEGATIVE_ERROR = "[ERROR] 로또 구입 금액은 양수로 입력해 주세요.";
  PRICE_DIVISIBLE_ERROR =
    "[ERROR] 로또 구입 금액은 1000원 단위로만 입력 가능합니다.";
  ANSWER_NUMBER_ERROR = "[ERROR] 로또 번호는 숫자만 입력할 수 있습니다.";
  ANSWER_RANGE_ERROR = "[ERROR] 로또 번호는 1~45 사이 숫자만 가능합니다.";
  ANSWER_COUNT_ERROR = "[ERROR] 로또 번호는 6개여야 합니다.";
  ANSWER_DUPLICATE_ERROR =
    "[ERROR] 로또 번호는 중복된 숫자를 가질 수 없습니다.";
  BONUS_NUMBER_ERROR = "[ERROR] 보너스 번호는 숫자만 입력할 수 있습니다.";
  BONUS_RANGE_ERROR = "[ERROR] 보너스 번호는 1~45 사이 숫자만 가능합니다.";
  BONUS_INANSWER_ERROR =
    "[ERROR] 해당 보너스 번호는 이미 로또 번호에 존재합니다.";

  isNumber(value, errorMessage) {
    const condition = !Number.isNaN(Number(value, 10));
    if (!condition) {
      throw new Error(errorMessage);
    }
    return Number(value);
  }
  isPriceNumber(lottoPrice) {
    return this.isNumber(lottoPrice, this.PRICE_NUMBER_ERROR);
  }
  isBonusAsNumber(bonusInput) {
    return this.isNumber(bonusInput, this.BONUS_NUMBER_ERROR);
  }
  isAnswerNumber(numbers) {
    numbers.forEach((i) => this.isNumber(i, this.ANSWER_NUMBER_ERROR));
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
    intNumbers.forEach((i) => this.isInRange(i, this.ANSWER_RANGE_ERROR));
  }
  isBonusInRange(intBonus) {
    this.isInRange(intBonus, this.BONUS_RANGE_ERROR);
  }

  isPricePositive(lottoPrice) {
    const condition = lottoPrice > 0;
    if (!condition) {
      throw new Error(this.PRICE_NEGATIVE_ERROR);
    }
  }
  isPriceDivisible(lottoPrice) {
    const condition = lottoPrice % 1000 == 0;
    if (!condition) {
      throw new Error(this.PRICE_DIVISIBLE_ERROR);
    }
  }
  isAnswerValidCount(intNumbers) {
    const condition = intNumbers.length == VALID_COUNT;
    if (!condition) {
      throw new Error(this.ANSWER_COUNT_ERROR);
    }
  }
  isAnswerNotDuplicate(intNumbers) {
    const numberSet = new Set(intNumbers);
    const condition = numberSet.size == VALID_SIZE;
    if (!condition) {
      throw new Error(this.ANSWER_DUPLICATE_ERROR);
    }
  }
  isBonusNotInAnswer(intBonus, lottoAnswer) {
    lottoAnswer = lottoAnswer.map((i) => Number(i));
    const condition = !lottoAnswer.includes(intBonus);
    if (!condition) {
      throw new Error(this.BONUS_INANSWER_ERROR);
    }
  }
}

export default Validator;
