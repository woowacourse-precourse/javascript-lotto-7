import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from '../Lotto.js';

import { LOTTO_PRICE } from '../constants/config.js';

class LottoGameService {
  constructor() {
    this.lottos = [];
  }

  createLottoQuantity(userMoney) {
    return userMoney / LOTTO_PRICE;
  }

  generateLotto() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(randomNumber);
  }

  generateLottos(quantity) {
    const lottos = [];

    for (let i = 0; i < quantity; i++) {
      lottos.push(this.generateLotto());
    }

    return lottos;
  }
}

export default LottoGameService;
