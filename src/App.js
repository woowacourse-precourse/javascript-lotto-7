import { Console } from '@woowacourse/mission-utils';
import {
  bonusLottoValidation,
  purchaseAmountValidation,
  winningLottoValidation,
} from './inputHandler/inputValidation.js';
import lottoMachine from './lottoHandler/lottoMachine.js';
import calculateUserPrize from './lottoHandler/calculateUserPrize.js';

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

  async run() {
    try {
      const myLottos = await this.readPurchaseAmount();
      const winningLotto = await this.readWinningLotto();
      const bonusLotto = await this.readBonusLotto(winningLotto);
      const matchedNumbers = lottoMachine(winningLotto, myLottos, bonusLotto);
      const calculateLotto = calculateUserPrize(matchedNumbers);

      Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${calculateLotto['3'] || 0}개
4개 일치 (50,000원) - ${calculateLotto['4'] || 0}개
5개 일치 (1,500,000원) - ${calculateLotto['5'] || 0}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${calculateLotto['7'] || 0}개
6개 일치 (2,000,000,000원) - ${calculateLotto['6'] || 0}개
`);
    } catch (error) {
      throw new Error('[ERROR] ' + error);
    }
  }
}

export default App;
