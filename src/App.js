import { Console } from '@woowacourse/mission-utils';
import { checkPriceError } from './validateUtils.js';
import Lotto from './Lotto.js';
import LottoPrize from './LottoPrize.js';

const LOTTO_PURCHASE_UNIT = 1000;

class App {
  async run() {
    const price = await this.getPrice();

    const lottoCount = price / LOTTO_PURCHASE_UNIT;
    const issuedLottos = Lotto.generateIssuedLottos(lottoCount);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const prizeManager = new LottoPrize(
      issuedLottos,
      winningNumbers,
      bonusNumber
    );
    prizeManager.countMatchingNumbers();
    const roi = prizeManager.calculateROI(price);

    this.printIssuedLottos(lottoCount, issuedLottos);
    this.printWinningStatistics(prizeManager.prizeManager, roi);
  }

  async getInput(prompt) {
    return await Console.readLineAsync(`${prompt}\n`);
  }

  printNewLine() {
    Console.print('');
  }

  async getPrice() {
    while (true) {
      try {
        const price = await this.getInput('구입금액을 입력해 주세요.');
        checkPriceError(price);
        this.printNewLine();
        return Number(price);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  printIssuedLottos(lottoCount, issuedLottos) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
    for (let lotto of issuedLottos) {
      Console.print(`[${lotto.join(', ')}]`);
    }
    this.printNewLine();
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.getInput(
          '당첨 번호를 입력해 주세요.'
        );
        Lotto.validateWinningNumbers(winningNumbers);
        this.printNewLine();
        return new Lotto(winningNumbers.split(',').map(Number)).winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await this.getInput('보너스 번호를 입력해 주세요.');
        Lotto.validateBonusNumber(bonusNumber, winningNumbers);
        this.printNewLine();
        return Number(bonusNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  printResult() {}

  printWinningStatistics(prizeManager, roi) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${prizeManager[3].count}개`);
    Console.print(`4개 일치 (50,000원) - ${prizeManager[4].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizeManager[5].count}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeManager['5 + bonus'].count}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${prizeManager[6].count}개`);

    Console.print(`총 수익률은 ${roi}%입니다.`);
  }
}

export default App;
