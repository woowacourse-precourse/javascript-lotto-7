import ConsoleView from "./ConsoleView.js";
import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  static getPositivePrice(input) {
    const regex = /^[1-9]\d*$/;
    if (!regex.test(input)) {
      throw new Error("[ERROR]구입금액은 양의 정수이어야 합니다.");
    }
    return input;
  }

  static getThousandPrice(input) {
    if (input % 1000 != 0) {
      throw new Error("[ERROR]구입금액은 1000의 배수이어야 합니다.");
    }
    return input;
  }

  async run() {
    let isValid = false;
    let purchasePrice, lottoQuantity, winNumber, bonusNumber;
    let lottoArray = [];

    while (!isValid) {
      try {
        purchasePrice = await ConsoleView.getPurchasePrice();
        purchasePrice = Number(App.getPositivePrice(purchasePrice));
        lottoQuantity = App.getThousandPrice(purchasePrice) / 1000;
        ConsoleView.printLottoQuantity(lottoQuantity);

        for (let i = 0; i < lottoQuantity; i++) {
          const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
          lottoArray.push(lotto);
        }
        ConsoleView.printLottoNumbers(lottoArray);

        isValid = true;
      } catch (error) {
        ConsoleView.printError(error.message);
      }
    }

    while (isValid) {
      try {
        const lottoNumber = await ConsoleView.getWinningNumbers();
        winNumber = lottoNumber.split(",").map(Number);
        new Lotto(winNumber); // This validates the winning numbers.
        isValid = false;
      } catch (error) {
        ConsoleView.printError(error.message);
      }
    }

    while (!isValid) {
      try {
        bonusNumber = Number(await ConsoleView.getBonusNumber());
        if (!(Number.isInteger(bonusNumber) && bonusNumber >= 1 && bonusNumber <= 45) || winNumber.includes(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 하며 당첨번호와 중복될 수 없습니다.");
        }
        isValid = true;
      } catch (error) {
        ConsoleView.printError(error.message);
      }
    }

    const lottoResults = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    const lottoPrize = { 1: 2000000000, 2: 30000000, 3: 1500000, 4: 50000, 5: 5000, 6: 0 };
    let profit = 0;

    for (const purchasedLotto of lottoArray) {
      const rank = new Lotto(winNumber).checkRank(purchasedLotto, bonusNumber);
      lottoResults[rank] += 1;
      profit += lottoPrize[rank];
    }

    const profitRate = Math.round((profit / purchasePrice) * 10000) / 100;
    ConsoleView.printStatistics(lottoResults, profitRate);
  }
}

export default App;
