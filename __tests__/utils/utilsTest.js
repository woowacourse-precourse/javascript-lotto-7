import utils from '../../src/utils/utils.js';

describe('sortRandoms 메서드 테스트', () => {
  test('정렬되지 않은 배열을 오름차순으로 정렬한다.', () => {
    // given
    const INPUT = [5, 3, 2, 4, 1];
    const OUTPUT = [1, 2, 3, 4, 5];

    // when
    const randoms = utils.sortRandoms(INPUT);

    // then
    expect(randoms).toEqual(OUTPUT);
  });
});

describe('convertNumberFormat 메서드 테스트', () => {
  test.each([
    [123456789, '123,456,789'],
    [1000, '1,000'],
    [10000, '10,000'],
  ])(
    '숫자를 넣으면 세 자리 수마다 콤마가 찍힌 숫자로 이루어진 문자열이 반환된다.',
    (format, output) => {
      // when
      const string = utils.convertNumberFormat(format);

      // then
      expect(string).toBe(output);
    },
  );

  test.each([
    [123456789.78, '123,456,789.8'],
    [1000.41, '1,000.4'],
    [10000.157, '10,000.2'],
  ])(
    '소수점이 있는 숫자를 넣고 첫 번째 자리수로 반올림하는 옵션을 선택하면 세 자리 수마다 콤마가 찍히고 첫 번째 소수까지만 존재하는 문자열이 반환된다.',
    (format, output) => {
      // given
      const OPTIONS = { maximumFractionDigits: 1 };

      // when
      const string = utils.convertNumberFormat(format, OPTIONS);

      // then
      expect(string).toBe(output);
    },
  );

  test.each([
    [1234567.89, '123,456,789%'],
    ['1234567.89', '123,456,789%'],
    [0.6257, '63%'],
    [100, '10,000%'],
  ])(
    '숫자를 넣고 확률 옵션을 선택하면 세 자리 수마다 콤마가 찍히고 확률로 계산 되어 반환된다.',
    (format, output) => {
      // given
      const OPTIONS = { style: 'percent' };

      // when
      const string = utils.convertNumberFormat(format, OPTIONS);

      // then
      expect(string).toBe(output);
    },
  );
});

describe('유효성 검사 테스트', () => {
  test('빈 문자열이면 에러가 발생한다.', () => {
    // given
    const INPUT = '';

    // then
    expect(() => utils.validateEmpty(INPUT)).toThrow();
  });

  test('숫자 형태가 아니면 에러가 발생한다.', () => {
    // given
    const INPUT = '1e1';

    // then
    expect(() => utils.validateNumber(INPUT)).toThrow();
  });

  test('정수가 아니면 에러가 발생한다.', () => {
    // given
    const INPUT = 1n;

    // then
    expect(() => utils.validateSafeInteger(INPUT)).toThrow();
  });

  test('1~45가 아니면 에러가 발생한다.', () => {
    // given
    const INPUT = 46;

    // then
    expect(() => utils.validateRange(INPUT)).toThrow();
  });
});
