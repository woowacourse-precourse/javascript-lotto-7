import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async run() {
    const lottoPrice = await this.getLottoPrice();
    const lottoCount = Math.floor(lottoPrice / 1000);
    Console.print(`${lottoCount}개를 구매했습니다.`);

    const lottoList = this.generateLottoNumbers(lottoCount);
    const lottoNumbers = await this.getWinningNumbers();
    const bonusNumber = Lotto.genBonusNum(lottoNumbers);

    const result = this.calculateResults(lottoList, lottoNumbers, bonusNumber);
    const totalPrize = this.calculateTotalPrize(result);
    const profitRate = this.calculateProfitRate(totalPrize, lottoPrice);

    this.printResults(
      lottoPrice,
      lottoNumbers,
      bonusNumber,
      result,
      profitRate
    );
  }

  async getLottoPrice() {
    return parseInt(
      await Console.readLineAsync("얼마치 로또를 구입하시겠습니까?"),
      10
    );
  }

  generateLottoNumbers(lottoCount) {
    const lottoList = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      lottoList.push(randomNumbers);
      Console.print(`[${randomNumbers.join(", ")}]`);
    }
    return lottoList;
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const lottoNum = await Console.readLineAsync("당첨 번호를 입력하세요.");
        const lottoNumbers = lottoNum.split(",").map(Number);
        new Lotto(lottoNumbers); // 로또 번호 유효성 검사
        return lottoNumbers; // 유효한 번호가 입력되면 반환
      } catch (error) {
        Console.print(error.message); // [ERROR] 메시지 출력
      }
    }
  }

  calculateResults(lottoList, lottoNumbers, bonusNumber) {
    const WINNING_MONEY = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+bonus": 30000000,
      6: 2000000000,
    };
    const result = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };

    lottoList.forEach((ticket) => {
      const matchCount = ticket.filter((num) =>
        lottoNumbers.includes(num)
      ).length;
      const isBonusMatched = ticket.includes(bonusNumber);

      if (matchCount === 5 && isBonusMatched) {
        result["5+bonus"]++;
        return;
      }
      if (matchCount >= 3) {
        result[matchCount]++;
      }
    });
    return result;
  }

  calculateTotalPrize(result) {
    const WINNING_MONEY = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+bonus": 30000000,
      6: 2000000000,
    };
    return Object.keys(result).reduce(
      (acc, key) => acc + result[key] * WINNING_MONEY[key],
      0
    );
  }

  calculateProfitRate(totalPrize, lottoPrice) {
    return Math.round((totalPrize / lottoPrice) * 100 * 10) / 10;
  }

  printResults(lottoPrice, lottoNumbers, bonusNumber, result, profitRate) {
    Console.print(`구입 금액: ${lottoPrice}`);
    Console.print(`당첨 번호: ${lottoNumbers}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
    Console.print(`3개 일치 (5,000원) - ${result[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["5+bonus"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${result[6]}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
