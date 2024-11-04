import { Console, MissionUtils } from '@woowacourse/mission-utils';

class BuyLotto {
  getLotto(lottoCount) {
    const lottos = [];
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i += 1) {
      lottos.push(this.getRandomLottoNumber());
    }
    this.sortLotto(lottos);
    return lottos;
  }

  sortLotto(lottos) {
    lottos.forEach(lotto => lotto.sort((a, b) => a - b));
    return lottos;
  }

  getRandomLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  calculateLottoCount(money) {
    return money / 1000;
  }
}

export default BuyLotto;
