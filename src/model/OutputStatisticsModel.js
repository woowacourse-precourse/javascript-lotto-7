import { OutputView } from "../view/OutputView.js";
import { getCommonNumObj } from "../utils/getCommonNumObj.js";
import { getMatchNumObj } from "../utils/getMatchNumObj.js";
import { getLottoPrizeAmount } from "../utils/getLottoPrizeAmount.js";
import { printProfitRate } from "../utils/printProfitRate.js";

export class OutputStatisticsModel {
  constructor() {
    this.outputView = new OutputView();
  }

  getPrizeStatistics(price, randomNumbers, prizeNumbers, bonusNumber) {
    this.outputView.OutputPrizeStatisticsMessage();
    
    const commonNumbersResult = getCommonNumObj(randomNumbers, prizeNumbers, bonusNumber);
    const prizeStatisticsArray = getMatchNumObj(commonNumbersResult);
    this.outputView.OutputPrizeStatistics(prizeStatisticsArray);
    
    const prizeAmount = getLottoPrizeAmount(prizeStatisticsArray);
    const profitRate = printProfitRate(price, prizeAmount);
    this.outputView.OutputPrizeProfitRate(profitRate);

    return;
  }
}
