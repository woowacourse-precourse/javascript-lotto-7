import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { PLEASE_INPUT, LOTTO_PRICE } from "./Constants.js";
import PrizeStatistics from "./PrizeStatistics.js";

class App {
  #prizeStatistics = new PrizeStatistics();

  async run() {
      try {
          const purchaseAmount = await this.#getPurchaseAmount();
          const lottoCount = purchaseAmount / LOTTO_PRICE;
          Console.print(`\n${lottoCount}개를 구매했습니다.`);

          const lottoArr = this.#generateLottos(lottoCount);
          this.#printLottos(lottoArr);

          const { winningNumbers, bonusNumber } = await this.#getWinningNumbers();
          this.#printResults(purchaseAmount, this.#calculateTotalPrize(lottoArr, winningNumbers, bonusNumber));
      } catch (error) {
          Console.print(error.message);
      }
  }

  async #getPurchaseAmount() {
    const input = await Console.readLineAsync(PLEASE_INPUT.PURCHASE_PRICE);
    const purchasePrice = Number(input);
    this.#validatePurchaseAmount(purchasePrice);
    return purchasePrice;
  }

  #validatePurchaseAmount(price) {
    if (typeof price !== 'number' || Number.isNaN(price)) {
      throw new Error("[ERROR] 로또 구입은 숫자만 입력 가능합니다.");
    }

    if (price % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위만 입력 가능합니다.");
    }

    if (price < 1000) {
      throw new Error("[ERROR] 최소 1,000원 이상이어야 합니다.");
    }
  }

  async #getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(PLEASE_INPUT.WIN_NUMBER);
    const bonusNumber = await this.#getBonusNumber(winningNumbers.split(',').map(Number));

    return {
        winningNumbers: winningNumbers.split(',').map(Number),
        bonusNumber
    };
  }

  async #getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(PLEASE_INPUT.BONUS_NUMBER);
    const bonusNumber = Number(input);
    this.#validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    this.#validateNumber(bonusNumber);
    this.#validateRange(bonusNumber);
    this.#validateDuplication(bonusNumber, winningNumbers);
    this.#validateInteger(bonusNumber);
  }

  #validateNumber(bonusNumber) {
      if (typeof bonusNumber !== 'number' || Number.isNaN(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호는 숫자가 아닌 값이 들어올 수 없습니다.");
      }
  }

  #validateRange(bonusNumber) {
      if (bonusNumber < 1 || bonusNumber > 45) {
          throw new Error("[ERROR] 1과 45 사이의 숫자가 아닌 값은 입력할 수 없습니다.");
      }
  }

  #validateDuplication(bonusNumber, winningNumbers) {
      if (winningNumbers.includes(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호와 당첨 번호는 중복된 값이 들어올 수 없습니다.");
      }
  }

  #validateInteger(bonusNumber) {
      if (!Number.isInteger(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호는 정수를 입력해야 합니다.");
      }
  }

  #generateLottos(count) {
    const lottoArr = [];
    for (let i = 0; i < count; i++) {
      const lotto = Lotto.generateRandomNumbers();
      lottoArr.push(lotto.getNumbers());
    }
    return lottoArr;
  }

  #printLottos(lottoArr) {
    const sortedLottoArr = lottoArr.map(nums =>
      nums.map(Number).sort((a, b) => a - b)
    );
    sortedLottoArr.forEach(arr => {
      Console.print(`[${arr.join(', ')}]`);
    });
  }

  #calculateTotalPrize(lottoArr, winningNumbers, bonusNumber) {
    return lottoArr.reduce((total, lottoNumbers) => {
      const { matchCount, hasBonus } = this.#calculateMatchResult(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      );
      return total + this.#prizeStatistics.update(matchCount, hasBonus);
    }, 0);
  }

  #calculateMatchResult(lottoNumbers, winningNumbers, bonusNumber) {
    const matchCount = lottoNumbers.filter(num =>
      winningNumbers.includes(num)
    ).length;
    const hasBonus = lottoNumbers.includes(bonusNumber);

    return { matchCount, hasBonus };
  }

  #printResults(purchaseAmount, totalPrizeMoney) {
    const yieldRate = this.#getYieldRate(purchaseAmount, totalPrizeMoney);
    const prizeData = this.#prizeStatistics.getPrizeData();

    Console.print("당첨 통계\n---");
    this.#printPrizeStatistics(prizeData);
    Console.print(`총 수익률은 ${yieldRate}%입니다.`);
    }

    #getYieldRate(purchaseAmount, totalPrizeMoney) {
        return ((totalPrizeMoney / purchaseAmount) * 100).toFixed(1);
    }

    #printPrizeStatistics(prizeData) {
        this.#printPrizeStat(prizeData.fifthPlace);
        this.#printPrizeStat(prizeData.fourthPlace);
        this.#printPrizeStat(prizeData.thirdPlace);
        this.#printBonusPlaceStat(prizeData.secondPlace);
        this.#printPrizeStat(prizeData.firstPlace);
    }

    #printPrizeStat(prizeInfo) {
        const { matchCount, prizeMoney, winCount } = prizeInfo;
        const prizeMoneyFormatted = prizeMoney.toLocaleString();
        Console.print(`${matchCount}개 일치 (${prizeMoneyFormatted}원) - ${winCount}개`);
    }

    #printBonusPlaceStat(prizeInfo) {
        const { matchCount, prizeMoney, winCount } = prizeInfo;
        Console.print(`${matchCount}개 일치, 보너스 볼 일치 (${prizeMoney.toLocaleString()}원) - ${winCount}개`);
    }
}

export default App;