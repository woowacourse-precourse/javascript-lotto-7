import LottoGameService from '../src/service/LottoGameService';

import Lotto from '../src/Lotto';

describe('로또 비즈니스 로직 클래스 테스트', () => {
  let lottoGameService;
  beforeEach(() => {
    lottoGameService = new LottoGameService([1, 2, 3, 4, 5, 6]);
  });

  describe('로또 발생하기', () => {
    test('1개의 로또를 생성한다.', () => {
      expect(lottoGameService.generateLotto()).toBeInstanceOf(Lotto);
    });
    test('N개의 로또는 각각 독립적이다.', () => {
      expect(lottoGameService.generateLottos(10)).toHaveLength(10);
    });
  });

  describe('구입 금액에 따른 로또 개수 계산하기', () => {
    test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
      expect((lottoGameService.getLottoQuantity(18000))).toBe(18);
    });
  });

  describe('일치하는 개수에 다른 등수 계산하기', () => {
    test('당첨 결과의 등수를 0으로 초기화한다.', () => {
      const prizes = lottoGameService.getPrizes();
      expect((prizes[1].count)).toBe(0);
    });

    describe('당첨 로또와 사용자 로또의 일치하는 개수를 가지고 등수를 계산한다.', () => {
      test('일치하는 개수가 5개이고, 보너스 볼이 일치하면 2를 반환한다.', () => {
        expect(lottoGameService.calculateRank(5, true)).toBe(2);
      });
      test('일치하는 개수가 5개이고, 보너스 볼이 일치하지 않으면 2를 반환한다.', () => {
        expect(lottoGameService.calculateRank(5, true)).toBe(2);
      });
      test('일치하는 개수가 4개이면, 4를 반환한다.', () => {
        expect(lottoGameService.calculateRank(4, true)).toBe(4);
      });
      test('일치하는 개수가 1개이면, -1을 반환한다.', () => {
        expect(lottoGameService.calculateRank(1, true)).toBe(-1);
      });
    });

    test('당첨 결과에 해당하는 등수를 1 증가시킨다.', () => {
      expect(lottoGameService.getPrizes()[1].count).toBe(0);
      lottoGameService.increaseRankCount(1);
      expect(lottoGameService.getPrizes()[1].count).toBe(1);
    });

    describe('수익률을 계산하기', () => {
      test('전체 수익을 구한다', () => {
        const prizes = {
          1: {
            matchCount: 6, bonus: false, money: 2000000000, count: 0,
          },
          2: {
            matchCount: 5, bonus: true, money: 30000000, count: 2,
          },
          3: {
            matchCount: 5, bonus: false, money: 1500000, count: 1,
          },
          4: {
            matchCount: 4, bonus: false, money: 50000, count: 0,
          },
          5: {
            matchCount: 3, bonus: false, money: 5000, count: 0,
          },
        };
        expect(lottoGameService.getTotalPrize(prizes)).toBe(61500000);
      });
      test('수익률을 구한다', () => {
        expect(lottoGameService.getPayoutPercentage(5000, 61500000)).toBe(1230000);
        expect(lottoGameService.getPayoutPercentage(17000, 5000)).toBe(29.411764705882355);
      });
      test('수익률은 소수점 둘째 자리에서 반올림한다.', () => {
        expect(lottoGameService.roundNumber(100.05)).toBeCloseTo(100.0);
        expect(lottoGameService.roundNumber(51.531232)).toBeCloseTo(51.5);
        expect(lottoGameService.roundNumber(1000000.0121323)).toBeCloseTo(1000000.0);
        expect(lottoGameService.roundNumber(0.2312323)).toBeCloseTo(0.2);
        expect(lottoGameService.roundNumber(500)).toBeCloseTo(500);
      });
    });
  });
});
