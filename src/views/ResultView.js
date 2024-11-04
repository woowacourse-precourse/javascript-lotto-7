import { Console } from "@woowacourse/mission-utils";
import { RUN_MESSAGE } from "../constants/runMessages.js";
import { calculateLottoResults } from "../services/calculateLottoResults.js";
import { calculateWinningDetails } from "../services/calculateWinningDetails.js";
import { lottoResultPrint } from "../services/lottoResultPrint.js";
import { calculateEarningRate } from "../services/calculateEarningRate.js";

class ResultView {
  displayResultMessage() {
    Console.print(RUN_MESSAGE.WINNING_STATISTICS);
    Console.print(RUN_MESSAGE.BORDERLINE);
  }

  displayResult(winningNumbers, lottoNumbers, purchaseAmount, bonusNumber) {
    const lottoResults = calculateLottoResults(
      winningNumbers,
      lottoNumbers,
      bonusNumber
    );
    const winningDetails = calculateWinningDetails(lottoResults, bonusNumber);
    lottoResultPrint(winningDetails);
    const earningRate = calculateEarningRate(purchaseAmount, winningDetails);
    Console.print(earningRate);
  }
}

export default ResultView;
