import LottoGameService from '../src/service/LottoGameService';

import Lotto from '../src/Lotto';

describe('로또 비즈니스 로직 클래스 테스트', () => {
  let lottoGameService;
  beforeEach(() => {
    lottoGameService = new LottoGameService([1, 2, 3, 4, 5, 6]);
  });

  describe('1개의 사용자 로또 발행하기', () => {
    test('1개의 로또를 생성한다.', () => {
      expect(lottoGameService.generateLotto()).toBeInstanceOf(Lotto);
    });
  });

  describe('N개의 사용자 로또 발행하기', () => {
    test('N개의 로또는 각각 독립적이다.', () => {
      expect(lottoGameService.generateLottos(10)).toHaveLength(10);
    });
  });

  describe('구입 금액에 따른 로또 개수 계산하기', () => {
    test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
      expect((lottoGameService.createLottoQuantity(18000))).toBe(18);
    });
  });
});
