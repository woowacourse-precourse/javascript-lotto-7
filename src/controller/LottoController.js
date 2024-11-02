import { InputPriceModel } from "../model/inputPriceModel.js";
import { OutputLottoNumbers } from "../model/OutputLottoModel.js";

export class LottoController {
  constructor() {
    this.inputPriceModel = new InputPriceModel();
    this.outputLottoNumbers = new OutputLottoNumbers();
  }

  async startLottoGame() {
    const price = await this.getPriceResult();
    this.getLottoNumberResult(price);
  }

  async getPriceResult() {
    return await this.inputPriceModel.getPrice();
  }

  getLottoNumberResult(price) {
    return this.outputLottoNumbers.getRandomNumbers(price);
  }
}
