import { InputPriceModel } from "../model/inputPriceModel.js";

export class LottoController {
  constructor () {
    this.inputPriceModel = new InputPriceModel()
  }

  async startLottoGame () {
    await this.inputPriceModel.getPrice();

  }

}