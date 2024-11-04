import LottoCreator from "./LottoCreator.js";
import UserInput from "./UserInput.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #userInput;
  #lottoCreator;

  constructor() {
    this.#userInput = new UserInput();
    this.#lottoCreator = new LottoCreator();
  }

  async run() {
    const amount = await this.#userInput.getUserInput("purchaseAmount");
    const lottoCount = this.#lottoCreator.getLottoCount(amount);

    MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);

    const lottos = this.#lottoCreator.createLotto(lottoCount);
    this.#lottoCreator.printLottos(lottos);

    const numbers = await this.#userInput.getUserInput("winningNumber");
    const bonus = await this.#userInput.getUserInput("bonusNumber");
  }
}

export default App;
