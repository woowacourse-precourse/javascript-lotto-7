import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/ioMessage.js";
import calculateLottoCount from "./utils/calculateTicketCount.js";

class Input {
  static async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
    const ticketCount = calculateLottoCount(purchaseAmount);
    
    return Number(ticketCount);
  }

  static inputWinningNumbers() {
    Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBER);
  }

  static inputBonusNumber() {
    Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }
}

export default Input;