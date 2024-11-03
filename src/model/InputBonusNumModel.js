import { InputView } from "../view/InputView.js";
import { validInputBonusNum } from "../validator/validInputBonusNum.js";

export class InputBonusNumModel {
  constructor() {
    this.inputView = new InputView();
  }

  async getBonusNumber() {
    let inputBonusNumberResult;
    for (let i = 1; i < 10; i++) {
      const inputBonusNumber = await this.inputView.inputBonusNumber();
      const isNoProblem = validInputBonusNum(inputBonusNumber);
      if (isNoProblem) return (inputBonusNumberResult = inputBonusNumber);
      if (i === 5)
        throw new Error(
          `[ERROR] 5회 이상 잘 못 입력하여 초기화되었습니다. 다시 실행해 주세요.`
        );
    }
    return inputBonusNumberResult;
  }
}