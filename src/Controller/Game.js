//@ts-check

import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { LOTTO } from '../constants/lotto.js';
import User from '../User/User.js';

class Game {
  constructor() {
    this.user = new User();
  }
  async process() {
    const purchaseAmount = await this.user.readUserInput(GAME_MESSAGE.PURCHASE);
  }
}

export default Game;
