import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const money = await this.moneyInput();
    const lottos = this.generateLottos(money / 1000);
    this.printLottos(lottos);
    const winnerLotto = await this.winnerLottoInput();
    const bonusNumber = await this.bonusNumberInput(winnerLotto);
  }

  async moneyInput() {
    let isValid = false;
    let money;
    while (!isValid) {
      try {
        money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        money = this.validateMoney(money);
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return money;
  }

  validateMoney(money) {
    const amount = Number(money);
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 입력 금액이 1000으로 나누어지지 않습니다.");
    }
    return amount;
  }

  async winnerLottoInput() {
    let isValid = false;
    let winnerLotto;
    while (!isValid) {
      try {
        winnerLotto = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.');
        winnerLotto = winnerLotto.split(',').map(Number);
        this.validateWinnerLotto(winnerLotto);
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winnerLotto;
  }

  validateWinnerLotto(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    const numberSet = new Set();
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      if (numberSet.has(number)) {
        throw new Error("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
      }
      numberSet.add(number);
    });
  }

  async bonusNumberInput(winnerLotto) {
    let isValid = false;
    let bonusNumber;
    while (!isValid) {
      try {
        bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.');
        bonusNumber = Number(bonusNumber);
        this.validateBonusNumber(bonusNumber, winnerLotto);
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return bonusNumber;
  }

  validateBonusNumber(bonusNumber, winnerLotto) {
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winnerLotto.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(this.generateLotto());
    }
    return lottos;
  }

  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
  calculateStatistics(lottos, winnerLotto, bonusNumber) {
    const statistics = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    lottos.forEach(lotto => {
      const numbers = lotto.getNumbers();
      const matchCount = numbers.filter(number => winnerLotto.includes(number)).length;
      const hasBonus = numbers.includes(bonusNumber);

      if (matchCount === 6) {
        statistics.first += 1;
      } else if (matchCount === 5 && hasBonus) {
        statistics.second += 1;
      } else if (matchCount === 5) {
        statistics.third += 1;
      } else if (matchCount === 4) {
        statistics.fourth += 1;
      } else if (matchCount === 3) {
        statistics.fifth += 1;
      }
    });

    return statistics;
  }
}

export default App;