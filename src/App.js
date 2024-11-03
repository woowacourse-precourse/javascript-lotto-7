import LottoMachine from "./LottoMachine.js";
import Lotto from "./Lotto.js";
import { getUserInputAsync, printEmptyLine, printMessage } from "./utils/interface.js";
import BonusNumber from "./BonusNumber.js";

class App {
  #lottoMachine;
  #winningLotto;
  #bonusNumber;

  async run() {
    await this.#getUserMoneyInput();

    printEmptyLine();
    printMessage(this.#lottoMachine.getTicketAmountString());
    printMessage(this.#lottoMachine.getTicketsNumberString());

    printEmptyLine();
    await this.#getUserLottoNumberInput();

    printEmptyLine();
    await this.#getUserBonusNumberInput();

    const resultString = this.#lottoMachine.getWinningLottery({
      winningLotto: this.#winningLotto,
      bonusNumber: this.#bonusNumber,
    });

    printMessage("당첨 통계");
    printMessage("---");
    printMessage(resultString);

    const profitRate = this.#lottoMachine.getProfitRate();
    printMessage(`총 수익률은 ${profitRate}%입니다.`);
  }

  async #getUserMoneyInput() {
    try {
      const userMoneyInput = await getUserInputAsync("구입금액을 입력해 주세요.\n");
      this.#lottoMachine = new LottoMachine(userMoneyInput);
    } catch (error) {
      printMessage(error.message);
      await this.#getUserMoneyInput();
    }
  }

  async #getUserLottoNumberInput() {
    try {
      const userLottoInput = await getUserInputAsync("당첨 번호를 입력해 주세요.\n");
      const lottoNumbers = userLottoInput.split(",").map(Number);
      this.#winningLotto = new Lotto(lottoNumbers);
    } catch (error) {
      printMessage(error.message);
      await this.#getUserLottoNumberInput();
    }
  }

  async #getUserBonusNumberInput() {
    try {
      const userBonusInput = await getUserInputAsync("보너스 번호를 입력해 주세요.\n");
      const bonusNumber = Number(userBonusInput);
      this.#bonusNumber = new BonusNumber(this.#winningLotto, bonusNumber);
    } catch (error) {
      printMessage(error.message);
      await this.#getUserBonusNumberInput();
    }
  }
}

export default App;
