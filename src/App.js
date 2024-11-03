import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async validateMoney() {
    while (true) {
      try {
        const MONEY = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
        
        this.checkIsValidateMoney(MONEY);

        return MONEY;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  checkIsValidateMoney(money) {
    if (isNaN(money)) {
      throw new Error('[Error] 숫자가 아닌 값을 입력할 수 없습니다!');
    }

    if (money < 0) {
      throw new Error('[Error] 음수는 입력할 수 없습니다!');
    }

    if (money % 1000 !== 0) {
      throw new Error('[Error] 1000 보다 적은 단위는 입력할 수 없습니다!');
    }

    return money;
  }  

  async validateWinningNumbers() {
    while (true) {
      try {
        const INPUT = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
        const NUMBERS = INPUT.split(',').map(Number);

        this.checkWinningNumbers(NUMBERS); 

        return NUMBERS;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  checkWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[Error] 당첨번호는 6개의 숫자여야 합니다!');
    }
    if (numbers.some(isNaN)) { // some은 배열의 하나 이상의 요소가 조건을 만족하는지 확인
      throw new Error('[Error] 당첨번호는 숫자여야 합니다!');
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[Error] 당첨번호는 1과 45 사이의 숫자여야 합니다!');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[Error] 당첨번호는 중복될 수 없습니다!');
    }
  }

  async validateBonusNumber(winningNumbers) {
    while (true) {
      try {
        const INPUT = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        const BONUS_NUMBER = parseInt(INPUT, 10);

        this.checkBonusNumber(BONUS_NUMBER, winningNumbers);
        return BONUS_NUMBER;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  checkBonusNumber(bonusNumber, winningNumbers) {
    if (isNaN(bonusNumber)) {
      throw new Error("[Error] 보너스 번호는 숫자여야 합니다!");
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[Error] 보너스 번호는 1과 45 사이의 숫자여야 합니다!");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[Error] 보너스 번호는 당첨 번호와 중복될 수 없습니다!");
    }
  }

  generateLottos(money) {
    const NUMBER_OF_LOTTO = Math.floor(money / 1000); // 소수점 내림 처리
    const LOTTOS = [];

    for (let i = 0; i < NUMBER_OF_LOTTO; i++) {
      const lotto = this.generateLottoNumbers();
      LOTTOS.push(lotto);
    }

    return LOTTOS;
  }

  generateLottoNumbers() { // 자동으로 중복 없이 제공
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async run() {
    try {
      const LOTTO = new Lotto([1,2,3,4,5,6]);

      LOTTO.printNumbers();
      this.validateMoney();
    }
    catch (error) {
      throw error;
    }

  }
}

export default App;
