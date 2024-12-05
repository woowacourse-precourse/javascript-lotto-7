import { InputView } from "../view/InputView.js";
import { validInputPrizeNum } from "../validator/validInputPrizeNum.js";

export class InputPrizeNumModel {
  constructor() {
    this.inputView = new InputView();
  }

  async getPrizeNumbers() {
    let inputPrizeNumbersResult;
    for (let i = 1; i < 10; i++) {
      const inputPrizeNumbers = await this.inputView.inputPrizeNumbers();
      const isNoProblem = validInputPrizeNum(inputPrizeNumbers);
      if (isNoProblem) return (inputPrizeNumbersResult = inputPrizeNumbers);
      if (i === 5)
        throw new Error(
          `[ERROR] 5회 이상 잘 못 입력하여 초기화되었습니다. 다시 실행해 주세요.`
        );
    }
    return inputPrizeNumbersResult;
  }
}
