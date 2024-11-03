import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class Game {
  constructor(purchasedLottos, winningLotto) {
    this.purchasedLottos = purchasedLottos;
    this.winningLotto = winningLotto;
  }

  play() {
    Console.print(this.lottos);
  }
}

export default Game;
