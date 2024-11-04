import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  static ERROR_MESSAGE = {
    MONEY_INPUT_ERROR: '올바른 숫자를 입력해주세요!',
    MONEY_INPUT_MINIMUM_ERROR: '0이상의 숫자를 입력해주세요!',
    MONEY_INPUT_DIVISIBILITY_ERROR:
      '1000으로 나누어 떨어지는 숫자를 입력해주세요!',
  };

  async run() {
    const lottoCount = await this.inputMoney();
    const lottos = this.getLotto(lottoCount);
  }

  getLotto(lottoCount) {
    const lottos = [];
    Console.print(`${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i += 1) {
      lottos.push(this.getRandomLottoNumber());
    }
    this.sortLotto(lottos);
    lottos.forEach(lotto => Console.print(lotto));
    return lottos;
  }

  sortLotto(lottos) {
    lottos.forEach(lotto => lotto.sort((a, b) => a - b));
    return lottos;
  }

  getRandomLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async inputMoney() {
    const moneyInput = await this.input('구입금액을 입력해 주세요.');
    return this.parseMoney(moneyInput);
  }

  parseMoney(moneyInput) {
    const money = Number(moneyInput);
    this.validateMoney(money);
    return this.calculateLottoCount(money);
  }

  validateMoney(money) {
    if (Number.isNaN(money)) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.MONEY_INPUT_ERROR}`);
    }
    if (money < 0) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.MONEY_INPUT_MINIMUM_ERROR}`);
    }
    if (money % 1000 !== 0) {
      throw Error(
        `[Error] ${App.ERROR_MESSAGE.MONEY_INPUT_DIVISIBILITY_ERROR}`,
      );
    }
  }

  calculateLottoCount(money) {
    return money / 1000;
  }

  async input(msg) {
    const input = await Console.readLineAsync(`${msg}\n`);
    return input;
  }
}

export default App;
