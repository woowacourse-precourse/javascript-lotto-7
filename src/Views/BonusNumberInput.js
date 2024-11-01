import { Console } from '@woowacourse/mission-utils';
import throwError from '../Utils/throwError.js';
import Rules from '../Utils/Rules.js';

const BonusNumberInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
    return userInput;
  },

  validate: (bonusNumberInput, basicNumbers) => {
    if (Rules.isNoValueString(bonusNumberInput)) {
      return throwError('보너스 번호를 입력해주세요.');
    }

    const bonusNumber = Number(bonusNumberInput);

    if (isNaN(bonusNumber)) {
      return throwError('보너스 번호는 숫자로 입력해야 합니다.');
    }

    if (Rules.isNotRangedValue(bonusNumber)) {
      return throwError('보너스 번호는 1부터 45 사이의 숫자이어야 합니다.');
    }

    if (basicNumbers.includes(bonusNumber)) {
      return throwError('보너스 번호는 당첨 번호와 중복되면 안됩니다.');
    }

    return true;
  },

  parse: (buyPriceInput) => {
    return Number(buyPriceInput);
  },
};

export default BonusNumberInput;
