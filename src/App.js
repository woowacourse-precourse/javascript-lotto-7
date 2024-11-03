import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { PRIZE } from "./constants/constant.js";

class App {
  async run() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요\n"
    );
    if (purchaseAmount === 0) {
      throw new Error("[ERROR]: 구입 금액은 0을 입력할 수 없습니다.");
    }
    if (purchaseAmount < 0) {
      throw new Error("[ERROR]: 구입 금액은 음수를 입력할 수 없습니다.");
    }
    if (purchaseAmount % 1000 !== 0 && purchaseAmount !== 0) {
      throw new Error("[ERROR]: 구입 금액은 1,000원 단위로 입력 가능합니다.");
    }
    if (purchaseAmount === "") {
      throw new Error("[ERROR]: 구입 금액에 빈 문자열을 입력할 수 없습니다.");
    }
    const lottoCount = purchaseAmount / 1000;
    const userLottoNumbers = this.generateLotto(lottoCount);

    await Console.print(`\n${lottoCount}개를 구매했습니다.`);
    await Console.print(
      userLottoNumbers
        .map((lotto) => `[ ${lotto.getNumbers().join(", ")} ]`)
        .join("\n")
    );

    const inputWinningNumbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );

    const inputWinningNumber = inputWinningNumbers.split(",").map(Number);
    const winningNumber = new Lotto(inputWinningNumber);

    const inputBonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    const bonusNumber = Number(inputBonusNumber);

    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR]: 보너스 번호는 숫자만 입력 가능합니다.");
    }
    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(
        "[ERROR]: 보너스 번호는 1부터 45 사이의 정수여야 합니다."
      );
    }
    if (winningNumber.getNumbers().includes(bonusNumber)) {
      throw new Error("[ERROR]: 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    const matchingResults = this.checkMatchingLottos(
      userLottoNumbers,
      new Set(winningNumber.getNumbers()),
      bonusNumber
    );
    const rate = this.calculateRate(matchingResults, purchaseAmount);
    await this.printStatistics(matchingResults, rate);
  }

  generateLotto(lottoCount) {
    let userLottoNumbers = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottoNumbers.sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);
      userLottoNumbers.push(lotto);
    }
    return userLottoNumbers;
  }

  checkMatchingLottos(userLottoNumbers, winningNumberSet, bonusNumber) {
    const matchingResults = {
      three: 0,
      four: 0,
      five: 0,
      fiveBonus: 0,
      six: 0,
    };

    userLottoNumbers.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      let matchCount = 0;
      let hasBonus = false;

      lottoNumbers.forEach((num) => {
        if (winningNumberSet.has(num)) {
          matchCount++;
        }
      });

      if (lottoNumbers.includes(bonusNumber)) {
        hasBonus = true;
      }

      if (matchCount === 6) {
        matchingResults.six++;
        return;
      }
      if (matchCount === 5 && hasBonus) {
        matchingResults.fiveBonus++;
        return;
      }
      if (matchCount === 5) {
        matchingResults.five++;
        return;
      }
      if (matchCount === 4) {
        matchingResults.four++;
        return;
      }
      if (matchCount === 3) {
        matchingResults.three++;
      }
    });
    return matchingResults;
  }
  calculateRate(matchingResults, purchaseAmount) {
    const totalPrize =
      PRIZE.three * matchingResults.three +
      PRIZE.four * matchingResults.four +
      PRIZE.five * matchingResults.five +
      PRIZE.fiveBonus * matchingResults.fiveBonus +
      PRIZE.six * matchingResults.six;

    const rate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    return rate;
  }
  async printStatistics(matchingResults, rate) {
    await Console.print("\n당첨 통계\n---");
    await Console.print(`3개 일치 (5,000원) - ${matchingResults.three}개`);
    await Console.print(`4개 일치 (50,000원) - ${matchingResults.four}개`);
    await Console.print(`5개 일치 (1,500,000원) - ${matchingResults.five}개`);
    await Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchingResults.fiveBonus}개`
    );
    await Console.print(
      `6개 일치 (2,000,000,000원) - ${matchingResults.six}개`
    );
    await Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default App;
