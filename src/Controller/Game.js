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
    this.createLotto(lottoCount);
  }

  /**@param {number} count  */
  createLotto(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottos.push(randomNumbers.sort((a, b) => a - b));
    }
    return lottos;
  }
}

export default Game;
