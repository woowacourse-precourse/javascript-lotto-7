import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import Lotto from '../model/Lotto.js';
import BonusNumber from '../model/BonusNumber.js';

class LottoController {
  #purchaseAmount; // 구입금액
  #lotteryNumbers; // 구입한 로또 번호
  #winningLottoNumbers; // 당첨 번호
  #bonusNumber; // 보너스 번호

  async start() {
    await this.#getWinningLottoNumbers();
    await this.#getBonusNumber();
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
}

export default LottoController;
