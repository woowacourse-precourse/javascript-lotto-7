import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';
class Game {
  constructor(lottoCount, winningNumbers, bonusNumber) {
    this.lottoCount = lottoCount;
    this.lottos = [];
    this.winningLotto = new Lotto(winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  async createLotto() {
    for (let i = 1; i <= this.lottoCount; i++) {
      const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
  }

  play() {
    this.createLotto();
    Console.print(this.lottos);
  }
}

export default Game;
