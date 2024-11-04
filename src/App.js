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

    const result = this.calculateLottoResults(
      this.purchasedLottoList,
      this.winningLottoNumbers,
      this.bonusLottoNumber
    );
    this.displayLottoResult(result);
    const earningsRate = this.calculateEarningsRate(
      this.amountOfPurchasedMoney,
      result
    );
    MissionUtils.Console.print(`총 수익률은 ${earningsRate}%입니다.`);
  }

  async getPurchasedAmount() {
    while (true) {
      const inputtedMoney = await MissionUtils.Console.readLineAsync(
        `구입금액을 입력해주세요.`
      );
      if (await this.isValidMoneyInput(inputtedMoney)) return inputtedMoney;
    }
  }
  async isValidMoneyInput(inputtedMoney) {
    try {
      this.validateMoneyInput(inputtedMoney);
      return true;
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return false;
    }
  }
  validateMoneyInput(inputtedMoney) {
    if (isNaN(inputtedMoney))
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
        `당첨 번호를 입력해주세요.`
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
      MissionUtils.Console.print(e.message);
      return false;
    }
  }
  validateWinningNumbers(inputtedWinningNumber) {
    const numberArray = inputtedWinningNumber.split(",").map(Number);
    const uniqueNumersSet = new Set(numberArray);

    if (numberArray.length !== 6 || numberArray.length !== uniqueNumersSet.size)
      throw new Error("[ERROR] 6개의 숫자를, 중복 없이 입력해야 합니다.");

    numberArray.forEach((num) => {
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
      throw new Error("[ERROR] 보너스 번호가 당첨 번호와 중복되면 안됩니다.");
  }
  calculateLottoResults(lottoList, winningNumbers, bonusNumber) {
    return lottoList.reduce(
      (result, lotto) => {
        const [matchedCount, hasBonusMatch] = lotto.countMatchingLotto(
          winningNumbers,
          bonusNumber
        );
        this.updateLottoResults(result, matchedCount, hasBonusMatch);
        return result;
      },
      [0, 0, 0, 0, 0]
    );
  }
  updateLottoResults(result, matchedCount, hasBonusMatch) {
    switch (matchedCount) {
      case 3:
        result[0]++;
        break;
      case 4:
        result[1]++;
        break;
      case 5:
        hasBonusMatch ? result[3]++ : result[2]++;
        break;
      case 6:
        result[4]++;
        break;
    }
  }
  displayLottoResult(result) {
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[4]}개`);
  }
  calculateEarningsRate(purchasedAmount, result) {
    const prizeAmounts = [5000, 50000, 1500000, 30000000, 2000000000];
    const totalEarnings = prizeAmounts.reduce(
      (accumulatedEarnings, prizeAmount, index) =>
        accumulatedEarnings + prizeAmount * result[index],
      0
    );
    return ((totalEarnings / purchasedAmount) * 100).toFixed(1);
  }
}

export default App;

const app = new App();
app.run();
