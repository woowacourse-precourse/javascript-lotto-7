import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGES, PROMPT_MESSAGES } from '../constants/messages.js';

class OutputView {
  printPurchaseQuantity(purchaseQuantity) {
    Console.print(`\n${purchaseQuantity}${PROMPT_MESSAGES.OUTPUT.PURCHACE_QUANTITY}`);
  }

  printLotto(lotto) {
    const lottoString = lotto.join(', ');
    Console.print(`[${lottoString}]`);
  }

  printWinningResult(winningResult) {
    Console.print(LOTTO_MESSAGES.HEADER);
    Console.print(`${LOTTO_MESSAGES.THREE_MATCH}${winningResult['3']}개`);
    Console.print(`${LOTTO_MESSAGES.FOUR_MATCH}${winningResult['4']}개`);
    Console.print(`${LOTTO_MESSAGES.FIVE_MATCH}${winningResult['5']}개`);
    Console.print(`${LOTTO_MESSAGES.FIVE_BONUS_MATCH}${winningResult['5.5']}개`);
    Console.print(`${LOTTO_MESSAGES.SIX_MATCH}${winningResult['6']}개`);
  }

  printRateOfRevenue(rateOfRevenue) {
    Console.print(`${LOTTO_MESSAGES.RATE_OF_REVENUE}${rateOfRevenue}%입니다.`);
  }

  printError(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
