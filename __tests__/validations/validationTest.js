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

  test('safeInteger가 안전 범위를 벗어나는 경우 오류를 발생시키는지 테스트', () => {
    expect(() => validation.safeInteger(Number.MAX_SAFE_INTEGER + 1)).toThrow(
      ERROR_MESSAGES.SAFE_INTEGER
    );
    expect(() => validation.safeInteger(Number.MIN_SAFE_INTEGER - 1)).toThrow(
      ERROR_MESSAGES.SAFE_INTEGER
    );
  });

  test('safeInteger가 안전 범위 내의 정수에 대해 오류를 발생시키지 않는지 테스트', () => {
    expect(() => validation.safeInteger(123)).not.toThrow();
    expect(() => validation.safeInteger(Number.MAX_SAFE_INTEGER)).not.toThrow();
    expect(() => validation.safeInteger(Number.MIN_SAFE_INTEGER)).not.toThrow();
  });

  test('integer가 올바른 정수 문자열에 대해 오류를 발생시키지 않는지 테스트', () => {
    expect(() => validation.integer('123')).not.toThrow();
  });

  test('integer가 숫자가 아닌 문자열 또는 안전 범위를 벗어나는 숫자일 때 오류를 발생시키는지 테스트', () => {
    expect(() => validation.integer('')).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    expect(() => validation.integer(' ')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => validation.integer('-1')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => validation.integer('1.1')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() => validation.integer('1e2')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER
    );
    expect(() =>
      validation.integer(String(Number.MAX_SAFE_INTEGER + 1))
    ).toThrow(ERROR_MESSAGES.SAFE_INTEGER);
  });
});
