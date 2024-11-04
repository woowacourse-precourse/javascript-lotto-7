import {
  StringHasSpace,
  EmptyString,
  Integer,
  Positive,
  canDivide,
  checkNumbersCount,
  AllInteger,
  checkRange,
  checkDuplicateNumbers,
  bonusNumberAlreadyExist,
} from '../src/validation/validateFunctions.js';

import { ERROR_MESSAGES, NUMBERS } from '../src/validation/constants.js';

describe('validateFunctions 세부 테스트', () => {
  describe('StringHasSpace 테스트', () => {
    test.each([['hello world']])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => StringHasSpace(input)).toThrow(
          ERROR_MESSAGES.SPACE_INCLUDED,
        );
      },
    );

    test.each([['helloWorld']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => StringHasSpace(input)).not.toThrow();
      },
    );
  });

  describe('EmptyString 테스트', () => {
    test.each([['', ERROR_MESSAGES.EMPTY_STRING]])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => EmptyString(input)).toThrow(ERROR_MESSAGES.EMPTY_STRING);
      },
    );

    test.each([['not empty']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => EmptyString(input)).not.toThrow();
      },
    );
  });

  describe('Integer 테스트', () => {
    test.each([['10.5'], ['abc'], [NaN], [Infinity]])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => Integer(input)).toThrow(ERROR_MESSAGES.NOT_AN_INTEGER);
      },
    );

    test.each([['10']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => Integer(input)).not.toThrow();
      },
    );
  });

  describe('Positive 테스트', () => {
    test.each([['999'], ['-1000'], ['0']])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => Positive(input)).toThrow(ERROR_MESSAGES.NOT_POSITIVE);
      },
    );

    test.each([['1000'], ['1001']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => Positive(input)).not.toThrow();
      },
    );
  });

  describe('canDivide 테스트', () => {
    test.each([['1500'], ['500']])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => canDivide(input)).toThrow(
          ERROR_MESSAGES.NOT_A_MULTIPLE_OF_1000,
        );
      },
    );

    test.each([['1000'], ['2000']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => canDivide(input)).not.toThrow();
      },
    );
  });

  describe('checkNumbersCount 테스트', () => {
    test.each([['1,2,3'], ['1,2,3,4,5,6,7']])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => checkNumbersCount(input)).toThrow(
          ERROR_MESSAGES.INVALID_FORMAT,
        );
      },
    );

    test.each([['1,2,3,4,5,6']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => checkNumbersCount(input)).not.toThrow();
      },
    );
  });

  describe('AllInteger 테스트', () => {
    test.each([['1,2,3,4,5,a'], ['1,2,3,4,5.5']])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => AllInteger(input)).toThrow(ERROR_MESSAGES.NOT_AN_INTEGER);
      },
    );

    test.each([['1,2,3,4,5,6']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => AllInteger(input)).not.toThrow();
      },
    );
  });

  describe('checkRange 테스트', () => {
    test.each([['0,1,2,3,4,5'], ['1,2,3,4,5,46']])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => checkRange(input)).toThrow(ERROR_MESSAGES.INVALID_RANGE);
      },
    );

    test.each([['1,2,3,4,5,6']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => checkRange(input)).not.toThrow();
      },
    );
  });

  describe('checkDuplicateNumbers 테스트', () => {
    test.each([['1,2,3,4,5,5']])(
      "입력 값 '%s'에 대해 에러가 발생해야 한다.",
      (input) => {
        expect(() => checkDuplicateNumbers(input)).toThrow(
          ERROR_MESSAGES.DUPLICATE_NUMBERS,
        );
      },
    );

    test.each([['1,2,3,4,5,6']])(
      "입력 값 '%s'에 대해 에러가 발생하지 않아야 한다.",
      (input) => {
        expect(() => checkDuplicateNumbers(input)).not.toThrow();
      },
    );
  });

  describe('bonusNumberAlreadyExist 테스트', () => {
    test.each([['1', [1, 2, 3, 4, 5, 6]]])(
      "입력 값 '%s'와 답안 번호 %s에 대해 에러가 발생해야 한다.",
      (bonusNumber, answerNumbers) => {
        expect(() =>
          bonusNumberAlreadyExist(bonusNumber, answerNumbers),
        ).toThrow(ERROR_MESSAGES.DUPLICATE_BONUS);
      },
    );

    test.each([['7', [1, 2, 3, 4, 5, 6]]])(
      "입력 값 '%s'와 답안 번호 %s에 대해 에러가 발생하지 않아야 한다.",
      (bonusNumber, answerNumbers) => {
        expect(() =>
          bonusNumberAlreadyExist(bonusNumber, answerNumbers),
        ).not.toThrow();
      },
    );
  });
});
