import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    const buyCost = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.validatePurchaseAmount(buyCost);

    const STANDARD_COST = 1000;
    const buyCount = buyCost / STANDARD_COST;

    Console.print(`\n${buyCount}개를 구매했습니다.`);
    const myLottoNumbers = [];

    for (let i = 0; i < buyCount; i++) {
      const lottoNumber = this.generateNumber();
      Console.print(lottoNumber, '\n');
      myLottoNumbers.push(new Lotto(lottoNumber));
    }

    const winningNumberInput = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const bonusNumberInput = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    const winningNumbers = this.validateWinningNumbers(winningNumberInput);
    const bonusNumber = this.validateBonusNumber(
      bonusNumberInput,
      winningNumbers
    );

    Console.print('당첨 번호와 보너스 번호가 유효합니다.');
  }

  validatePurchaseAmount(buyCost) {
    const STANDARD_COST = 1000;
    if (isNaN(buyCost)) throw new Error('[ERROR] 숫자로 입력해야 합니다.');
    if (buyCost < STANDARD_COST)
      throw new Error('[ERROR] 구입금액은 1000원 이상이어야 합니다.');
    if (buyCost % STANDARD_COST !== 0)
      throw new Error('[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.');
  }

  generateNumber() {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort((a, b) => a - b);
    return lottoNumber;
  }

  validateWinningNumbers(input) {
    const numbers = input.split(',').map((num) => Number(num.trim()));
    if (numbers.length !== 6 || numbers.some((num) => isNaN(num))) {
      throw new Error(
        '[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.'
      );
    }
    return new Lotto(numbers).numbers;
  }

  validateBonusNumber(bonusInput, winningNumbers) {
    const bonusNumber = Number(bonusInput.trim());
    Lotto.validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }
}

export default App;
