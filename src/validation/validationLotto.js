import { ERROR_MESSAGES } from '../constants/errorMessage.js';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';
import validation from './validation.js';

const validationLotto = {
  purchasePrice(value) {
    validation.integer(value);

    const parsedPurchasePrice = Number(value);

    if (
      parsedPurchasePrice % LOTTO_CONFIG.PRICE !== 0 ||
      parsedPurchasePrice === 0
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_PRICE);
    }
  },
  winningNumbers(value) {
    value.split(',').forEach((number) => {
      validation.integer(number);
    });
  },
  bonusNumber(value, winningLotto) {
    validation.integer(value);

    const parsedBonusNumber = Number(value);

    if (
      parsedBonusNumber < LOTTO_CONFIG.NUMBER_MIN ||
      parsedBonusNumber > LOTTO_CONFIG.NUMBER_MAX
    ) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }

    if (winningLotto.numbers.includes(parsedBonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  },
};

export default validationLotto;
