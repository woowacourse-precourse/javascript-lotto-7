import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  amountOfPurchasedMoney;
  purchasedLottoList = [];
  winningLottoNumbers = [];
  bonusLottoNumber;

  async run() {
    this.amountOfPurchasedMoney = await this.getPurchasedAmount();

    this.purchasedLottoList = await this.purchaseLottos(
      this.amountOfPurchasedMoney / 1000
    );
    this.winningLottoNumbers = await this.getWinningLottoNumbers();
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
  validateMoneyInput(inputtedMoney) {
    if (isNan(inputtedMoney))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (inputtedMoney <= 0)
      throw new Error("[ERROR] 1000원 이상 입력해야 합니다.");
    if (inputtedMoney % 1000 !== 0)
      throw new Error("[ERROR] 1000 단위로 입력해야 합니다.");
  }

  async purchaseLottos(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    const lottoList = [];

    for (let i = 0; i < count; i++) {
      const lotto = new Lotto(await this.generateLottoNumbers());
      MissionUtils.Console.print(lotto.getFormattedLottoNumbers());
      lottoList.push(lotto);
    }
    return lottoList;
  }

  async generateLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumbers.sort((a, b) => a - b);
  }
  async getWinningLottoNumbers() {
    while (true) {
      const inputtedWinningNumber = await MissionUtils.Console.readLineAsync(
        `당첨 번호를 입력해주세요`
      );
      if (await this.isValidWinningNumbersInput(inputtedWinningNumber))
        return inputtedWinningNumber.split(",").map(Number);
    }
  }
  async isValidWinningNumbersInput(inputtedWinningNumber) {
    try {
      this.validateWinningNumbers(inputtedWinningNumber);
      return true;
    } catch (e) {
      MissionUtils.Console.print(e.messsage);
      return false;
    }
  }
  validateWinningNumbers(inputtedWinningNumber) {
    const numberArray = inputtedWinningNumber.split(",").map(Number);
    const uniqueNumersSet = new Set(numberArray);
  }
}

export default App;
