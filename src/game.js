import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
class Game {
  constructor(lottoCount, winningNumbers, bonusNumber) {
    this.lottoCount = lottoCount;
    this.lottos = [];
    this.winningLotto = new Lotto(winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  play() {
    this.createLotto();
    Console.print(this.lottos);
  }
}

export default Game;
