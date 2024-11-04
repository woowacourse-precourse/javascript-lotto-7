import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class App {
  async run() {
    this.#askPurchaseAmount();
  }

  #askPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.#validatePurchaseAmount(input);
      const amount = parseInt(input, 10);
      const lottoCount = Math.floor(amount / 1000);
      Console.print(`\n${lottoCount}개를 구매했습니다.\n`);
      this.lottos = this.#generateLottos(lottoCount);
      this.#askWinningNumbers();
    });
  }

  #validatePurchaseAmount(input) {
    const amount = parseInt(input, 10);
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
    }
  }

  #generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = this.#generateLottoNumbers();
      lottos.push(new Lotto(numbers));
      Console.print(`[${numbers.join(", ")}]`);
    }
    return lottos;
  }

  #generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }

  #askWinningNumbers() {
    Console.readLine(
      "\n당첨 번호를 입력해 주세요. (쉼표로 구분하여 6개 입력)\n",
      (input) => {
        const winningNumbers = this.#validateWinningNumbers(input);
        this.#askBonusNumber(winningNumbers);
      }
    );
  }

  #validateWinningNumbers(input) {
    const numbers = input.split(",").map((num) => parseInt(num.trim(), 10));
    if (
      numbers.length !== 6 ||
      numbers.some((num) => isNaN(num) || num < 1 || num > 45)
    ) {
      throw new Error(
        "[ERROR] 당첨 번호는 1~45 사이의 숫자 6개여야 하며, 중복이 없어야 합니다."
      );
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(
        "[ERROR] 당첨 번호는 중복되지 않는 6개의 숫자여야 합니다."
      );
    }
    return numbers;
  }

  #askBonusNumber(winningNumbers) {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
      const bonusNumber = this.#validateBonusNumber(input, winningNumbers);
      Console.print(
        `\n당첨 번호: [${winningNumbers.join(
          ", "
        )}], 보너스 번호: ${bonusNumber}`
      );
      this.#calculateResults(winningNumbers, bonusNumber);
    });
  }

  #validateBonusNumber(input, winningNumbers) {
    const bonusNumber = parseInt(input.trim(), 10);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
    }
    return bonusNumber;
  }

  #calculateResults(winningNumbers, bonusNumber) {
    const results = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    this.lottos.forEach((lotto) => {
      const matchCount = lotto
        .getNumbers()
        .filter((num) => winningNumbers.includes(num)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) {
        results[1]++;
      } else if (matchCount === 5 && hasBonus) {
        results[2]++;
      } else if (matchCount === 5) {
        results[3]++;
      } else if (matchCount === 4) {
        results[4]++;
      } else if (matchCount === 3) {
        results[5]++;
      }
    });

    this.#printResults(results);
  }

  #printResults(results) {
    Console.print(`\n당첨 통계`);
    Console.print(`---`);
    Console.print(`3개 일치 (5,000원) - ${results[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[1]}개`);
  }
}

export default App;
