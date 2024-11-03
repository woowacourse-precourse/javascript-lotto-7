import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';
import ERROR_MESSAGE from '../utils/constants/errorMessage.js';
import RandomLotto from '../service/RandomLotto.js';
import UserLotto from '../service/UserLotto.js';

class InputView {
  constructor() {
    this.randomLotto = new RandomLotto();
    this.userLotto = new UserLotto();
  }

  async askPurchasePrice() {
    while (true) {
      try {
        const purchasePrice = await Console.readLineAsync(
          MESSAGE.USER_COST_PROMPT,
        );
        this.randomLotto.checkPurchasePrice(purchasePrice);
        return purchasePrice;
      } catch (error) {
        Console.print(ERROR_MESSAGE.PRICE_ERROR);
      }
    }
  }

  async askUserLotto() {
    while (true) {
      try {
        const userInput = await Console.readLineAsync(
          MESSAGE.USER_LOTTO_NUMBER_PROMPT,
        );
        const userLotto = this.userLotto.setUserLotto(userInput);
        Console.print('');
        return userLotto;
      } catch (error) {
        Console.print(ERROR_MESSAGE.LOTTO_INPUT_ERROR);
      }
    }
  }

  async askBonusLotto(lotto) {
    while (true) {
      try {
        const userInput = await Console.readLineAsync(
          MESSAGE.USER_BONUS_NUMBER_PROMPT,
        );
        const userBonus = this.userLotto.setUserBonusLotto(lotto, userInput);
        Console.print('');
        return userBonus;
      } catch (error) {
        Console.print(ERROR_MESSAGE.LOTTO_INPUT_ERROR);
      }
    }
  }
}
export default InputView;
