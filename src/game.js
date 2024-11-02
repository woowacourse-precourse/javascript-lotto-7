import Lotto from './Lotto.js';

class Game {
  constructor(lottoCount, winningNumbers, bonusNumber) {
    this.lottoCount = lottoCount;
    this.lottos = [];
    this.winningLotto = new Lotto(winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  async createLotto() {
    for (let i = 1; i <= count; i++) {
      const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push[new Lotto(numbers)];
    }
  }

  play() {
    this.createLotto();
  }
}

export default Game;
