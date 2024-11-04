// __tests__/LottoManager.test.js
import LottoManager from '../src/LottoManager';
import { ERROR_MESSAGE, RULE } from '../src/constants/index.js';

describe('LottoManager 테스트', () => {
  let lottoManager;

  beforeEach(() => {
    lottoManager = new LottoManager();
  });

  describe('구매 금액 검증', () => {
    test('구매 금액이 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        lottoManager.validatePrice('1000원');
      }).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
    });

    test('구매 금액이 1000원 미만이면 예외가 발생한다.', () => {
      expect(() => {
        lottoManager.validatePrice(900);
      }).toThrow(ERROR_MESSAGE.OUT_OF_RANGE_PRICE(RULE.LOTTO_PRICE));
    });

    test('구매 금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
      expect(() => {
        lottoManager.validatePrice(1500);
      }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT(RULE.LOTTO_PRICE));
    });

    test('올바른 구매 금액은 검증을 통과한다.', () => {
      expect(() => {
        lottoManager.validatePrice(2000);
      }).not.toThrow();
    });
  });

  describe('당첨 번호 검증', () => {
    test('올바른 형식의 당첨 번호를 변환한다.', () => {
      const input = '1, 2, 3, 4, 5, 6';
      const result = lottoManager.getWinningLotto(input);
      expect(result).toEqual(['1', '2', '3', '4', '5', '6']);
    });

    test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
      const winningNumbers = ['1', '2', '3', '4', '5', '6'];
      expect(() => {
        lottoManager.validateBonus('1', winningNumbers);
      }).toThrow(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    });
  });

  describe('당첨 결과 계산', () => {
    test('당첨 통계가 정확히 계산된다.', () => {
      const lottos = [{ numbers: [1, 2, 3, 4, 5, 6] }, { numbers: [1, 2, 3, 4, 5, 7] }];
      const winningNumbers = ['1', '2', '3', '4', '5', '6'];
      const bonusNumber = '7';

      const result = lottoManager.getResult(lottos, winningNumbers, bonusNumber);
      expect(result).toEqual({
        3: 0,
        4: 0,
        5: 0,
        5.5: 1,
        6: 1,
      });
    });

    test('수익률이 정확히 계산된다.', () => {
      const result = {
        3: 1, // 5,000원
        4: 0, // 0원
        5: 0, // 0원
        5.5: 0, // 0원
        6: 0, // 0원
      };

      const purchasePrice = 2000; // 2장 구매
      const expectedRate = ((5000 / 2000) * 100).toFixed(1);

      expect(lottoManager.calculatePrize(result, purchasePrice)).toBe(expectedRate);
    });
  });
});
