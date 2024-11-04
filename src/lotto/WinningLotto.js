import { MAX_NUMBER } from "../utils/constants.js";

// 당첨 번호 및 보너스 번호 관리
class WinningLotto {
  #winningNumbersArray;

  constructor() {
    this.#winningNumbersArray = Array(MAX_NUMBER + 1).fill(0);
  }

  // 당첨 번호 가공
  setWinningNumbers(winningNumbers) {
    winningNumbers.forEach((number) => {
      this.#winningNumbersArray[number] = 1; // 해당 인덱스 === 당첨 번호를 1로 변경
    });
  }

  // 보너스 번호 가공
  setBonusNumber(bonusNumber) {
    this.#winningNumbersArray[bonusNumber] = 2; // 보너스 번호는 2로 표시
  }

  getWinningNumbersArray() {
    return this.#winningNumbersArray;
  }
}

export default WinningLotto;
