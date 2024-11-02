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

  test.each([['1,2,3, 4,5,6'], ['1,2,3,4,5,6 '], ['1 ,2,3,4,5,6']])(
    '당첨번호가 띄어쓰기가 되면 안된다.',
    (numberArr) => {
      expect(() => validation.winningNumber.hasSpace(numberArr)).toThrow();
    },
  );
});
