import Validator from '../src/Validator.js';
import {
  COMMON_ERROR_MESSAGES,
  LOTTO_NUMBER_ERROR_MESSAGES
} from '../src/constants/ERROR_MESSAGES.js';

describe('검증 기능 테스트', () => {
  test('공백 예외 처리', () => {
    expect(() => {
      Validator.validateWhitespace(' 123');
    }).toThrow(COMMON_ERROR_MESSAGES.WHITESPACE_NOT_ALLOWED);
  });

  test('공백 미포함 예외 처리 X', () => {
    expect(() => {
      Validator.validateWhitespace('123');
    }).not.toThrow();
  });

  test('자연수가 아닌 값을 입력하면 예외 처리', () => {
    expect(() => {
      Validator.validateNaturalNumber(-1);
    }).toThrow(COMMON_ERROR_MESSAGES.NOT_A_NATURAL_NUMBER);

    expect(() => {
      Validator.validateNaturalNumber(0);
    }).toThrow(COMMON_ERROR_MESSAGES.NOT_A_NATURAL_NUMBER);
  });

  test('자연수를 입력하면 예외 처리 X', () => {
    expect(() => {
      Validator.validateNaturalNumber(5);
    }).not.toThrow();
  });

  test('빈 문자열을 입력하면 예외 처리', () => {
    expect(() => {
      Validator.validateEmpty('');
    }).toThrow(COMMON_ERROR_MESSAGES.EMPTY_STRING);
  });

  test('빈 문자열이 아닌 경우 예외 처리 X', () => {
    expect(() => {
      Validator.validateEmpty('valid input');
    }).not.toThrow();
  });

  test('로또 번호가 범위를 벗어나면 예외 처리', () => {
    expect(() => {
      Validator.validateLottoNumberRange(0);
    }).toThrow(LOTTO_NUMBER_ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);

    expect(() => {
      Validator.validateLottoNumberRange(46);
    }).toThrow(LOTTO_NUMBER_ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);
  });

  test('로또 번호가 범위 안에 있으면 예외 처리 X', () => {
    expect(() => {
      Validator.validateLottoNumberRange(1);
    }).not.toThrow();

    expect(() => {
      Validator.validateLottoNumberRange(45);
    }).not.toThrow();
  });

  test('보너스 번호가 자연수가 아니면 예외 처리', () => {
    expect(() => {
      Validator.validateBonusNumber('bonus');
    }).toThrow(COMMON_ERROR_MESSAGES.NOT_A_NATURAL_NUMBER);
  });

  test('보너스 번호가 로또 번호 범위를 벗어나면 예외 처리', () => {
    expect(() => {
      Validator.validateBonusNumber(46);
    }).toThrow(LOTTO_NUMBER_ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);
  });

  test('보너스 번호가 유효하면 에러 없이 반환', () => {
    const bonus = Validator.validateBonusNumber(7);
    expect(bonus).toBe(7); // 보너스 번호가 정상적으로 반환됨
  });
});
