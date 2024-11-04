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


class App {
  async run() {
    const purchasePrice = Number(await getInput('구입금액을 입력해 주세요.\n'));
    checkLottoPurchasePrice(purchasePrice);
    const lottoPurchaseAmount = purchasePrice/1000;
    printString(`\n${lottoPurchaseAmount}개를 구매했습니다.`);

    const lottoList = lottoGenerator(lottoPurchaseAmount);
    lottoList.forEach(lotto => {
      lotto.print();
    })


    const winningNumbers = winningNumbersParser(await getInput('\n당첨 번호를 입력해 주세요.\n'));
    const winningLotto = new Lotto(winningNumbers);
    const lottoBonusNumber = Number(await getInput('\n보너스 번호를 입력해 주세요.\n'));
    checkLottoBonusNumber(winningLotto, lottoBonusNumber);

    printString('\n당첨 통계');
    printString('\n---');
    const lottoResults= calculateLottoStatistics(lottoList, winningLotto, lottoBonusNumber);
    printLottoStatistics(lottoResults);
    const profitRate = lottoProfitRate(purchasePrice, lottoResults)
    printString(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
