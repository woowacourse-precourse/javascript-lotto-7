import { Console } from '@woowacourse/mission-utils';
import { IOMessage } from '../constants/IOMessage.js';
import Lotto from '../Lotto.js';
import LottoGenerator from '../util/LottoGenerator.js';
import formatLottoNumbers from '../util/formatters/formatLottoNums.js';
import BonusNum from '../BonusNum.js';

export class InputService {
  static async getPurchasedLotto() {
    while (true) {
      try {
        const lottoPrice = await Console.readLineAsync(IOMessage.PRICE_INPUT);
        const purchasedLotto = new LottoGenerator(lottoPrice);
        const purchasedLottoNumbers = purchasedLotto.generateLottoNumbers();
        Console.print(`${IOMessage.PURCHASED_COUNT(lottoPrice)}`);
        Console.print(formatLottoNumbers(purchasedLottoNumbers));
        return { lottoPrice, purchasedLottoNumbers };
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
      }
    }
  }

  static async getWinningNumbers() {
    while (true) {
      try {
        const winningNum = await Console.readLineAsync(IOMessage.LOTTO_INPUT);
        return new Lotto(winningNum.split(','));
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
      }
    }
  }

  static async getBonusNumber(winningLotto) {
    while (true) {
      try {
        const bonusNumInput = await Console.readLineAsync(IOMessage.BONUS_NUM_INPUT);
        return new BonusNum(bonusNumInput.trim(), winningLotto);
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
      }
    }
  }
}
