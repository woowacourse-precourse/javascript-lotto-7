import LottoCalculator from '../src/classes/LottoCalculator';
import { LOTTO_PRIZE, LOTTO_RANK } from '../src/constant.js';

describe('로또 계산기 클래스 테스트', () => {
  let calculator;
  const purchasePrice = 5000;

  beforeEach(() => {
    calculator = new LottoCalculator(purchasePrice);
  });
  describe('로또 순위 계산 테스트', () => {
    test('6개의 번호를 맞추면 1등이다.', () => {
      calculator.calculateLottoRank(6, 0, [false]);
      expect(calculator.getLottoResults()[4]).toBe(1);
    });

    test('5개의 번호와 보너스 번호를 맞추면 2등이다.', () => {
      calculator.calculateLottoRank(5, 0, [true]);
      expect(calculator.getLottoResults()[3]).toBe(1);
    });

    test('5개의 번호를 맞추면 3등이다.', () => {
      calculator.calculateLottoRank(5, 0, [false]);
      expect(calculator.getLottoResults()[2]).toBe(1);
    });

    test('4개의 번호를 맞추면 4등이다.', () => {
      calculator.calculateLottoRank(4, 0, [false]);
      expect(calculator.getLottoResults()[1]).toBe(1);
    });

    test('3개의 번호를 맞추면 5등이다.', () => {
      calculator.calculateLottoRank(3, 0, [false]);
      expect(calculator.getLottoResults()[0]).toBe(1);
    });

    test('2개 이하로 맞추면 등수에 포함되지 않는다', () => {
      calculator.calculateLottoRank(2, 0, [false]);
      expect(
        calculator.getLottoResults().every((result) => result === 0)
      ).toBeTruthy();
    });
  });

  describe('로또 상금 계산 테스트', () => {
    test('1등 상금 계산', () => {
      calculator.calculateLottoRank(6, 0, [false]);
      expect(calculator.calculateLottoPrize()).toBe(LOTTO_PRIZE[4].PRIZE);
    });

    test('2등 상금 계산', () => {
      calculator.calculateLottoRank(5, 0, [true]);
      expect(calculator.calculateLottoPrize()).toBe(LOTTO_PRIZE[3].PRIZE);
    });

    test('3등 상금 계산', () => {
      calculator.calculateLottoRank(5, 0, [false]);
      expect(calculator.calculateLottoPrize()).toBe(LOTTO_PRIZE[2].PRIZE);
    });

    test('4등 상금 계산', () => {
      calculator.calculateLottoRank(4, 0, [false]);
      expect(calculator.calculateLottoPrize()).toBe(LOTTO_PRIZE[1].PRIZE);
    });

    test('5등 상금 계산', () => {
      calculator.calculateLottoRank(3, 0, [false]);
      expect(calculator.calculateLottoPrize()).toBe(LOTTO_PRIZE[0].PRIZE);
    });

    test('5등 미만 상금', () => {
      calculator.calculateLottoRank(2, 0, [false]);
      expect(calculator.calculateLottoPrize()).toBe(0);
    });
  });

  describe('수익률 계산 테스트', () => {
    test('1등 당첨시 수익률 계산', () => {
      calculator.calculateLottoRank(6, 0, [false]);
      // 5천원으로 20억 수익 (4천만)
      expect(calculator.calculateLottoProfit()).toBe('40000000.0');
    });

    test('3등 당첨시 수익률 계산', () => {
      calculator.calculateLottoRank(5, 0, [false]);
      // 5천원으로 20억 수익 (4천만)
      expect(calculator.calculateLottoProfit()).toBe('30000.0');
    });

    test('미당첨시 수익률 계산', () => {
      calculator.calculateLottoRank(2, 0, [false]);
      // 5천원으로 20억 수익 (4천만)
      expect(calculator.calculateLottoProfit()).toBe('0.0');
    });
  });
});
