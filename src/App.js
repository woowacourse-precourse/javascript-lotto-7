import { OutputView } from "./views/OutputView.js";
import { InputView } from "./views/InputView.js";
import { Validator } from "./utils/Validator.js";

class App {
  async run() {}
  async inputPurchaseAmount() {
    const purchaseAmount = Number(await InputView.purchaseAmount());
    this.validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }

  async validatePurchaseAmount(number) {
    try {
      Validator.purchaseAmountunit(number);
      Validator.minPurchase(number);
    } catch (error) {
      OutputView.error(error.message);
      await this.inputPurchaseAmount();
    }
  }

  async inputWinningNumber() {
    const winningNumber = (await InputView.winningNumber())
      .split(",")
      .map((number) => Number(number));

    this.validateWinningNumber(winningNumber);

    return winningNumber;
  }

  async validateWinningNumber(numbers) {
    try {
      Validator.totalNumber(numbers);
      Validator.numberArrange(numbers);
      Validator.isInteger(numbers);
      Validator.sameNumber(numbers);
    } catch (error) {
      OutputView.error(error.message);
      await this.inputWinningNumber();
    }
  }

  async inputWinningBonusNumber(winningNumber) {
    const winningBonusNumber = Number(await InputView.winningBonusNumber());
    this.validateWinningBonusNumber(winningBonusNumber, winningNumber);

    return winningBonusNumber;
  }

  async validateWinningBonusNumber(number, winningNumber) {
    let numberArr = [number];
    try {
      winningNumber.forEach((number) => {
        numberArr.push(number);
      });
      Validator.numberArrange(numberArr);
      Validator.isInteger(numberArr);
      Validator.sameNumber(numberArr);
    } catch (error) {
      OutputView.error(error.message);
      await this.inputWinningBonusNumber(winningNumber);
    }
  }

  rank(correctNumber, correctBonusNumber) {
    if (correctNumber === 6) return 1;
    if (correctNumber === 5 && correctBonusNumber === true) return 2;
    if (correctNumber === 5) return 3;
    if (correctNumber === 4) return 4;
    if (correctNumber === 3) return 5;
    return false;
  }
}

export default App;
