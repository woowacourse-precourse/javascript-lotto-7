import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  static PRIZE_INFO = {
    fifth: { matchCount: 3, prize: 5000, message: "3개 일치 (5,000원) - " },
    fourth: { matchCount: 4, prize: 50000, message: "4개 일치 (50,000원) - " },
    third: { matchCount: 5, prize: 1500000, message: "5개 일치 (1,500,000원) - " },
    second: {
      matchCount: 5,
      prize: 30000000,
      message: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      bonus: true,
    },
    first: { matchCount: 6, prize: 2000000000, message: "6개 일치 (2,000,000,000원) - " },
  };

  async retryOnError(asyncFunc) {
    try {
      return await asyncFunc();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.retryOnError(asyncFunc);
    }
  }

  inputPurchase() {
    return MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  validateMoney(money) {
    const rest = money % 1000;
    if (rest !== 0) {
      throw new Error("[ERROR] 천원 단위로만 입력해 주세요!");
    }
  }

  async inputMoney() {
    return this.retryOnError(async () => {
      const money = await this.inputPurchase();
      this.validateMoney(money);
      return money;
    });
  }

  calculateLotto(money) {
    const lotto = money / 1000;
    return lotto;
  }

  printLottoAmount(amount) {
    MissionUtils.Console.print(`\n${amount}개를 구매했습니다.`);
  }

  createLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return lotto;
  }

  sortLotto(lotto) {
    const sortedLotto = lotto.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
    return sortedLotto;
  }

  async inputLottos(amount) {
    const lottos = [];
    for (let i = 0; i < amount; i++) {
      const lotto = await this.createLotto();
      const sortedLotto = await this.sortLotto(lotto);
      const lottoClass = new Lotto(sortedLotto);
      lottos.push(lottoClass);
    }
    return lottos;
  }

  printLotto(lotto) {
    MissionUtils.Console.print(`[${lotto.join(", ")}]`);
  }

  printLottos(lottos) {
    for (let lotto of lottos) {
      this.printLotto(lotto.getNumbers());
    }
  }

  async playLotto(amount) {
    this.printLottoAmount(amount);
    const lottos = await this.inputLottos(amount);
    return lottos;
  }

  inputWinningNumber() {
    return MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요..\n");
  }

  async run() {
    try {
      const money = await this.inputMoney();
      const lotto = this.calculateLotto(money);
      const lottos = await this.playLotto(lotto);

      this.printLottos(lottos);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
