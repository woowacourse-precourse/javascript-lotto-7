import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  static PURCHASE_UNIT = 1000;

  async run() {
    this.requestPurchaseAmount(); // 구입 금액 요청
  }

  requestPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      try {
        const purchaseAmount = this.#getValidatedAmount(input);
        const lottoCount = purchaseAmount / App.PURCHASE_UNIT;
        this.#issueLottos(lottoCount);

        // 구입 금액이 유효할 때만 getWinningNumbers 호출
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

  #issueLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);
    for (let i = 0; i < count; i++) {
      const randomNumbers = Lotto.generateRandomNumbers().sort((a, b) => a - b);
      const lotto = new Lotto(randomNumbers);
      Console.print(lotto.getNumbers());
    }
  }

  getWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요\n", (input) => {
      try {
        const winningNumbers = this.validateWinningNumbers(input);
        Console.print(`입력된 당첨 번호: ${winningNumbers}`);
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
}

  export default App;
