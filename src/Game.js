const MissionUtils = require('@woowacourse/mission-utils');

class Game {
  #lottos = [];
  #winningNumbers;

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
  async setWinningNumbers() {
    const numbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(numbers);
    this.#winningNumbers = new WinningNumbers(numbers, bonusNumber);
  }

  async #getWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    return InputValidator.validateWinningNumbers(input);
  }

  async #getBonusNumber(winningNumbers) {
    const input = await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    return InputValidator.validateBonusNumber(input, winningNumbers);
  }
}

module.exports = {
  InputValidator,
  Lotto,
  Game,
};
