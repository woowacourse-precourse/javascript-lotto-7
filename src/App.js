import UserInput from "../../javascript-lotto-7/src/UserInput.js";

class App {
  async run() {
    const userInput = new UserInput();
    await userInput.inputPurchaseAmount();
    await userInput.inputWinningNumbers();
    await userInput.inputBonusNumber();

    const validator = new InputValidator();
    validator.validateAmount(userInput.purchaseAmount); 
    validator.validateWinningNumbers(userInput.winningNumbers);
    validator.validateBonusNumber(userInput.bonusNumber);
  }
}

export default App;
