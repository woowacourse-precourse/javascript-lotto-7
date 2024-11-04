// __tests__/PurchaseAmount.test.js

import PurchaseAmount from '../src/lotto/PurchaseAmount.js';
import { errorConstants, magicNumber } from '../src/constants/index.js';

describe('PurchaseAmount 클래스 테스트', () => {
  describe('유효한 입력 시', () => {
    test('PurchaseAmount 객체가 정상적으로 생성되고, 올바른 값을 반환한다', () => {
      const validInput = '5000';
      const expectedAmount = 5000;
      const expectedCnt = expectedAmount / magicNumber.BASE;

      const purchaseAmount = new PurchaseAmount(validInput);

      expect(purchaseAmount).toBeInstanceOf(PurchaseAmount);
      expect(purchaseAmount.getPurchaseAmount()).toBe(expectedAmount);
      expect(purchaseAmount.getPurchaseCnt()).toBe(expectedCnt);
    });
  });

  describe('유효하지 않은 입력 시', () => {
    test('입력이 숫자가 아닐 때 에러를 발생시킨다', () => {
      const invalidInput = 'abc';

      expect(() => {
        new PurchaseAmount(invalidInput);
      }).toThrow(errorConstants.NOT_A_NUMBER);
    });

    test('입력이 0일 때 에러를 발생시킨다', () => {
      const zeroInput = '0';

      expect(() => {
        new PurchaseAmount(zeroInput);
      }).toThrow(errorConstants.NOT_ZERO);
    });

    test('입력이 비어있을 때 에러를 발생시킨다', () => {
      const emptyInput = '';

      expect(() => {
        new PurchaseAmount(emptyInput);
      }).toThrow(errorConstants.NOT_ZERO);
    });

    test('입력 단위가 올바르지 않을 때 에러를 발생시킨다', () => {
      const invalidUnitInput = '5500';

      expect(() => {
        new PurchaseAmount(invalidUnitInput);
      }).toThrow(errorConstants.WRONG_UNIT);
    });
  });
});
