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
    const purchasePrice = await this.#getPurchasePrice();
    const lottoPurchaseAmount = purchasePrice / LOTTO_CONFIG.TICKET_PRICE;
    printString(`\n${lottoPurchaseAmount}개를 구매했습니다.`);

    const lottoList = lottoGenerator(lottoPurchaseAmount);
    lottoList.forEach(lotto => {
      lotto.print();
    });

    const winningNumbers = await this.#getWinningNumbers();
    const winningLotto = new Lotto(winningNumbers);

    const lottoBonusNumber = await this.#getBonusNumber(winningLotto);

    printString('\n당첨 통계\n---');
    const lottoResults = calculateLottoStatistics(lottoList, winningLotto, lottoBonusNumber);
    printLottoStatistics(lottoResults);
    const profitRate = lottoProfitRate(purchasePrice, lottoResults);
    printString(`총 수익률은 ${profitRate}%입니다.`);
  }

  async #getPurchasePrice() {
    let purchasePrice;
    while (true) {
      try {
        purchasePrice = Number(await getInput('구입금액을 입력해 주세요.\n'));
        checkLottoPurchasePrice(purchasePrice);
        return purchasePrice; // 유효한 입력이면 반환
      } catch (error) {
        printString(`${error.message}`);
      }
    }
  }

  async #getWinningNumbers() {
    let winningNumbers;
    while (true) {
      try {
        winningNumbers = winningNumbersParser(await getInput('\n당첨 번호를 입력해 주세요.\n'));
        return winningNumbers; // 유효한 입력이면 반환
      } catch (error) {
        printString(`${error.message}`);
      }
    }
  }

  async #getBonusNumber(winningLotto) {
    let lottoBonusNumber;
    while (true) {
      try {
        lottoBonusNumber = Number(await getInput('\n보너스 번호를 입력해 주세요.\n'));
        checkLottoBonusNumber(winningLotto, lottoBonusNumber);
        return lottoBonusNumber; // 유효한 입력이면 반환
      } catch (error) {
        printString(`${error.message}`);
      }
    }
  }
}

export default App;
