import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGame {
  constructor(quantity) {
    this.quantity = quantity;
    this.lottos = this.createLottos();
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  createLottos() {
    return Array.from(
      { length: this.quantity },
      () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }

  start() {
    this.displayLottos();
    this.inputWinningInfo();
  }

  displayLottos() {
    Console.print(`\n${this.quantity}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => Console.print(lotto.numbers));
  }

  async inputWinningInfo() {
    await this.inputWinningNumbers();
    await this.inputBonusNumber();
  }

  async inputWinningNumbers() {
    const winningInput = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    this.winningNumbers = winningInput.split(',').map((x) => Number(x.trim()));
  }

  async inputBonusNumber() {
    const bonusInput = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    this.bonusNumber = Number(bonusInput);
  }
}

export default LottoGame;
