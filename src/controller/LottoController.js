import { InputPriceModel } from "../model/inputPriceModel.js";
import { OutputLottoNumbers } from "../model/OutputLottoModel.js";
import { InputPrizeNumModel } from "../model/InputPrizeNumModel.js";
import { InputBonusNumModel } from "../model/InputBonusNumModel.js";
import { OutputStatisticsModel } from "../model/OutputStatisticsModel.js";

export class LottoController {
  constructor() {
    this.inputPriceModel = new InputPriceModel();
    this.outputLottoNumbers = new OutputLottoNumbers();
    this.inputPrizeNumModel = new InputPrizeNumModel();
    this.inputBonusNumModel = new InputBonusNumModel();
    this.outputStatisticsModel = new OutputStatisticsModel();
  }

  async startLottoGame() {
    const price = await this.getPriceResult();
    const randomNumbers = this.getLottoNumberResult(price);
    const prizeNumbers = await this.getPrizeNumbersResult();
    const bonusNumber = await this.getBonusNumberResult();
    this.getLottoStatistics(price, randomNumbers, prizeNumbers, bonusNumber);
  }

  async getPriceResult() {
    return await this.inputPriceModel.getPrice();
  }

  getLottoNumberResult(price) {
    return this.outputLottoNumbers.getRandomNumbers(price);
  }

  async getPrizeNumbersResult() {
    return await this.inputPrizeNumModel.getPrizeNumbers();
  }

  async getBonusNumberResult() {
    return await this.inputBonusNumModel.getBonusNumber();
  }

  getLottoStatistics(price, randomNumbers, prizeNumbers, bonusNumber) {
    return this.outputStatisticsModel.getPrizeStatistics(
      price,
      randomNumbers,
      prizeNumbers,
      bonusNumber
    );
  }
}
