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

  isNumber(value, errorMessage) {
    const condition = !Number.isNaN(Number(value, 10));
    if (!condition) {
      console.log(value);
      throw new Error(errorMessage);
    }
  }
  isPriceNumber(lottoPrice) {
    this.isNumber(lottoPrice, this.PRICE_NUMBER_ERROR);
  }
  isBonusAsNumber(bonusInput) {
    this.isNumber(bonusInput, this.BONUS_NUMBER_ERROR);
  }
  isAnswerNumber(numbers) {
    numbers.forEach((i) => this.isNumber(i, this.ANSWER_NUMBER_ERROR));
  }

  isInRange(value, errorMessage) {
    const valueNumber = Number(value);
    const condition = valueNumber >= 1 && valueNumber <= 45;
    if (!condition) {
      throw new Error(errorMessage);
    }
  }
  isAnswerInRange(intNumbers) {
    intNumbers.forEach((i) => this.isInRange(i, this.ANSWER_RANGE_ERROR));
  }
  isBonusInRange(bonusInput) {
    this.isInRange(bonusInput, this.BONUS_RANGE_ERROR);
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
  isAnswerValidCount(numbers) {
    const intNumbers = numbers.map((i) => Number(i));
    const condition = numbers.length == 6;
    if (!condition) {
      throw new Error(this.ANSWER_COUNT_ERROR);
    }
    return intNumbers;
  }
  isAnswerNotDuplicate(intNumbers) {
    const numberSet = new Set(intNumbers);
    const condition = numberSet.size == 6;
    if (!condition) {
      throw new Error(this.ANSWER_DUPLICATE_ERROR);
    }
  }
}

export default Validator;
