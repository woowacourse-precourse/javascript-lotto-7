import { Random } from "@woowacourse/mission-utils";

export default class Lotto {
  static MIN_LOTTO_NUMBER = 1;
  static MAX_LOTTO_NUMBER = 45;
  #winningNumbers;
  #bonusNumber;

  setWinningAndBonusNumbers(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  static generateLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(Lotto.MIN_LOTTO_NUMBER, Lotto.MAX_LOTTO_NUMBER, 6);
    return lottoNumbers;
  }

  print() {
    console.log(this.#winningNumbers, this.#bonusNumber);
  }

  static checkWinningNumber(LottoNumbers) {

  }
}