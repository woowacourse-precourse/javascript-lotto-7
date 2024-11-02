import Lotto from './Lotto.js';

class Game {
  constructor(lottoCount) {
    this.lottoCount = lottoCount;
    this.lottos = [];
  }

  async createLotto() {
    for (let i = 1; i <= count; i++) {
      const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push[new Lotto(numbers)];
    }
  }
}

export default Game;
