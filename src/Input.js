import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/ioMessage.js";
import calculateLottoCount from "./utils/calculateTicketCount.js";
import { ERROR_MESSAGE as ERROR } from "./constants/errorMessage.js";
import { LOTTO_NUMBERS_LENGTH } from "./constants/lotto.js";
import Validation from "./Validation.js";

class Input {
  static async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      INPUT_MESSAGE.PURCHASE_AMOUNT
    );
    const ticketCount = calculateLottoCount(purchaseAmount);

    return Number(ticketCount);
  }

  static async inputWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBER);
    const winningNumbers = Validation.checkWinningNumbersError(input);

    return winningNumbers;
  }

  static async inputBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    const bonusNumber = Validation.checkBonusNumberError(input, winningNumbers);

    return bonusNumber;
  }
}

export default Input;
