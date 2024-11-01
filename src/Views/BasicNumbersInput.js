import { Console } from '@woowacourse/mission-utils';
import throwError from '../Utils/throwError.js';
import Rules from '../Utils/Rules.js';

const BasicNumbersInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    return userInput;
  },

  validate: (basicNumbersInput) => {
    if (Rules.isNoValueString(basicNumbersInput)) {
      return throwError('당첨 번호를 입력해주세요.');
    }

    const basicNumbers = basicNumbersInput.split(',');

    if (basicNumbers.length !== 6) {
      return throwError('6개의 숫자를 구분자로 구분하여 입력해주세요.');
    }

    if (Rules.isDuplicatedValue(basicNumbers)) {
      return throwError('중복되지 않는 숫자를 구분자로 구분하여 입력해주세요.');
    }

    const isValid = basicNumbers.every((numberString) => {
      if (isNaN(numberString)) {
        return throwError('문자가 아닌 숫자를 구분자로 구분하여 입력해주세요.');
      }

      if (Rules.isNoValueString(numberString)) {
        return throwError('입력하지 않은 숫자가 있습니다.');
      }

      const number = Number(numberString);
      if (Rules.isNotRangedValue(number)) {
        return throwError('1~45사이의 숫자를 구분자로 구분하여 입력해주세요.');
      }

      return true;
    });

    return isValid;
  },

  parse: (basicNumbersInput) => {
    return basicNumbersInput
      .split(',')
      .map((numberString) => Number(numberString));
  },
};

export default BasicNumbersInput;
