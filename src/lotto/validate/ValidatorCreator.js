import { config } from '../../config.js';
import LottoRuleValidator from './LottoRuleValidator.js';
import LottoNumberValidator from './LottoNumberValidator.js';
import PurchaseAmountValidator from './PurchaseAmountValidator.js';
import WinningNumberValidator from './WinningNumberValidator.js';

const setLottoRule = () => {
  const { lottoConfig } = config;

  const lottoRule = Object.freeze({
    lottoAmount: lottoConfig.LOTTO_AMOUNT,
    maxlottoPurchaseAmount: lottoConfig.MAX_PURCHASE_AMOUNT,
    lottoNumberCount: lottoConfig.NUMBER_COUNT,
    lottoNumberRange: {
      startNumber: lottoConfig.NUMBER_RANGE.START_NUMBER,
      endNumber: lottoConfig.NUMBER_RANGE.END_NUMBER,
    }
  });

  const lottoRuleValidator = new LottoRuleValidator();
  lottoRuleValidator.validate(lottoRule);

  return lottoRule;
}

const lottoRule = setLottoRule();

export const createLottoNumberValidator = () => new LottoNumberValidator(
  lottoRule.lottoNumberCount, lottoRule.lottoNumberRange
);


export const createPurchaseAmountValidator = () => new PurchaseAmountValidator(
  lottoRule.lottoAmount, lottoRule.maxlottoPurchaseAmount
);

export const createWinningNumberValidator = () => new WinningNumberValidator(
  lottoRule.lottoNumberCount, lottoRule.lottoNumberRange
);

