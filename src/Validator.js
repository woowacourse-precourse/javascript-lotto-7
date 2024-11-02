export default class Validator {
  #PRICE_ERROR = "[ERROR] 1000원 단위의 정수를 입력해 주세요.";
  #WINNING_NUMBERS_ERROR =
    "[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.";
  #WINNING_NUMBERS_LENGTH_ERROR =
    "[ERROR] 쉼표를 포함한 숫자 6자리를 입력해 주세요.";
  #REGEX = /[^\w,]/g;

  validatePrice(inputPrice, lottoPrice) {
    if (
      inputPrice % lottoPrice !== 0 ||
      isNaN(inputPrice) ||
      Number.isInteger(inputPrice) ||
      inputPrice.toString().includes(".")
    ) {
      throw new Error(this.#PRICE_ERROR);
    }
  }

  validateWinningNumber(input) {
    this.validateSeparator(input);
    let winningNumber = input.split(",");
    {
      if (winningNumber.length !== 6) {
        throw new Error(this.#WINNING_NUMBERS_LENGTH_ERROR);
      }
      winningNumber.forEach((element) => {
        Number(this.validateNumberArrayElement(element));
      });
    }
  }

  validateSeparator(input) {
    if (
      input.length > 11 ||
      input.indexOf(this.#REGEX) !== -1 ||
      input.startsWith(",")
    ) {
      throw new Error(this.#WINNING_NUMBERS_LENGTH_ERROR);
    }
  }

  validateNumberArrayElement(number) {
    if (number < 1 || number > 45) {
      throw new Error(this.#WINNING_NUMBERS_ERROR);
    }
  }
}
