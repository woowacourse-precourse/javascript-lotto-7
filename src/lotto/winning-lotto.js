import Lotto from './Lotto.js';

class WinningLotto {
  constructor(winningNumbers, bonusNumber) {
    this.winningLotto = new Lotto(winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  getWinningNumbers() {
    return this.winningLotto.getNumbers();
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

export default WinningLotto;
