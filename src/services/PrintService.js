// services/PrintService.js
import uiConstants from '../constants/uiConstants.js';
import { OutputView } from '../views/OutputView.js';

class PrintService {
  printWinningStatistics() {
    OutputView(uiConstants.WINNING_STATISTICS_MESSAGE);
    OutputView(uiConstants.BORDER_LINE);
  }

  printReturn(resultNum) {
    OutputView(`${uiConstants.RETURN}${resultNum}${uiConstants.END}`);
  }

  printWinningMoney(lottoObj, moneyArr) {
    lottoObj.printWinningMoney(moneyArr);
  }

  printError(message) {
    OutputView(message);
  }
}

export default PrintService;
