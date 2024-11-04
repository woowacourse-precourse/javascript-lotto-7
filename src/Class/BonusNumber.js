import checkDecimal from "../feature/validate/checkDecimal.js";
import { checkEmpty } from "../feature/validate/checkEmptyInput.js";
import { checkNumber } from "../feature/validate/checkWinNumber.js";

class BonusNumber {
  #bonusNumber;
  #winNumbers;

  constructor(userInput, winNumbers) {
    this.#winNumbers = winNumbers;
    this.#validate(userInput, this.#winNumbers);
    this.#bonusNumber = Number(userInput);
  }

  #validate(number, winNumbers) {
    checkEmpty(number);
    checkDecimal(number);
    const PASRED_NUMBER = Number(number);
    checkNumber(PASRED_NUMBER);
    this.#checkDuplicate(PASRED_NUMBER, winNumbers);
  }

  #checkDuplicate(number, winNumbers) {
    const isDuplicate = winNumbers.includes(number);

    if(isDuplicate) {
      throw new Error('[ERROR] 입력하신 보너스 번호가 당첨 번호와 중복됩니다.');
    }
  }

  get getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;