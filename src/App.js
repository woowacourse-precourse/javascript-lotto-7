import { Console } from '@woowacourse/mission-utils';
import {
  bonusLottoValidation,
  purchaseAmountValidation,
  winningLottoValidation,
} from './inputHandler/inputValidation.js';
import Lotto from './Lotto.js';
import userLottoPrize from './lottoHandler/userLottoPrize.js';
import calculateUserPrize from './calculateHandler/calculateUserPrize.js';

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

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Array.from(
        { length: 6 },
        () => Math.floor(Math.random() * 45) + 1,
      );
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }

  async run() {
    try {
      const purchaseAmount = await this.readPurchaseAmount();
      const lottoCount = Math.floor(purchaseAmount / 1000);
      Console.print(`${lottoCount}개를 구매했습니다.`);

      const userLottos = this.generateLottos(lottoCount);
      userLottos.forEach((lotto) => Console.print(lotto));

      const winningLotto = await this.readWinningLotto();
      const bonusLotto = await this.readBonusLotto(winningLotto);

      const prizeResults = userLottoPrize(userLottos, winningLotto, bonusLotto);
      const yieldRate = calculateUserPrize(prizeResults, purchaseAmount);

      Console.print('\n당첨 통계\n---');
      prizeResults.forEach((result, index) => {
        Console.print(
          `${result.matchCount}개 일치 (${result.prize}원) - ${result.count}개`,
        );
      });
      Console.print(`총 수익률은 ${yieldRate.toFixed(1)}%입니다.`);
    } catch (error) {
      throw new Error('[ERROR] ' + error);
    }
  }
}

export default App;
