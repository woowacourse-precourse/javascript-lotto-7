import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      const inputMoney = await this.getInputMoney();
      const Lotto = inputMoney / 1000;
      Console.print(`${lottoCount}개를 구매했습니다.`);

      const purchasedLottos = this.generateLottos(lottoCount);
      purchasedLottos.forEach(lotto => Console.print(`[${lotto.getNumbers().join(', ')}]`));

      const winningLotto = await this.getWinningLotto();
      const bonusNumber = await this.getBonusNumber(winningLotto.getNumbers());

      const results = this.calculateResults(purchasedLottos, winningLotto, bonusNumber);
      this.printResults(results, inputMoney);

    } catch (error) {
      Console.print(error.message);
    }

  }

  async getInputMoney() {
    Console.print('구입금액을 입력해 주세요.\n');
    const inputMoney = await Console.readLineAsync('');
    if (isNaN(inputMoney) || inputMoney % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 하며 1000원 단위여야 합니다.");
    }
    return inputMoney;
  }

  generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
  }

  async getWinningLotto() {
    Console.print('당첨번호를 입력해 주세요.\n');
    const winLottoInput = await Console.readLineAsync('');
    const winLottoNumbers = winLottoInput.split(',').map(num => parseInt(num.trim()));
    return new Lotto(winLottoNumbers);
  }

  async getBonusNumber(winningNumbers) {
    Console.print('보너스 번호를 입력해 주세요.\n');
    const bonusNumber = parseInt(await Console.readLineAsync(''));
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1부터 45 사이의 숫자여야 합니다.");
    }
    return bonusNumber;
  }

  calculateResults(purchasedLottos, winningLotto, bonusNumber) {
    const results = { correct3: 0, correct4: 0, correct5: 0, correct5b: 0, correct6: 0 };
    purchasedLottos.forEach(lotto => {
      const matchedCount = lotto.getNumbers().filter(num => winningLotto.getNumbers().includes(num)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchedCount === 6) results.correct6++;
      if (matchedCount === 5 && hasBonus) results.correct5b++;
      if (matchedCount === 5) results.correct5++;
      if (matchedCount === 4) results.correct4++;
      if (matchedCount === 3) results.correct3++;
    });
    return results;
  }

  printResults(results, inputMoney) {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${results.correct3}개`);
    Console.print(`4개 일치 (50,000원) - ${results.correct4}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.correct5}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.correct5b}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results.correct6}개`);

    const totalPrize = (results.correct3 * 5000) + (results.correct4 * 50000) +
      (results.correct5 * 1500000) + (results.correct5b * 30000000) +
      (results.correct6 * 2000000000);
    const rateOfReturn = (totalPrize / inputMoney) * 100;
    Console.print(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }
}

export default App;
