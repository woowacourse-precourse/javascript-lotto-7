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

    this.bonusLottoNumber = await this.getBonusLottoNumber();
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

    if (numberArray.length !== 6 || numberArray.length !== uniqueNumersSet.size)
      throw new Error("[ERROR] 6개의 숫자를, 중복 없이 입력해야 합니다.");

    numberArray.forEacn((num) => {
      if (isNaN(num) || num % 1 !== 0 || num < 1 || num > 45)
        throw new Error(
          "[ERROR] 숫자는 반드시 정수이며, 범위는 1-45이어야 합니다."
        );
    });
  }
  async getBonusLottoNumber() {
    while (true) {
      const inputtedBonusNumber = await MissionUtils.Console.readLineAsync(
        `보너스 번호를 입력해주세요.`
      );

      if (
        await this.isValidBonusNumberInput(
          this.winningLottoNumbers,
          inputtedBonusNumber
        )
      )
        return Number(inputtedBonusNumber);
    }
  }
  async isValidBonusNumberInput(winningNumbers, inputtedBonusNumber) {
    try {
      this.validateBonusNumber(winningNumbers, inputtedBonusNumber);
      return true;
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return false;
    }
  }
  validateBonusNumber(winningNumbers, inputtedBonusNumber) {
    if (
      isNaN(inputtedBonusNumber) ||
      Number(inputtedBonusNumber) % 1 !== 0 ||
      Number(inputtedBonusNumber) < 1 ||
      Number(inputtedBonusNumber) > 45
    )
      throw new Error(
        "[ERROR] 보너스 번호는 정수이며, 범위는 1-45 이어야 합니다."
      );

    if (winningNumbers.includes(Number(inputtedBonusNumber)))
      throw new Error("[Error] 보너스 번호가 당첨 번호와 중복되면 안됩니다.");
  }
}

export default App;
