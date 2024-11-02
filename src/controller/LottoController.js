import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import Lotto from '../model/Lotto.js';

class LottoController {
  #purchaseAmount; // 구입금액
  #lotteryNumbers; // 구입한 로또 번호
  #winnigLottoNumbers; // 당첨 번호
  #bonusNumber; // 보너스 번호

  async start() {
    this.#winnigLottoNumbers = await this.#getWinningLottoNumbers();
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
}
export default LottoController;
