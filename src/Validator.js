export default class Validator {
  #PRICE_ERROR = "[ERROR] 구입금액은 1000원 단위의 정수를 입력해 주세요.";
  #NUMBERS_RANGE_ERROR = "[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.";
  #NUMBERS_LENGTH_ERROR = "[ERROR] 쉼표를 포함한 숫자 6자리를 입력해 주세요.";
  #REGEX_WITHOUT_COMMA = /[^\w,]/;
  #BONUS_NUMBER_ERROR = "[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 합니다.";
  #DUPLICATE_NUMBER_ERROR = "[ERROR] 중복되지 않는 숫자를 입력해야 합니다.";

  validatePrice(inputPrice, lottoPrice) {
    this.validateInteger(inputPrice);
    if (inputPrice % lottoPrice !== 0) {
      throw new Error(this.#PRICE_ERROR);
    }
    
  }

  validateInteger(input) {
    if (input===''|| isNaN(input) || input.toString().includes(".")) {
      throw new Error(this.#PRICE_ERROR);
    }
  }

  validateWinningNumber(input) {
    this.validateSeparator(input);
    let winningNumber = input.split(",");
    this.validateDuplicateNumber(winningNumber);
    if (winningNumber.length !== 6) {
      throw new Error(this.#NUMBERS_LENGTH_ERROR);
    }
    winningNumber.forEach((element) => {
      Number(this.validateNumberRange(element, this.#NUMBERS_RANGE_ERROR));
    });
  }

  validateSeparator(input) {
    const regex = new RegExp(`^(,|${this.#REGEX_WITHOUT_COMMA})`);
    if (
      input.length > 17 ||
      input.indexOf(this.#REGEX_WITHOUT_COMMA) !== -1 ||
      regex.test(input)
    ) {
      throw new Error(this.#NUMBERS_LENGTH_ERROR);
    }
  }

  validateNumberRange(number, errorMessage) {
    if (number < 1 || number > 45) {
      throw new Error(errorMessage);
    }
  }

  validateDuplicateNumber(array) {
    if (array.some((item, index) => array.indexOf(item) !== index)) {
      throw new Error(this.#DUPLICATE_NUMBER_ERROR);
    }
  }

  validateBonusNumnber(number, winningNumbers) {
    this.validateInteger(number, this.#BONUS_NUMBER_ERROR);
    this.validateNumberRange(Number(number), this.#BONUS_NUMBER_ERROR);
    if (winningNumbers.includes(Number(number))) {
      throw new Error(this.#DUPLICATE_NUMBER_ERROR);
    }
  }
}
