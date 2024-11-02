import validation from '../validation.js';
import retry from './retry.js';
import { inputMethod, outputMethod } from './ioMethod.js';
import { Random } from '@woowacourse/mission-utils';
import { NUM } from '../constants/index.js';

const createObject = {
  createPurchaseAmount: async function () {
    const validationCondition = Object.values(validation.purchaseAmount);
    return await retry(inputMethod.inputPurchaseAmount, validationCondition);
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
    const validationCondition = Object.values(validation.winningNumber);
    return await retry(inputMethod.inputWinningNumber, validationCondition);
  },

  createBonusNumber: async function () {},
};

export default createObject;
