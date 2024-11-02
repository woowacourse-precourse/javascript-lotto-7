import { InputView } from "../view/InputView.js";
import { validInputPrice } from "../validator/validInputPrice.js";

export class InputPriceModel {
  constructor() {
    this.inputView = new InputView();
  }

  async getPrice() {
    let inputPrice;
    for (let i = 1; i < 10; i++) {
      const inputPriceNumber = await this.inputView.inputBoughtPrice();
      const isNoProblem = validInputPrice(inputPriceNumber);

      if (isNoProblem) return (inputPrice = inputPriceNumber);

      if (i === 3)
        throw new Error(
          `[ERROR] 3회 이상 잘 못 입력하여 초기화되었습니다. 다시 실행해 주세요.`
        );
    }
    return inputPrice;
  }
}