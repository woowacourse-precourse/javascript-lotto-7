import validation from '../validation.js';
import { inputMethod, outputMethod } from './ioMethod.js';
import { Random } from '@woowacourse/mission-utils';
import { NUM } from '../constants/index.js';
import Lotto from '../Lotto.js';
import BonusNumber from '../BonusNumber.js';

const createObject = {
  createPurchaseAmount: async function () {
    const validationCondition = Object.values(validation.purchaseAmount);
    try {
      const purchaseAmount = await inputMethod.inputPurchaseAmount();
      validationCondition.forEach((condition) => {
        condition(purchaseAmount);
      });
      return purchaseAmount;
    } catch (error) {
      outputMethod(error.message);
      return await this.createPurchaseAmount();
    }
  },
  createMyLotto: function (lottoCount) {
    const myLotto = Array.from({ length: lottoCount }).map((numbers) => {
      numbers = Random.pickUniqueNumbersInRange(
        NUM.STARTINCLUSIVE,
        NUM.ENDINCLUSIVE,
        NUM.LOTTO_NUMBER_COUNT,
      );
      outputMethod(`[${numbers.join(', ')}]`);
      return numbers;
    });
    outputMethod('\n');
    return myLotto;
  },
  createWinningNumber: async function () {
    try {
      return new Lotto(await inputMethod.inputWinningNumber());
    } catch (error) {
      outputMethod(error.message);
      return this.createWinningNumber();
    }
  },

  createBonusNumber: async function (winningNumber) {
    try {
      return new BonusNumber(
        winningNumber,
        await inputMethod.inputBonusNumber(),
      );
    } catch (error) {
      outputMethod(error.message);
      return this.createBonusNumber(winningNumber);
    }
  },
};

export default createObject;
