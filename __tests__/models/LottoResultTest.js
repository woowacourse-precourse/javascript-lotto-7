import LottoResult from '../../src/model/LottoResult.js';
import Validator from '../../src/utils/validator.js';

jest.mock('../../src/utils/validator.js');

describe('LottoResult 클래스 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('생성자 - 보너스 번호 유효성 검사 호출 확인', () => {
    const lottos = [
      { getNumber: () => [1, 2, 3, 4, 5, 6] },
      { getNumber: () => [7, 8, 9, 10, 11, 12] },
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const amount = 10000;

    const lottoResult = new LottoResult(
      lottos,
      winningNumbers,
      bonusNumber,
      amount,
    );

    expect(Validator.validateBonusNumber).toHaveBeenCalledWith(
      bonusNumber,
      winningNumbers,
    );
    expect(lottoResult.getRankCounts()).toEqual({
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    });
  });

  test('calculateResults() - 각 등수 카운트 확인', () => {
    const lottos = [
      { getNumber: () => [1, 2, 3, 4, 5, 6] },
      { getNumber: () => [1, 2, 3, 4, 5, 7] },
      { getNumber: () => [1, 2, 3, 4, 5, 8] },
      { getNumber: () => [1, 2, 3, 4, 10, 11] },
      { getNumber: () => [1, 2, 3, 12, 13, 14] },
      { getNumber: () => [15, 16, 17, 18, 19, 20] },
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const amount = 10000;

    const lottoResult = new LottoResult(
      lottos,
      winningNumbers,
      bonusNumber,
      amount,
    );
    lottoResult.calculateResults();

    expect(lottoResult.getRankCounts()).toEqual({
      3: 1,
      4: 1,
      5: 1,
      5.5: 1,
      6: 1,
    });
  });

  test('calculateProfitRate() - 수익률 계산 확인', () => {
    const lottos = [
      { getNumber: () => [1, 2, 3, 4, 5, 6] }, // 6개 일치
      { getNumber: () => [1, 2, 3, 4, 5, 7] }, // 5개 + 보너스 일치
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const amount = 20000;

    const lottoResult = new LottoResult(
      lottos,
      winningNumbers,
      bonusNumber,
      amount,
    );
    lottoResult.calculateResults();

    const profitRate = lottoResult.calculateProfitRate();
    const expectedProfitRate = (
      ((2000000000 + 30000000) / amount) *
      100
    ).toFixed(1);

    expect(profitRate).toBeCloseTo(Number(expectedProfitRate));
  });

  test('getRankCounts() - 등수 카운트 반환 확인', () => {
    const lottos = [
      { getNumber: () => [1, 2, 3, 4, 5, 6] },
      { getNumber: () => [1, 2, 3, 4, 5, 7] },
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const amount = 20000;

    const lottoResult = new LottoResult(
      lottos,
      winningNumbers,
      bonusNumber,
      amount,
    );
    lottoResult.calculateResults();

    expect(lottoResult.getRankCounts()).toEqual({
      3: 0,
      4: 0,
      5: 0,
      5.5: 1,
      6: 1,
    });
  });

  test('getProfitRate() - 수익률 반환 확인', () => {
    const lottos = [{ getNumber: () => [1, 2, 3, 4, 5, 6] }];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const amount = 20000;

    const lottoResult = new LottoResult(
      lottos,
      winningNumbers,
      bonusNumber,
      amount,
    );
    lottoResult.calculateResults();
    lottoResult.calculateProfitRate();

    expect(lottoResult.getProfitRate()).toBeCloseTo(10000000.0);
  });
});
