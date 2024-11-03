import { InputPriceModel } from "../model/inputPriceModel.js";
import { OutputLottoNumbers } from "../model/OutputLottoModel.js";
import { InputPrizeNumModel } from "../model/InputPrizeNumModel.js";

export class LottoController {
  constructor() {
    this.inputPriceModel = new InputPriceModel();
    this.outputLottoNumbers = new OutputLottoNumbers();
    this.inputPrizeNumModel = new InputPrizeNumModel();
  }

  async startLottoGame() {
    const price = await this.getPriceResult();
    this.getLottoNumberResult(price);
    await this.getPrizeNumbersResult();
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
}
