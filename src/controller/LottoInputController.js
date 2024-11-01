import InputView from '../view/InputView.js';
import parser from '../utils/parser.js';
import inputPipe from '../utils/inputPipe.js';
import LottoCount from '../domain/LottoCount.js';
import Lotto from '../domain/Lotto.js';
import LottoBonus from '../domain/LottoBonus.js';

class LottoInputController {
  static async getLottoPurchasePrice() {
    return await inputPipe(
      InputView.readLottoPurchasePriceAsync,
      parser.parseStringToNumber,
      LottoCount,
      'getLottoCount',
    );
  }

  static async getWinningNumbers() {
    return await inputPipe(
      InputView.readWinningNumbersAsync,
      parser.parseExtractNumbers,
      Lotto,
      'getLottoNumbers',
    );
  }

  static async getBonusNumber(winningNumbers) {
    return await inputPipe(
      InputView.readBonusNumberAsnyc,
      parser.parseStringToNumber,
      LottoBonus,
      'getBonusNumber',
      [winningNumbers],
    );
  }
}

export default LottoInputController;
