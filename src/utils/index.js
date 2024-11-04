import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/index.js';

const calculateQuatity = (purchaseAmount) =>
  parseInt(purchaseAmount, 10) / LOTTO.UNIT_PRICE;

const generateRandomNumbers = () =>
  Random.pickUniqueNumbersInRange(
    LOTTO.MINIMUM_NUMBER,
    LOTTO.MAXIMUM_NUMBER,
    LOTTO.NUMBER_OF_SPACE,
  );

const splitBySeperator = (seperator, string) =>
  string.split(seperator).map(Number);

export { calculateQuatity, generateRandomNumbers, splitBySeperator };
