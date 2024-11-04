import getInput from './input/getInput.js';
import printString from './output/printString.js';
import { checkLottoBonusNumber, checkLottoPurchasePrice } from './utils/validatorInput.js';
import Lotto from './Lotto/Lotto.js';
import lottoGenerator from './utils/lottoGenerator.js';
import winningNumbersParser from './input/winningNumbersParser.js';
import {
  calculateLottoStatistics,
  lottoProfitRate,
  printLottoStatistics
} from './utils/lottoStatistics.js';
import LOTTO_CONFIG from './constants/lottoConfig.js';

class App {
  async run() {
    let purchasePrice;
    while (true) {
      try {
        purchasePrice = Number(await getInput('구입금액을 입력해 주세요.\n'));
        checkLottoPurchasePrice(purchasePrice);
        break;
      } catch (error) {
        printString(`${error.message}`);
      }
    }

    const lottoPurchaseAmount = purchasePrice / LOTTO_CONFIG.TICKET_PRICE;
    printString(`\n${lottoPurchaseAmount}개를 구매했습니다.`);

    const lottoList = lottoGenerator(lottoPurchaseAmount);
    lottoList.forEach(lotto => {
      lotto.print();
    });

    let winningNumbers;
    while (true) {
      try {
        winningNumbers = winningNumbersParser(await getInput('\n당첨 번호를 입력해 주세요.\n'));
        break;
      } catch (error) {
        printString(`${error.message}`);
      }
    }

    const winningLotto = new Lotto(winningNumbers);
    let lottoBonusNumber;
    while (true) {
      try {
        lottoBonusNumber = Number(await getInput('\n보너스 번호를 입력해 주세요.\n'));
        checkLottoBonusNumber(winningLotto, lottoBonusNumber);
        break;
      } catch (error) {
        printString(`${error.message}`);
      }
    }

    printString('\n당첨 통계\n---');
    const lottoResults = calculateLottoStatistics(lottoList, winningLotto, lottoBonusNumber);
    printLottoStatistics(lottoResults);
    const profitRate = lottoProfitRate(purchasePrice, lottoResults);
    printString(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
