class WinningLotto {
  #winningNumbers;

  #bonusNumber;

  /**
   * @constructor
   * @param {number[]} winningNumbers - 당첨 번호 배열
   * @param {number} bonusNumber - 보너스 번호
   */
  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  /**
   * 당첨 번호 배열을 반환한다.
   * @returns {number[]} 당첨 번호 배열
   */
  getWinningNumbers() {
    return this.#winningNumbers;
  }

  /**
   * 보너스 번호를 반환한다.
   * @returns {number} 보너스 번호
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
