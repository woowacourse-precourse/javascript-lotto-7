import validator from '../src/Validators/Validator.js';
import {
  DEFAULT_RULES,
  PURCHASE_AMOUNT_RULES,
  LOTTO_NUMBER_LIST_RULES,
  LOTTO_NUMBER_RULES,
  BONUS_NUMBER_RULES,
} from '../src/Validators/Rules.js';
import CustomError from '../src/Utils/CustomError.js';

describe('유효성 검사 테스트', () => {
  test('입력값이 존재하지 않으면 예외 발생한다.', () => {
    const input = '';
    expect(() => {
      validator(input, DEFAULT_RULES);
    }).toThrow('[ERROR]');
  });

  test.each([
    {
      input: '3f4n',
      message: PURCHASE_AMOUNT_RULES.notNumber.errorMessage,
    },
    {
      input: '-10.53',
      message: PURCHASE_AMOUNT_RULES.notInteger.errorMessage,
    },
    {
      input: '950',
      message: PURCHASE_AMOUNT_RULES.lessNumber.errorMessage,
    },
    {
      input: '34004',
      message: PURCHASE_AMOUNT_RULES.disableThousand.errorMessage,
    },
  ])(
    `구입금액 '$input'은 '$message' 에러가 발생한다.`,
    ({ input, message }) => {
      expect(() => {
        validator(input, PURCHASE_AMOUNT_RULES);
      }).toThrow(new CustomError(message));
    },
  );

  test.each([
    {
      input: '1, 2, 3, 4, 5, 6, 7',
      message: LOTTO_NUMBER_LIST_RULES.validLength.errorMessage,
    },
    {
      input: '1, 1, 2, 3, 4, 5',
      message: LOTTO_NUMBER_LIST_RULES.duplicate.errorMessage,
    },
    {
      input: '1, 2, 3,     , 5, 6',
      message: LOTTO_NUMBER_RULES.empty.errorMessage,
    },
    {
      input: '1, 2, 2f, 3, 4, 5',
      message: LOTTO_NUMBER_RULES.notNumber.errorMessage,
    },
    {
      input: '1, 2, 34\\n, 3, 4, 5',
      message: LOTTO_NUMBER_RULES.notNumber.errorMessage,
    },
    {
      input: '1, 2, 2.23, 3, 4, 5',
      message: LOTTO_NUMBER_RULES.notInteger.errorMessage,
    },
    {
      input: '1, 2, -2, 3, 4, 5',
      message: LOTTO_NUMBER_RULES.validRange.errorMessage,
    },
    {
      input: '1, 2, 3, 4, 5, 56',
      message: LOTTO_NUMBER_RULES.validRange.errorMessage,
    },
    {
      input: '1, 0, 2, 3, 4, 5',
      message: LOTTO_NUMBER_RULES.validRange.errorMessage,
    },
  ])(
    `당첨 번호들 '$input'은 '$message' 에러가 발생한다.`,
    ({ input, message }) => {
      const lottoList = input.split(',').map((n) => n.trim());
      expect(() => {
        validator(lottoList, LOTTO_NUMBER_LIST_RULES);
        lottoList.forEach((number) => {
          validator(number, LOTTO_NUMBER_RULES);
        });
      }).toThrow(new CustomError(message));
    },
  );

  test.each([
    {
      input: { bonusNumber: '34%' },
      message: BONUS_NUMBER_RULES.notNumber.errorMessage,
    },
    {
      input: { bonusNumber: 'f2' },
      message: BONUS_NUMBER_RULES.notNumber.errorMessage,
    },
    {
      input: { bonusNumber: '3.5325' },
      message: BONUS_NUMBER_RULES.notInteger.errorMessage,
    },
    {
      input: { bonusNumber: '76' },
      message: BONUS_NUMBER_RULES.validRange.errorMessage,
    },
    {
      input: { bonusNumber: '0' },
      message: BONUS_NUMBER_RULES.validRange.errorMessage,
    },
    {
      input: {
        lottoNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: '5',
      },
      message: BONUS_NUMBER_RULES.duplicate.errorMessage,
    },
  ])(
    `보너스 번호 '$input'은 '$message' 에러가 발생한다.`,
    ({ input, message }) => {
      expect(() => {
        validator(input, BONUS_NUMBER_RULES);
      }).toThrow(new CustomError(message));
    },
  );
});
