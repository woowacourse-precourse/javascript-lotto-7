import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  amountOfPurchasedMoney;
  purchasedLottoList = [];
  winningLottoNumbers = [];
  bonusLottoNumber;

  async run() {
    this.amountOfPurchasedMoney = await this.getPurchasedAmount();
  }

  async getPurchasedAmount() {
    while (true) {
      const inputtedMoney = await MissionUtils.Console.readLineAsync(
        `구입금액을 입력해주세요./n`
      );
      if (await this.isValidMoneyInput(inputtedMoney)) return inputtedMoney;
    }
  }
  async isValidMoneyInput(inputtedMoney) {
    try {
      this.isValidMoneyInput(inputtedMoney);
      return true;
    } catch (e) {
      MissionUtils.Console.print(e.messsage);
      return false;
    }
  }
}

export default App;
