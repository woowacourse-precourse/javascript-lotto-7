import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../static/Static.js";
import InputValidator from "../utils/InputValidator.js";

const InputView = {
 async readPurchaseAmount() {
   const input = await Console.readLineAsync(PRINT_MESSAGE.input.purchaseAmount);
   return InputValidator.validatePurchaseAmount(input);
 },

 async readWinningNumbers() {
   const input = await Console.readLineAsync(PRINT_MESSAGE.input.winningNumbers);
   return InputValidator.validateWinningNumbers(input);
 },

 async readBonusNumber(winningNumbers) {
   const input = await Console.readLineAsync(PRINT_MESSAGE.input.bonusNumber);
   return InputValidator.validateBonusNumber(input, winningNumbers);
 }
};

export default InputView;