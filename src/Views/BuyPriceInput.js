import { Console } from '@woowacourse/mission-utils';
import throwError from '../Utils/throwError.js';

const BuyPriceInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    return userInput;
  },

  validate: (buyPriceInput) => {
    if (
      buyPriceInput === '' ||
      buyPriceInput === null ||
      buyPriceInput === undefined
    ) {
      return throwError('구입 금액을 입력해주세요.');
    }

    const buyPrice = Number(buyPriceInput);

    if (isNaN(buyPrice)) {
      return throwError('구입 금액은 숫자로 입력해야 합니다.');
    }

    if (buyPrice < 0) {
      return throwError('구입 금액은 0원 이상이어야 합니다.');
    }

    if (buyPrice >= 1000000000000) {
      return throwError('구입 금액은 1조원을 넘을 수 없습니다.');
    }

    if (buyPrice % 1000 !== 0) {
      return throwError('구입 금액은 1,000원 단위로 떨어져야 합니다.');
    }

    return true;
  },
};

export default BuyPriceInput;
