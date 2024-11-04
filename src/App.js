import LottoChecker from "./LottoChecker.js";
import LottoCreator from "./LottoCreator.js";
import OutputView from "./OutputView.js";
import UserInput from "./UserInput.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #userInput;
  #lottoCreator;
  #lottoChecker;
  #outputView;

  constructor() {
    this.#userInput = new UserInput();
    this.#lottoCreator = new LottoCreator();
    this.#lottoChecker = new LottoChecker();
    this.#outputView = new OutputView();
  }

  async run() {
    const amount = await this.#userInput.getUserInput("purchaseAmount");
    const lottoCount = this.#lottoCreator.getLottoCount(amount);

    MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);

    const lottos = this.#lottoCreator.createLotto(lottoCount);
    this.#lottoCreator.printLottos(lottos);

    const winningNumbers = (await this.#userInput.getUserInput("winningNumber"))
      .split(",")
      .map((number) => Number(number.trim()));
    const bonusNumber = Number(
      await this.#userInput.getUserInput("bonusNumber")
    );

    const checkedLottos = this.#lottoChecker.checkWinning(
      lottos,
      winningNumbers,
      bonusNumber
    );

    this.#outputView.printWinningStatistics(checkedLottos);

    const totalPrize = this.#lottoChecker.calculateTotalPrize();
    this.#outputView.printProfitRate(totalPrize, lottoCount);
  }
}

export default App;
