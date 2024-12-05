import { InputPriceModel } from "./inputPriceModel.js";
import { OutputView } from "../view/OutputView.js";
import { createLottoNumberArray } from "../utils/createLottoNumberArray.js";

export class OutputLottoNumbers {
  constructor() {
    this.inputPriceModel = new InputPriceModel();
    this.outputView = new OutputView();
  }

  getRandomNumbers(getPriceResult) {
    const purchaseQuantity = getPriceResult / 1000;
    this.outputView.OutputBoughtNumber(purchaseQuantity);
    const lottoNumberArray = createLottoNumberArray(purchaseQuantity);
    this.outputView.OutputLottoNumberArray(lottoNumberArray);
    return lottoNumberArray;
  }
}