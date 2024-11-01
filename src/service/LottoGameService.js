import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from '../Lotto.js';

import { LOTTO_PRICE } from '../constants/config.js';

class LottoGameService {
  constructor() {
    this.lottos = [];
    this.prizes = {
      1: {
        matchCount: 6, bonus: false, money: 2000000000, count: 0,
      },
      2: {
        matchCount: 5, bonus: true, money: 30000000, count: 0,
      },
      3: {
        matchCount: 5, bonus: false, money: 1500000, count: 0,
      },
      4: {
        matchCount: 4, bonus: false, money: 50000, count: 0,
      },
      5: {
        matchCount: 3, bonus: false, money: 5000, count: 0,
      },
    };
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
