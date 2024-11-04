import Input from './View/Input.js';
import Output from './View/OutPut.js';
import { makeInputToPurchaseMoneyNumber } from './Check/PurchaseMoney.js';
import {
  getValidBonusNumber,
  getValidWinningNumberList,
} from './Check/WinningNumbers.js';

import Lotto from './Lotto.js';
import { Console } from '@woowacourse/mission-utils';

const MatchCount = {
  FIRST: 6,
  SECOND: 5,
  THIRD: 5,
  FOURTH: 4,
  FIFTH: 3,
};
const UNIT = 1000;
const INIT_NUMBER = 0;

const WINNER_PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

class App {
  async run() {
    const lottoPurchaseMoneyInput = await Input.getPurchaseMoney();
    const lottoPurchaseMoney = makeInputToPurchaseMoneyNumber(
      lottoPurchaseMoneyInput
    );

    const lottoTicketCount = lottoPurchaseMoney / UNIT;

    const winningNumbersInput = await Input.getLottoWinningNumbers();
    const winningNumbers = getValidWinningNumberList(winningNumbersInput);

    const bonusNumberInput = await Input.getBonusNumber();
    const bonusNumber = getValidBonusNumber(bonusNumberInput, winningNumbers);

    let winnerRank = {
      FIRST: INIT_NUMBER,
      SECOND: INIT_NUMBER,
      THIRD: INIT_NUMBER,
      FOURTH: INIT_NUMBER,
      FIFTH: INIT_NUMBER,
    };

    const lotto = new Lotto(winningNumbers);

    const tickets = lotto.makeLottoTickets(lottoTicketCount);

    Output.printLottoTickets(lottoTicketCount, tickets);

    // tickets.forEach의 사용 예
    tickets.forEach((ticket) => {
      const matchInfo = lotto.calculateMatchInfo(ticket, bonusNumber);

      //TODO:updateWinnerRankCount 로직 확인
      winnerRank = lotto.updateWinnerRankCount(matchInfo, winnerRank);
    });
    Output.printWinningStatistics();

    if (winnerRank) {
      for (let key of Object.keys(winnerRank).reverse()) {
        if (key === 'SECOND') {
          Output.printWinningStatisticWithBonusBall(
            MatchCount[key],
            WINNER_PRIZE[key].toLocaleString(),
            winnerRank[key]
          );
          continue;
        }

        Output.printWinningStatistic(
          MatchCount[key],
          WINNER_PRIZE[key].toLocaleString(),
          winnerRank[key]
        );
      }
    }

    let sumOfPrize = 0;
    for (let key of Object.keys(winnerRank)) {
      sumOfPrize += WINNER_PRIZE[key] * winnerRank[key];
    }

    const profitRate = lotto.calculateProfitRate(
      lottoPurchaseMoney,
      sumOfPrize
    );
    Output.printProfitRate(profitRate);
  }
}

export default App;
