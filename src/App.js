import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    let amount;
    while (true) {
      try {
        amount = await this.getPurchaseAmount();
        this.validatePurchaseAmount(amount);
        Console.print(`구입 금액: ${amount}원`);

        const lottoTickets = this.generateLottos(amount);
        this.printLottos(lottoTickets);

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getPurchaseAmount() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return Number(input);
    } catch (error) {
      console.error("Error reading input:", error);
    }
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  generateLottos(amount) {
    const lottoCount = amount / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottos.push(lottoNumbers);
    }
    return lottos;
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }
}

export default App;
