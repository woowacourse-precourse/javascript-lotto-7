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
    // when & then
    expect(validator.validateAmount(amount)).toBe(expectedResult);
  });

  test.each([
    [[1, 10, 15, 25, 35, 45], true],
    [[1, 2, 3, 4, 5, 5], false],
    [[0, 1, 2, 3, 4, 5], false],
    [[1, 2, 3, 4, 5, 46], false],
  ])('당첨 번호에 대한 테스트 입력 : %s 결과 : %s', (numbers, expectedResult) => {
    // when & then
    expect(validator.validateLottoNumbers(numbers)).toBe(expectedResult);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], 7, true],
    [[1, 2, 3, 4, 5, 6], 6, false],
    [[1, 2, 3, 4, 5, 6], 46, false],
  ])(
    '보너스 번호에 대한 테스트 당첨번호 : %s 보너스번호 : %s 결과 : %s',
    (winningNumbers, bonusNumber, expectedResult) => {
      // when & then
      expect(validator.validateBonusNumber(winningNumbers, bonusNumber)).toBe(expectedResult);
    },
  );
});
