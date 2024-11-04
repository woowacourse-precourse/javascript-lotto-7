import validator from '../src/utils/Validator.js';

describe('Validator 테스트', () => {
  test.each([
    [100, false],
    [1100, false],
    [999, false],
  ])('1000원 단위로 나눠지는 값에 대한 검사', (amount, expectedResult) => {
    // when & then
    expect(validator.divideIntoUnit(amount)).toBe(expectedResult);
  });

  test.each([
    [-1000, false],
    [0, false],
    [0.1, false],
  ])('0을 초과하는 정수 값에 대한 검사', (amount, expectedResult) => {
    // when & then
    expect(validator.isIntegerGreaterThenZero(amount)).toBe(expectedResult);
  });

  test.each([[1000], [2000], [3000]])(
    '금액에 대한 모든 검사를 통과하는 값에 대한 검사 (입력 : %s)',
    (amount) => {
      // given
      const methods = [validator.divideIntoUnit, validator.isIntegerGreaterThenZero];

      // when
      const result = methods.map((method) => method(amount)).every(Boolean);

      // then
      expect(result).toBe(true);
    },
  );

  test.each([
    [[1, 1, 1, 1, 1, 1], false],
    [[1, 2, 2, 2, 2, 2], false],
    [[1, 2, 3, 3, 3, 3], false],
    [[1, 2, 3, 4, 4, 4], false],
    [[1, 2, 3, 4, 5, 5], false],
  ])('중복된 값에 대한 유효성 검사', (lottoNumbers, expectedResult) => {
    // when & then
    expect(validator.uniqueNumber(lottoNumbers)).toBe(expectedResult);
  });

  test.each([
    [[0, 1, 2, 3, 4, 5], false],
    [[1, 2, 3, 4, 5, 46], false],
  ])('숫자의 범위에 대한 유효성 검사', (lottoNumbers, expectedResult) => {
    expect(validator.validRangeInteger(lottoNumbers)).toBe(expectedResult);
  });

  test.each([
    [[1, 2, 3, 4, 5], false],
    [[1, 2, 3, 4, 5, 6, 7], false],
  ])(
    '로또 번호 수량에 대한 유효성 검사 ( 로또번호 : %s 결과 : %s )',
    (lottoNumbers, expectedResult) => {
      // when & then
      expect(validator.validWinningNumbersLength(lottoNumbers)).toBe(expectedResult);
    },
  );

  test('모든 조건을 만족하는 로또 번호에 대한 검사', () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];
    const EXPECTED_RESULT = true;

    // when
    const methods = [
      validator.validRangeInteger,
      validator.uniqueNumber,
      validator.validWinningNumbersLength,
    ];
    const result = methods.map((method) => method(LOTTO_NUMBERS)).every(Boolean);

    // then
    expect(result).toBe(EXPECTED_RESULT);
  });

  describe.each([[[1, 2, 3, 4, 5, 6]]])(
    '당첨 번호와 보너스 번호의 중복 여부 검사 (당첨번호 : %s',
    (lottoNumbers) => {
      test.each([
        [[6], false],
        [[7], true],
      ])('보너스번호 : %s 결과 : %s)', (bonusNumber, expectedResult) => {
        expect(validator.uniqueBonusNumber(lottoNumbers, bonusNumber)).toBe(expectedResult);
      });
    },
  );
});
