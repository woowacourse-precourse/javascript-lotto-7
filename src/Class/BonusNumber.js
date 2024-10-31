import { checkEmpty } from "../feature/validate/checkEmptyInput.js";
import { checkNumber } from "../feature/validate/checkWinNumber.js";

class BonusNumber {
  #bonusNumber;
  #winNumbers;

  constructor(userInput, winNumbers) {
    this.#winNumbers = winNumbers;
    this.#validate(userInput, this.#winNumbers);
  }

  #validate(number, winNumbers) {
    checkEmpty(number);
    checkNumber(number);
    this.#checkDuplicate(number, winNumbers);
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