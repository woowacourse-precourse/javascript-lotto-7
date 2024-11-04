import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  static PURCHASE_UNIT = 1000;

  async run() {
    this.requestPurchaseAmount(); // 구입 금액 요청
  }

  // 1. 구입 금액 입력
  requestPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      try {
        const purchaseAmount = this.#getValidatedAmount(input);
        const lottoCount = purchaseAmount / App.PURCHASE_UNIT;
        this.#issueLottos(lottoCount);

        // 구입 금액이 유효할 때만 당첨 번호 요청
        this.getWinningNumbers();
      } catch (error) {
        Console.print(error.message);
        this.requestPurchaseAmount(); // 잘못된 입력 시 재시도
      }
    });
  }

  #getValidatedAmount(input) {
    const amount = Number(input);
    if (isNaN(amount)) {
      throw new Error("[ERROR] 금액은 숫자로 입력해 주세요.");
    }
    if (amount % App.PURCHASE_UNIT !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
    }
    return amount;
  }

  // 2. 로또 발행
  #issueLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);
    this.lottos = [];
    for (let i = 0; i < count; i++) {
      const randomNumbers = Lotto.generateRandomNumbers().sort((a, b) => a - b);
      const lotto = new Lotto(randomNumbers);
      this.lottos.push(lotto);
      Console.print(lotto.getNumbers());
    }
  }

  // 3. 당첨 번호 입력
  getWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요\n", (input) => {
      try {
        this.winningNumbers = this.validateWinningNumbers(input);
        Console.print(`입력된 당첨 번호: ${this.winningNumbers}`);
        this.getBonusNumber(); // 보너스 번호 입력 요청
      } catch (error) {
        Console.print(error.message);
        this.getWinningNumbers(); // 오류 발생 시 재시도
      }
    });
  }

  validateWinningNumbers(input) {
    const numbers = input.split(',').map(Number);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
    return numbers;
  }

  // 4. 보너스 번호 입력
  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요\n", (input) => {
      try {
        this.bonusNumber = this.validateBonusNumber(input);
        Console.print(`입력된 보너스 번호: ${this.bonusNumber}`);
        this.calculateResults(); // 당첨 결과 계산
      } catch (error) {
        Console.print(error.message);
        this.getBonusNumber(); // 오류 발생 시 재시도
      }
    });
  }

  validateBonusNumber(input) {
    const bonusNumber = Number(input);

    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자로 입력해 주세요.");
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (this.winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
    }

    return bonusNumber;
  }

  // 5. 당첨 결과 계산
  calculateResults() {
    this.result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    this.lottos.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto.getNumbers(), this.winningNumbers);
      const isBonusMatched = lotto.getNumbers().includes(this.bonusNumber);

      if (matchCount === 6) {
        this.result.first++;
      } else if (matchCount === 5 && isBonusMatched) {
        this.result.second++;
      } else if (matchCount === 5) {
        this.result.third++;
      } else if (matchCount === 4) {
        this.result.fourth++;
      } else if (matchCount === 3) {
        this.result.fifth++;
      }
    });

    this.printResults();
  }

  getMatchCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((num) => winningNumbers.includes(num)).length;
  }

}

export default App;
