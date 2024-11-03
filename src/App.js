import { MissionUtils } from "@woowacourse/mission-utils";
import LottoPurchase from "./LottoPurchase";
import Constants from "./Constants";
import LottoWinningStatus from "./LottoWinningStatus"
import Lotto from "./Lotto";

class App {
  async #getPurchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync(
      Constants.INPUT_MESSAGES.PURCHASE_AMOUNT
    );
    return parseFloat(purchaseAmount);
  }

  async #getWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      Constants.INPUT_MESSAGES.WINNING_NUMBERS
    );
    return winningNumbers
      .split(Constants.DELIMITER)
      .map((number) => parseFloat(number.trim()));
  }

  async #getBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      Constants.INPUT_MESSAGES.BONUS_NUMBER
    );
    return parseFloat(bonusNumber);
  }

  async run() {
    const purchaseAmount = await this.#getPurchaseAmount();
    const lottoPurchase = new LottoPurchase(purchaseAmount);
    const purchaselottoList = lottoPurchase.getPurchaseLottoList();

    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber();
  }
}

export default App;