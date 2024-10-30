import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async run() {
    try {
      const count = await this.getLottoCount();
      const lottoNumbers = this.generateLottoNumbers(count);
      const lottos = lottoNumbers.map(numbers => new Lotto(numbers));
      
      lottoNumbers.forEach(numbers => Console.print(`[${numbers.join(', ')}]`));

      const winningNumbers = await this.getWinningNumbers();
      const bonusNumber = await this.getBonusNumber();

      this.calculateStatistics(lottos, winningNumbers, bonusNumber);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getLottoCount() {
    const purchaseCost = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (isNaN(Number(purchaseCost))) {
      throw new Error("[ERROR] 구입금액은 숫자여야 합니다.");
    }
    if (purchaseCost % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위로 입력해 주세요.");
    }
    const count = Math.floor(purchaseCost / 1000);
    Console.print(`${count}개를 구매했습니다.`);
    return count;
  }

  generateLottoNumbers(count) {
    const lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomLottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(randomLottoNumber.sort((a, b) => a - b));
    }
    return lottoNumbers;
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return input.split(',').map(Number);
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return Number(input);
  }

  calculateStatistics(lottos, winningNumbers, bonusNumber) {
    const statistics = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    lottos.forEach(lotto => {
      const matchedCount = lotto.getNumbers().filter(number => winningNumbers.includes(number)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchedCount === 6) {
        statistics.first += 1;
      } else if (matchedCount === 5 && hasBonus) {
        statistics.second += 1;
      } else if (matchedCount === 5) {
        statistics.third += 1;
      } else if (matchedCount === 4) {
        statistics.fourth += 1;
      } else if (matchedCount === 3) {
        statistics.fifth += 1;
      }
    });

    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${statistics.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${statistics.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${statistics.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${statistics.first}개`);

    const totalPrize = statistics.first * 2000000000 + statistics.second * 30000000 +
                       statistics.third * 1500000 + statistics.fourth * 50000 +
                       statistics.fifth * 5000;
    const purchaseCost = lottos.length * 1000;
    const profitRate = (totalPrize / purchaseCost) * 100;
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }
}

export default App;
