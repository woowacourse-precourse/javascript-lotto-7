import { Console } from '@woowacourse/mission-utils';
import ValidatorModule from '../utils/ValidatorModules.js';

class InputModules {
  static async getPurchaseCash() {
    const userInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const purchaseCash = Number(userInput);

    ValidatorModule.checkPurchaseCash(purchaseCash);

    return purchaseCash;
  }

  static async getLottoWinnerNumbers() {
    const winnerNumberInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winnerNumbers = winnerNumberInput.split(',').map((num) => Number(num));

    ValidatorModule.checkLottoNumbers(winnerNumbers);

    return winnerNumbers;
  }

  static async getLottoWinnerBonusNumber(winnerNumbers) {
    const winnerBonusInput = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const winnerBonus = Number(winnerBonusInput);

    ValidatorModule.checkBonusNumber(winnerNumbers, winnerBonus);

    return winnerBonus;
  }
}

export default InputModules;
