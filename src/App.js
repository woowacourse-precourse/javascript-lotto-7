import { createObject, outputMethod } from './utils/index.js';
import { NUM, IOMESSAGE } from './constants/index.js';
import Lotto from './Lotto.js';

class App {
  #purchaseAmount;
  #lottoCount;

  async run() {
    await this.#inputPurchaseAmountAndLottoCount();

    outputMethod(`\n${this.#lottoCount}${IOMESSAGE.OUTPUT_PURCHASE_AMOUNT}`);

    const myLotto = createObject.createMyLotto(this.#lottoCount);
    const winningNumber = new Lotto(await createObject.createWinningNumber());
    const bonusNumber = await createObject.createBonusNumber();

    outputMethod(`\n${IOMESSAGE.WINNING_RESULT}`);
    outputMethod(`${IOMESSAGE.DIVIDER}`);

    this.#printWinningResult(myLotto, bonusNumber, winningNumber);
  }

  async #inputPurchaseAmountAndLottoCount() {
    this.#purchaseAmount = await createObject.createPurchaseAmount();
    this.#lottoCount = this.#purchaseAmount / NUM.LOTTO_PRICE;
  }

  #printWinningCnt(winningResult) {
    let idx = 0;
    for (const value of Object.values(IOMESSAGE.WINNING_AMOUNT)) {
      outputMethod(`${value}${winningResult[idx]}개`);
      idx += 1;
    }
  }

  #printReturn(winningReturn) {
    outputMethod(
      `${IOMESSAGE.RETURN_FRONT}${winningReturn}${IOMESSAGE.RETURN_BACK}`,
    );
  }

  #printWinningResult(myLotto, bonusNumber, winningNumber) {
    const winningResult = winningNumber.checkWinning(myLotto, bonusNumber);
    this.#printWinningCnt(winningResult);
    this.#printReturn(
      winningNumber.calculateReturn(this.#purchaseAmount, winningResult),
    );
  }
}

export default App;
