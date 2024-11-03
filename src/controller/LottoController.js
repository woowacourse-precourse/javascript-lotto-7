import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../model/Lotto.js';
import BonusNumber from '../model/BonusNumber.js';
import Purchase from '../model/Purchase.js';
import Result from '../model/Result.js';

class LottoController {
  #purchase; // purchase 인스턴스
  #purchaseAmount; // 구입금액
  #tickets; // 구입 수량
  #lotteryNumbers; // 구입한 로또 번호
  #winningLottoNumbers; // 당첨 번호
  #bonusNumber; // 보너스 번호
  #result;

  async start() {
    await this.#getPurchase();
    await this.#getWinningLottoNumbers();
    await this.#getBonusNumber();
    await this.#getWinningResult();
  }

  async #getPurchase() {
    try {
      const input = await InputView.inputAmount();
      this.#purchaseAmount = Number(input);
      this.#purchase = new Purchase(this.#purchaseAmount);
      this.#tickets = this.#purchase.purchaseTickets();
      await OutputView.printLottoTickets(this.#tickets);
      this.#lotteryNumbers = this.#purchase.generateLotteryNumbers();
      await OutputView.printLottoNumbers(this.#tickets, this.#lotteryNumbers);
    } catch (error) {
      Console.print(error);
      await this.#getPurchase();
    }
  }

  async #getWinningLottoNumbers() {
    try {
      const input = await InputView.inputWinningNumbers();
      const splittedInput = input.split(',');
      this.#winningLottoNumbers = splittedInput.map((num) => Number(num));
      return new Lotto(this.#winningLottoNumbers);
    } catch (error) {
      Console.print(error);
      await this.#getWinningLottoNumbers();
    }
  }

  async #getBonusNumber() {
    try {
      const input = await InputView.inputBonusNumber();
      this.#bonusNumber = Number(input);
      return new BonusNumber(this.#bonusNumber, this.#winningLottoNumbers);
    } catch (error) {
      Console.print(error);
      await this.#getBonusNumber();
    }
  }

  async #getWinningResult() {
    this.#result = new Result(
      this.#winningLottoNumbers,
      this.#bonusNumber,
      this.#lotteryNumbers,
      this.#purchaseAmount
    );
    await this.#result.winningResult();
    OutputView.printWinningResult(
      this.#result.getWinningRank(),
      this.#result.getTotalRate()
    );
  }
  s;
}

export default LottoController;
