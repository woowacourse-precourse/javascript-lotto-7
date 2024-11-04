import Lotto from '../../src/Lotto';
import LottoService from '../../src/Service/LottoService';
import { generateRandomLottoNumbers } from '../../src/util/randomGenerator';

jest.mock('../../src/util/randomGenerator');
jest.mock('../../src/Lotto');

describe('로또 비지니스 로직 테스트', () => {
  let lottoService;

  beforeEach(() => {
    jest.clearAllMocks();
    lottoService = new LottoService();
  });

  test('구매 금액 만큼 로또를 발급해야 한다.', () => {
    generateRandomLottoNumbers.mockReturnValue([1, 2, 3, 4, 5, 6]);
    Lotto.mockImplementation((numbers) => ({
      numbers,
      match: jest.fn(),
      includes: jest.fn(),
    }));

    const lottos = lottoService.createLottos(3);

    expect(lottos.length).toBe(3);
    expect(generateRandomLottoNumbers).toHaveBeenCalledTimes(3);
  });

  describe('당첨 결과 테스트', () => {
    test('로또 번호를 몇 개 맞추었는지 반환한다.', () => {
      Lotto.mockImplementation(() => ({
        match: jest.fn().mockReturnValue(3),
        includes: jest.fn().mockReturnValue(false),
      }));

      const mockLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const results = lottoService.calculateResults(
        [mockLotto],
        [1, 2, 3, 10, 11, 12],
        7
      );
      expect(results).toEqual({ 3: 1, 4: 0, 5: 0, BONUS: 0, 6: 0 });
    });

    test('5개 번호와 보너스 번호가 일치하는 경우', () => {
      Lotto.mockImplementation(() => ({
        match: jest.fn().mockReturnValue(5),
        includes: jest.fn().mockReturnValue(true),
      }));

      const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];
      const winningNumbers = [1, 2, 3, 4, 5, 10];
      const bonusNumber = 6;
      const results = { 3: 0, 4: 0, 5: 0, BONUS: 1, 6: 0 };

      expect(
        lottoService.calculateResults(lottos, winningNumbers, bonusNumber)
      ).toStrictEqual(results);
    });

    test('3개도 못맞출 경우', () => {
      Lotto.mockImplementation(() => ({
        match: jest.fn().mockReturnValue(2),
        includes: jest.fn().mockReturnValue(false),
      }));

      const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];
      const winningNumbers = [41, 42, 43, 44, 45, 31];
      const bonusNumber = 7;
      const results = { 3: 0, 4: 0, 5: 0, BONUS: 0, 6: 0 };

      expect(
        lottoService.calculateResults(lottos, winningNumbers, bonusNumber)
      ).toStrictEqual(results);
    });
  });

  describe('수익률 계산 테스트', () => {
    test.each([
      [
        1000,
        { 3: 1, 4: 0, 5: 0, BONUS: 0, 6: 0 },
        '500.0', // 5000원 당첨
      ],
      [
        2000,
        { 3: 0, 4: 1, 5: 0, BONUS: 0, 6: 0 },
        '2500.0', // 50000원 당첨
      ],
      [
        1000,
        { 3: 0, 4: 0, 5: 0, BONUS: 0, 6: 0 },
        '0.0', // 당첨 x
      ],
      [
        8000,
        { 3: 1, 4: 1, 5: 0, BONUS: 0, 6: 0 },
        '687.5', // 55000원 당첨
      ],
    ])(
      '구매금액: %i원, 당첨 결과: %o일 때, 수익률은 %n%가 되어야 한다',
      (purchaseAmount, results, expectedRate) => {
        expect(lottoService.calculateEarningRate(purchaseAmount, results)).toBe(
          expectedRate
        );
      }
    );
    test('소수점 둘째 자리에서 반올림이 되어야한다.', () => {
      const purchaseAmount = 9000;
      const results = { 3: 1, 4: 0, 5: 0, BONUS: 0, 6: 0 };

      expect(
        lottoService.calculateEarningRate(purchaseAmount, results)
      ).not.toBe('55.55');
    });
  });
});
