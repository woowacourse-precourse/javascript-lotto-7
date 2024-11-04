import Lotto from "./Lotto.js";
import { WINNING_NUMBERS_ERROR } from "./Message/Message.js";

class WinningNumbers {
  #winningLotto = null; // 당첨 번호 (Lotto)
  #bonusNumber = null; // 보너스 번호 (number)

  setWinningLotto(winningLottoInput) {
    // split 해서 배열로 만들기
    const winningLottoArr = winningLottoInput.trim().split(",").map(Number);
    this.#winningLotto = new Lotto(winningLottoArr);
  }

  setBonusNumber(bonusNumberInput) {
    const checkNum = Number(bonusNumberInput);
    this.#validateBonusNum(checkNum);
    this.#bonusNumber = checkNum;
  }

  getWinningLotto() {
    return this.#winningLotto.getLotto();
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validateBonusNum(num) {
    this.#checkIsNumber(num);
    this.#checkisInteger(num);
    this.#checkIsRange(num);

    this.#checkDuplicateNum(num);
  }

  #checkIsNumber(num) {
    if (Number.isNaN(num)) {
      throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_NUMBER);
    }
  }

  #checkisInteger(num) {
    if (!Number.isInteger(num)) {
      throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_INTEGER);
    }
  }

  #checkIsRange(num) {
    if (num < 1 || num > 45) {
      throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_RANGE);
    }
  }

  #checkDuplicateNum(num) {
    if (this.getWinningLotto().includes(num)) {
      throw new Error(WINNING_NUMBERS_ERROR.IS_DUPLICATE_NUMBER);
    }
  }
}

export default WinningNumbers;
