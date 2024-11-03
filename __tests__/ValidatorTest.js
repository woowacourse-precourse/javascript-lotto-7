describe('Validator 테스트', () => {
  const validator = new Validator();
  test.each([
    [1000, true],
    [2000, true],
    [3000, true],
    [-1000, false],
    [0, false],
    [1500, false],
    [1000.3, false],
  ])('구매 금액에 대한 테스트 입력 : %d 결과 : %s', (amount, expectedResult) => {
    expect(validator.validateAmount(amount)).toBe(expectedResult);
  });

  test('중복된 값에 대한 유효성 검사', () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 5];
    const EXPECTED_RESULT = false;

    // when & then
    expect(validator.validateDuplicatedNumber(LOTTO_NUMBERS)).toBe(EXPECTED_RESULT);
  });

  test.each([[[0, 1, 2, 3, 4, 5], false]], [[1, 2, 3, 4, 5, 46], false])(
    '',
    (lottoNumbers, expectedResult) => {
      expect(validator.validateNumberRange(lottoNumbers)).toBe(expectedResult);
    },
  );

  test('잘못된 로또 번호 수량에 대한 유효성 검사', () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6, 7];
    const EXPECTED_RESULT = false;

    // when & then
    expecet(validator.validateNumbersLength(LOTTO_NUMBERS)).toBe(EXPECTED_RESULT);
  });
  test('유효한 로또 번호 테스트 케이스', () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];
    const EXPECTED_RESULT = true;

    // when
    const methods = [
      validator.validateNumberRange,
      validator.validateDuplicatedNumber,
      validator.validateNumbersLength,
    ];
    const result = methods.map((method) => method(LOTTO_NUMBERS)).every(Boolean);

    // then
    expect(result).toBe(EXPECTED_RESULT);
  });

  describe.each([1, 2, 3, 4, 5, 6])('', (lottoNumbers) => {
    test('당첨번호와 중복되지 않는 보너스 번호에 대한 검사', () => {
      // given
      const BONUS_NUMBER = 6;
      const EXPECTED_RESULT = true;

      // when & then
      expect(validator.validateBonusNumber(lottoNumbers, BONUS_NUMBER)).toBe(EXPECTED_RESULT);
    });
    test('당첨번호와 중복되는 보너스 번호에 대한 검사', () => {
      // given
      const BONUS_NUMBER = 7;
      const EXPECTED_RESULT = false;

      // when & then
      expect(validator.validateBonusNumber(lottoNumbers, BONUS_NUMBER)).toBe(EXPECTED_RESULT);
    });
  });
});
