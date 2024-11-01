//@ts-check

import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { LOTTO } from '../constants/lotto.js';
import User from '../User/User.js';
import { outputView } from '../views/outputView.js';

class Game {
  constructor() {
    this.user = new User();
  }

  async process() {
    const purchaseAmount = await this.user.readUserInput(GAME_MESSAGE.PURCHASE);
    this.lotto(Number(purchaseAmount));
  }

  /**@param {number} purchaseAmount  */
  lotto(purchaseAmount) {
    const lottoCount = purchaseAmount / LOTTO.PRICE_PER;
    outputView.printMessage(`${lottoCount}${GAME_MESSAGE.BOUGHT}`);
    this.printLottos(lottoCount);
  }

  /**@param {number} count  */
  createLotto(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.NUMBERS_PER
      );
      lottos.push(randomNumbers.sort((a, b) => a - b));
    }
    return lottos;
  }

  /**@param {number} count  */
  printLottos(count) {
    const lottos = this.createLotto(count);
    lottos.forEach((lotto) => {
      outputView.printMessage(`[${lotto.join(', ')}]`);
    });
  }
}

export default Game;
