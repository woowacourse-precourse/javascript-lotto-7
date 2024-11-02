import { Console } from '@woowacourse/mission-utils';
import { validatePurchaseAmount, validateBonusNumber } from './Validation.js';
import { purchaseLotto, printPurchasedLotto } from './PurchaseLotto.js';
import Lotto from './Lotto.js';
import Result from './Result.js';

class App {
  async run() {
    try {
      const purchaseAmountInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      validatePurchaseAmount(purchaseAmountInput);
      const purchaseAmount = Number.parseInt(purchaseAmountInput, 10);

      const purchaseCount = purchaseAmount / 1000;
      Console.print(`\n${purchaseCount}개를 구매했습니다.`);
      const lottoList = purchaseLotto(purchaseCount);
      printPurchasedLotto(lottoList);

      const winningNumbersInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      const parsedWinningNumbers = winningNumbersInput
      .split(',')
      .map((num) => num.trim())
      .filter((num) => num.length > 0);
      const winningLotto = new Lotto(parsedWinningNumbers); // 당첨 번호 입력 유효성 검사
      const winningNumbers = parsedWinningNumbers.map((num) => Number.parseInt(num, 10));

      const bonusNumberInput = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      validateBonusNumber(bonusNumberInput);
      const bonusNumber = Number.parseInt(bonusNumberInput, 10);

      const result = new Result();
      result.calcRanking(lottoList, winningNumbers, bonusNumber);
      result.calcRateOfReturn(purchaseAmount);
      result.printResult();
    } catch(error) {
      Console.print(error.message);
    }
  }
}

export default App;
