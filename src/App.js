import {Console} from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const amount = await this.#getPurchaseAmount();
      const lottoCount = this.#calculateLottoCount(amount);
      this.#generateLottos(lottoCount);
      Console.print(`\n${lottoCount}개를 구매했습니다.`);
      this.#printLottos();
    } catch (error) {
      Console.print(error.message);
    }
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      this.#generateLottos.push(Lotto.generate());
    }
  }

  #printLottos() {
    this.#printLottos.forEach((lotto) => {
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
