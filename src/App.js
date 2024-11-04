import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async validateMoney() {
    while (true) {
      try {
        const MONEY = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
        
        this.checkIsValidateMoney(MONEY);
        MissionUtils.Console.print(`${MONEY/1000}개를 구매했습니다.`)

        return MONEY;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  checkIsValidateMoney(money) {
    if (isNaN(money)) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력할 수 없습니다!');
    }
    if (money < 0) {
      throw new Error('[ERROR] 음수는 입력할 수 없습니다!');
    }
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 1000 보다 적은 단위는 입력할 수 없습니다!');
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
      throw new Error('[ERROR] 당첨번호는 6개의 숫자여야 합니다!');
    }
    if (numbers.some(isNaN)) { // some은 배열의 하나 이상의 요소가 조건을 만족하는지 확인
      throw new Error('[ERROR] 당첨번호는 숫자여야 합니다!');
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[ERROR] 당첨번호는 1과 45 사이의 숫자여야 합니다!');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 당첨번호는 중복될 수 없습니다!');
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
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다!");
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다!");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다!");
    }
  }

  generateLottos(money) {
    const NUMBER_OF_LOTTO = Math.floor(money / 1000); // 소수점 내림 처리
    const LOTTOS = [];

    for (let i = 0; i < NUMBER_OF_LOTTO; i++) {
      const NUMBERS = this.generateLottoNumbers()
      const LOTTO = new Lotto(NUMBERS);
      
      LOTTOS.push(LOTTO);
    }

    return LOTTOS;
  }

  generateLottoNumbers() { // 자동으로 중복 없이 제공
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async lottoResultCounter(lottos) {
    const WINNING_NUMBERS = await this.validateWinningNumbers();
    const BONUS_NUMBER = await this.validateBonusNumber(WINNING_NUMBERS);
    const RESULT_COUNTER = {
      1: 0,
      2: 0, 
      3: 0, 
      4: 0, 
      5: 0, 
    };

    lottos.forEach(lotto => {
      const RESULT = lotto.lottoResult(WINNING_NUMBERS, BONUS_NUMBER);
      if (RESULT >= 1 && RESULT <= 5) { // 1~5 범위이면
        RESULT_COUNTER[RESULT] += 1;
      }
    });

    return RESULT_COUNTER;
  }

  printResult(resultCounter) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${resultCounter[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${resultCounter[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${resultCounter[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultCounter[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${resultCounter[1]}개`);
  }

  resultRateCalculator(resultCounter, money) {
    const PRIZE = {
      5: 5000,
      4: 50000,
      3: 1500000,
      2: 30000000,
      1: 2000000000
    };
  
    const TOTAL_PRIZE =
      resultCounter[5] * PRIZE[5] +
      resultCounter[4] * PRIZE[4] +
      resultCounter[3] * PRIZE[3] +
      resultCounter[2] * PRIZE[2] +
      resultCounter[1] * PRIZE[1];
  
    const RESULT_RATE = (TOTAL_PRIZE / money) * 100;
    
    MissionUtils.Console.print(`총 수익률은 ${RESULT_RATE.toFixed(1)}%입니다.`);
  }


  async run() {
    try {
      const MONEY = await this.validateMoney();
      const LOTTOS = this.generateLottos(MONEY);

      LOTTOS.forEach(lotto => {
        lotto.printNumbers();
      });

      const RESULT_COUNT = await this.lottoResultCounter(LOTTOS);

      this.printResult(RESULT_COUNT);
      this.resultRateCalculator(RESULT_COUNT, MONEY);
    }
    catch (error) {
      throw error;
    }

  }
}

export default App;
