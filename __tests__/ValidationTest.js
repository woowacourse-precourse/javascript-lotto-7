import { isNotEmpty, isNumerical, endsWithThreeZeros, isInRange } from '../src/Validation.js';

test('입력이 비어있는 경우 에러가 발생한다.', () => {
  expect(() => isNotEmpty('')).toThrow(
    '[ERROR] 입력값이 없습니다.'
  );
});

test('입력이 비어있지 않은 경우 에러가 발생하지 않는다.', () => {
  expect(() => isNotEmpty('a')).not.toThrow(
    '[ERROR] 입력값이 없습니다.'
  );
});

describe('숫자 이외의 문자가 포함된 경우 에러가 발생한다.', () => {
  test.each([
    ['12,000', '쉼표가 포함된 입력'],
    ['12000 ', '공백이 포함된 입력'],
    ['12000won', '알파벳이 포함된 입력'],
  ])('%s - %s', (input, description) => {
    expect(() => isNumerical(input)).toThrow(
      '[ERROR] 숫자만 입력해 주세요.'
    );
  });
});

test('숫자만 입력된 경우 에러가 발생하지 않는다.', () => {
  expect(() => isNumerical('1234567890')).not.toThrow(
    '[ERROR] 숫자만 입력해 주세요.'
  );
});

test('입력값이 1,000원 단위가 아닐 경우 에러가 발생한다.', () => {
  expect(() => endsWithThreeZeros('12300')).toThrow(
    '[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.'
  );
});

test('입력값이 1,000원 단위일 경우 에러가 발생하지 않는다.', () => {
  expect(() => endsWithThreeZeros('12000')).not.toThrow(
    '[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.'
  );
});

describe('입력값이 1보다 작거나 45보다 클 경우 에러가 발생한다.', () => {
  test.each([
    ['0', '1보다 작은 수'],
    ['46', '45보다 큰 수'],
  ])('%s - %s', (input, description) => {
    expect(() => isInRange(input)).toThrow(
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
    )
  });
});

test('입력값이 1부터 45 사이의 숫자일 경우 에러가 발생하지 않는다.', () => {
  expect(() => isInRange('25')).not.toThrow(
    '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
  );
});