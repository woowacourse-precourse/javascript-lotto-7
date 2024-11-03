import { InputPriceModel } from "../model/inputPriceModel.js";
import { OutputLottoNumbers } from "../model/OutputLottoModel.js";
import { InputPrizeNumModel } from "../model/InputPrizeNumModel.js";
import { InputBonusNumModel } from "../model/InputBonusNumModel.js";

export class LottoController {
  constructor() {
    this.inputPriceModel = new InputPriceModel();
    this.outputLottoNumbers = new OutputLottoNumbers();
    this.inputPrizeNumModel = new InputPrizeNumModel();
    this.inputBonusNumModel = new InputBonusNumModel();
  }

  async startLottoGame() {
    const price = await this.getPriceResult();
    this.getLottoNumberResult(price);
    await this.getPrizeNumbersResult();
    await this.getBonusNumberResult();
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
}
