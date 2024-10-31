import { Console } from "@woowacourse/mission-utils";
import LottoMoneyValidator from "./validator/LottoMoneyValidator.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottoMoneyValidator = new LottoMoneyValidator();
  }
  async run() {
    try {
      const money = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      const lottoMoney = this.lottoMoneyValidator.validateLottoMoney(parseInt(money.trim(), 10))
      const lottoCount = lottoMoney / 1000;
      const lottos = this.generateLottos(lottoCount);
      this.printLottos(lottos);
    }
    catch (error) {
      Console.print(error.message);
      //throw error;
    }
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Lotto.getRandomSixNumbers();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }

  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

}

export default App;
