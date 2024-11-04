import { Lotto } from './Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const purchaseAmount = parseInt(input, 10);

    try {
      this.validatePurchaseAmount(purchaseAmount);

      const lottoCount = purchaseAmount / 1000;
      Console.print(`\n${lottoCount}개를 구매했습니다.`);

      const lottos = this.generateLottos(lottoCount);
      lottos.forEach((lotto) => {
        Console.print(lotto.numbers);
      });

      // 당첨 번호 및 보너스 번호 입력 기능 호출
      await this.promptWinningNumbers();

    } catch (error) {
      Console.print(error.message);
    }
  }

  async promptWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요. (예: 1,2,3,4,5,6)\n');
    try {
      const winningNumbers = this.parseWinningNumbers(input);
      Console.print(`\n입력된 당첨 번호: ${winningNumbers}`);

      await this.promptBonusNumber(winningNumbers);

    } catch (error) {
      Console.print(error.message);

      await this.promptWinningNumbers();
    }
  }

  async promptBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    try {
      const bonusNumber = this.parseBonusNumber(input, winningNumbers);
      Console.print(`보너스 번호: ${bonusNumber}`);

    } catch (error) {
      Console.print(error.message);

      await this.promptBonusNumber(winningNumbers);
    }
  }

  parseWinningNumbers(input) {
    const numbers = input.split(',').map((num) => parseInt(num, 10));
    if (numbers.length !== 6 || numbers.some((num) => isNaN(num) || num < 1 || num > 45)) {
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }
    return numbers;
  }

  parseBonusNumber(input, winningNumbers) {
    const bonusNumber = parseInt(input, 10);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
    return bonusNumber;
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.');
    }
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(new Lotto());
    }
    return lottos;
  }
}

export default App;
