const MissionUtils = require('@woowacourse/mission-utils');

class Game {
  #lottos = [];

  async purchaseLottos(amount) {
    const count = amount / 1000;
    for (let i = 0; i < count; i++) {
      const numbers = await MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      this.#lottos.push(new Lotto(numbers));
    }
    return count;
  }

  getLottos() {
    return [...this.#lottos];
  }

  printPurchaseResult(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      MissionUtils.Console.print(lotto.toString());
    });
  }
}

module.exports = {
  InputValidator,
  Lotto,
  Game,
};
