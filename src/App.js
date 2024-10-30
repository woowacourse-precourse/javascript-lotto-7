import {Console} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];

  async run() {
    try {
      const amount = await this.#getPurchaseAmount();
      const lottoCount = this.#calculateLottoCount(amount);
      this.#generateLottos(lottoCount);
      Console.print(`\n${lottoCount}개를 구매했습니다.`);
      this.#printLottos();
      await this.#getWinningNumbers();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #getWinningNumbers() {
    const numbers = await this.#inputWinningNumbers();
    const bonus = await this.#inputBonusNumber(numbers);
    return {numbers, bonus};
  }

  async #inputWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = input.split(",").map((number) => Number(number.trim()));
    this.#validateWinningNumbers(numbers);
    return numbers;
  }

  async #inputBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonus = Number(input);
    this.#validateBonusNumber(bonus, winningNumbers);
    return bonus;
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error("[ERROR] 당첨 번호는 정수여야 합니다.");
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }
  }

  #validateBonusNumber(bonus, winningNumbers) {
    if (!Number.isInteger(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      this.#lottos.push(Lotto.generate());
    }
  }

  #printLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

  async #getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);
    this.#validatePurchaseAmount(amount);
    return amount;
  }

  #validatePurchaseAmount(amount) {
    if (Number.isNaN(amount)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
    if (!Number.isInteger(amount)) {
      throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
    }
    if (amount < 1000) {
      throw new Error("[ERROR] 구입 금액은 1,000원 이상이어야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  #calculateLottoCount(amount) {
    return amount / 1000;
  }
}

export default App;
