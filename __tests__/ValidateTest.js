import Validate from '../src/Validate';

describe('유효성 클래스 테스트', () => {
  test('배열의 원소 수가 일치하는기 확인하는 기능 테스트', () => {
    const ARRAY = [1, 2, 3, 4, 5];
    const COUNT = 5;

    expect(Validate.arrayCount(ARRAY, COUNT)).toBeTruthy();
  });

  test('배열의 원소들이 숫자형 문자인지 확인하는 기능 테스트', () => {
    const ARRAY = ['1', '2', '3', '4', '5'];

    expect(Validate.numbers(ARRAY)).toBeTruthy();
  });

  test('숫자형 문자인지 확인하는 기능 테스트', () => {
    const NUM_STRING = '1';

    expect(Validate.number(NUM_STRING)).toBeTruthy();
  });

  test('정수 인지 확인하는 기능 테스트', () => {
    const NUMBER = 1;

    expect(Validate.integer(NUMBER)).toBeTruthy();
  });

  test('배열이 중복된 원소가 없는지 확인하는 기능 테스트', () => {
    const ARRAY = [1, 2, 3, 4, 5];

    expect(Validate.uniqueArray(ARRAY)).toBeTruthy();
  });

  test('배열에 특정 원소가 존재하지 않는지 확인하는 기능 테스트', () => {
    const ARRAY = [1, 2, 3, 4, 5];
    const TARGET = 4;

    expect(Validate.valueIsUnique(ARRAY, TARGET)).toBeFalsy();
  });

  test('주어진 값이 특정 범위안에 속하는지 확인하는 기능 테스트', () => {
    const VALUE = 40;
    const MIN = 1;
    const MAX = 40;
    const TARGET = 4;

    expect(Validate.range(VALUE, MIN, MAX)).toBeTruthy();
  });
});
