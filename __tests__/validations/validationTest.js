import validation from '../../src/validations/validation.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessage.js';

describe('validation 테스트', () => {
  test('numericString이 숫자가 아닌 문자를 포함할 때 오류를 발생시키는지 테스트', () => {
    expect(() => validation.numericString('')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => validation.numericString(' ')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => validation.numericString('-1')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => validation.numericString('1.1')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => validation.numericString('1e2')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
  });

  test('numericString이 올바른 숫자 문자열에 대해 오류를 발생시키지 않는지 테스트', () => {
    expect(() => validation.numericString('123')).not.toThrow();
    expect(() => validation.numericString('456789')).not.toThrow();
  });
});
