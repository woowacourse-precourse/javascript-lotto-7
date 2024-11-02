import validation from '../src/validation.js';

describe('입력문에 대한 테스트', () => {
  test.each(['100+100', 's20f', '@GJe22'])(
    '구매금액은 숫자만 입력되어야 한다.',
    (numberStr) => {
      expect(() => validation.purchaseAmount.isNotNumber(numberStr)).toThrow();
    },
  );

  test.each(['-100', '0'])('구매금액은 양수만 입력해야 한다.', (numberStr) => {
    expect(() =>
      validation.purchaseAmount.isNotPositiveNumber(numberStr),
    ).toThrow();
  });

  test.each(['1001', '100.5', '1234.543'])(
    '구매금액은 1000으로 나누어 떨어져야 한다.',
    (numberStr) => {
      expect(() =>
        validation.purchaseAmount.isNotGoodNumber(numberStr),
      ).toThrow();
    },
  );

  test('당첨 번호는 6개여야 한다.', () => {
    expect(() => {
      validation.winningNumber
        .isWrongLength(['1', '2', '3', '4', '5'])
        .toThrow();
    });
  });

  test.each([
    ['1', '2', '3', ' 4', '5', '6'],
    ['1', '2', '3', '4', '5', '6 '],
    ['1 ', '2', '3', '4', '5', '6'],
  ])('당첨번호가 띄어쓰기가 되면 안된다.', (numberArr) => {
    expect(() => validation.winningNumber.hasSpace(numberArr)).toThrow();
  });

  test.each([
    ['1', '2', '3', '4', '', '6'],
    ['1', '2', '3', '4', '5', ' '],
  ])('당첨번호가 공백이면 안된다.', (numberArr) => {
    expect(() => validation.winningNumber.isEmpty(numberArr)).toThrow();
  });

  test.each([
    ['1', '2', '0', '4', '5', '6'],
    ['1', '46', '34', '12', '42', '40'],
  ])('당첨번호의 범위는 1~45이다', (numberArr) => {
    expect(() => validation.winningNumber.isNotInRange(numberArr)).toThrow();
  });

  test.each([
    ['1', '2', 's', 't', '5', '6'],
    ['@', '2', '3', '6', 'TE', '7'],
    [',', '@', ',,', '#%', '222'],
  ])('당첨번호는 숫자여야 합니다.', (numberArr) => {
    expect(() => validation.winningNumber.isNotNumber(numberArr)).toThrow();
  });

  test.each([
    ['1', '2.5', '3', '4', '5', '6'],
    ['1.2', '1.1', '2', '5', '6.6', '7.9'],
  ])('당첨번호는 정수여야 합니다.', (numberArr) => {
    expect(() => validation.winningNumber.isNotInteger(numberArr)).toThrow();
  });

  test('당첨 번호는 중복되면 안 됩니다.', () => {
    expect(() => {
      validation.winningNumber
        .isNotDuplicate(['1', '2', '2', '3', '4', '5'])
        .toThrow();
    });
  });
});
