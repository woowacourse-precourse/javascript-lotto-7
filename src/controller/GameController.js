import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constant/gameMessage.js';
import PurchaseAmount from '../model/PurchaseAmount.js';
import { getUserInput } from '../view/getUserInput.js';
import Lotto from '../model/Lotto.js';
import { TotalLotto } from '../model/TotalLotto.js';
import { getCorrectInput } from '../util/getCorrectInput.js';
import WinningLotto from '../model/WinningLotto.js';
import { WinningResult } from '../model/WinningResult.js';
import PrintWinningStatistics from '../view/printWinningStatistics.js';

export class GameController {
  async play() {
    const purchaseAmount = await getCorrectInput(async (value, message) => {
      const amount = await getUserInput(GAME_MESSAGE.INPUT_PURCHASE_PRICE);
      return new PurchaseAmount(amount);
    });

    const lottoCount = purchaseAmount.getLottoCount();

    Console.print(`${lottoCount}${GAME_MESSAGE.PURCHASE_AMOUNT}`);
    const totalLotto = new TotalLotto();

    for (let i = 0; i < lottoCount; i++) {
      const lotto = await getCorrectInput(Lotto.makeLotto);
      totalLotto.storeLotto(lotto);
    }

    totalLotto.totalLotto.forEach((lotto) => {
      Console.print(
        `[${lotto
          .getNumbers()
          .sort((a, b) => a - b)
          .join(', ')}]`,
      );
    });

    const winningLotto = await getCorrectInput(async () => {
      const winningNumber = await getUserInput(
        GAME_MESSAGE.INPUT_WINNING_NUMBER,
      );
      const bonusNumber = await getUserInput(GAME_MESSAGE.INPUT_BONUS_NUMBER);

      return new WinningLotto(
        winningNumber.split(',').map(Number),
        Number(bonusNumber),
      );
    });

    const winningResult = new WinningResult();
    totalLotto.totalLotto.forEach((lotto) => {
      const winningDetail = winningLotto.countWinningNumber(lotto);
      winningResult.storeTotalWinning(...winningDetail);
    });

    const printWinningStatistics = new PrintWinningStatistics(
      winningResult.totalWinning,
      winningResult.getReturnRate(purchaseAmount.getAmount()),
    );

    printWinningStatistics.printWinningStatistic();
    printWinningStatistics.printWinningDetail();
    printWinningStatistics.printReturnRate();
  }
}
