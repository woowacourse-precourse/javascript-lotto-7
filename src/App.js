import { Console } from "@woowacourse/mission-utils";
import LottoMoneyValidator from "./validator/LottoMoneyValidator.js";
import Lotto from "./Lotto.js";
import InputHandler from "./handler/InputHandler.js"

class App {
  constructor() {
    this.lottoMoneyValidator = new LottoMoneyValidator();
    this.inputHandler = new InputHandler();
  }
  async run() {
    try {
      const lottoMoney = await this.inputHandler.getLottoMoney();
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
