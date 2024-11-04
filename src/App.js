import { Console } from '@woowacourse/mission-utils';
import {
  bonusLottoValidation,
  purchaseAmountValidation,
  winningLottoValidation,
} from './inputHandler/inputValidation.js';
import Lotto from './Lotto.js';
import calculateUserPrize, {
  prizeTable,
} from './calculateHandler/calculateUserPrize.js';

class App {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n',
    );
    return purchaseAmountValidation(purchaseAmount);
  }

  async readWinningLotto() {
    const winningLottoInput = await Console.readLineAsync(
      '당첨 번호 6자리 숫자를 쉽표로 구분하여 입력해 주세요.\n',
    );
    return winningLottoValidation(winningLottoInput);
  }

  async readBonusLotto(winningLotto) {
    const bonusLotto = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n',
    );
    return bonusLottoValidation(bonusLotto, winningLotto);
  }

  generateUserLottos(count) {
    return Array.from({ length: count }, () => Lotto.generateRandomLotto());
  }

  async run() {
    try {
      const purchaseAmount = await this.readPurchaseAmount();
      const lottoCount = Math.floor(Number(purchaseAmount) / 1000);
      Console.print(`${lottoCount}개를 구매했습니다.`);

      const userLottos = this.generateUserLottos(lottoCount);
      userLottos.forEach((lotto) =>
        Console.print(`[${lotto.getNumbers().join(', ')}]`),
      );

      const winningLotto = await this.readWinningLotto();
      const bonusLotto = await this.readBonusLotto(winningLotto);

      const { results, yieldRate } = calculateUserPrize(
        userLottos,
        winningLotto,
        bonusLotto,
        purchaseAmount,
      );

      const formatter = new Intl.NumberFormat();

      Console.print('\n당첨 통계\n---');
      // 모든 당첨 등급을 출력하여 테스트가 예상하는 출력과 일치하도록 보장
      [3, 4, 5, '5_bonus', 6].forEach((key) => {
        const count = results[key] || 0; // 당첨 내역이 없는 등급도 0으로 출력
        const matchDesc =
          key === '5_bonus' ? '5개 일치, 보너스 볼 일치' : `${key}개 일치`;
        Console.print(
          `${matchDesc} (${formatter.format(prizeTable[key])}원) - ${count}개`,
        );
      });

      Console.print(`총 수익률은 ${yieldRate}%입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
