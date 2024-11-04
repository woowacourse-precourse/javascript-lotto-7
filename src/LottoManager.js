import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoManager {
  #lottoArray;
  #winningNumbers;
  #bonusNumber;

  async play() {
    await this.#start();
  }

  async #start() {
    const money = await this.#getMoney();
    this.#lottoArray = Array.from({ length: money }, () => new Lotto());

    const winningNumbers = await this.#getWinningNumbers();
    this.#winningNumbers = winningNumbers;

    const bonusNumber = await this.#getBonusNumber();
    this.#bonusNumber = bonusNumber;
  }

  async #getMoney() {
    while (true) {
      try {
        const money = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        this.#validateMoney(money);
        return Number(money);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const numbersInput = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        const numbersInputArray = numbersInput.split(",");
        this.#validateWinningNumbers(numbersInputArray);
        return numbersInputArray.map(Number);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getBonusNumber() {
    while (true) {
      try {
        const number = await Console.readLineAsync(
          "보너스 번호를 입력해 주세요.\n"
        );
        this.#validateBonusNumber(number);
        return Number(number);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #validateMoney(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 금액은 숫자여야 합니다.");
    }
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1000으로 나누어 떨어져야 합니다.");
    }
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    for (const number of numbers) {
      if (isNaN(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    }
  }

  #validateBonusNumber(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (!Number.isInteger(Number(number))) {
      throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
    }
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
}

export default LottoManager;
