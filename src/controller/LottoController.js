import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import Lotto from '../model/Lotto.js';
import BonusNumber from '../model/BonusNumber.js';

class LottoController {
  #purchaseAmount; // 구입금액
  #lotteryNumbers; // 구입한 로또 번호
  #winnigLottoNumbers; // 당첨 번호
  #bonusNumber; // 보너스 번호

  async start() {
    this.#winnigLottoNumbers = await this.#getWinningLottoNumbers();
    this.#bonusNumber = await this.#getBonusNumber();
  }

  async #getWinningLottoNumbers() {
    try {
      const input = await InputView.inputWinningNumbers();
      const splittedInput = input.split(',');
      const convertInput = splittedInput.map((num) => Number(num));
      this.#winnigLottoNumbers = new Lotto(convertInput);
    } catch (error) {
      Console.print(error);
      await this.#getWinningLottoNumbers();
    }
  }

  async #getBonusNumber() {
    try {
      const input = await InputView.inputBonusNumber();
      const convertInput = Number(input);
      this.#bonusNumber = new BonusNumber(convertInput);
    } catch (error) {
      Console.print(error);
      await this.#getBonusNumber();
    }
  }
}
export default LottoController;
