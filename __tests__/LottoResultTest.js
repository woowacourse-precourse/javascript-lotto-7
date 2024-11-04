import LottoResult from '../src/model/LottoResult.js';
import { PRIZE, INITIAL_RANK } from '../src/contents/LottoConstants.js';

describe('LottoResult 클래스 테스트', () => {
  let lottoResult;
  let mockWinningNumbers;
  let mockBonusNumber;
  let mockLottos;
  const ticketCount = 8;

  beforeEach(() => {
    // 초기 값 설정
    mockWinningNumbers = [1, 2, 3, 4, 5, 6];
    mockBonusNumber = 7;
    mockLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    // LottoResult 객체 생성
    lottoResult = new LottoResult(
      mockWinningNumbers,
      mockBonusNumber,
      ticketCount,
      mockLottos,
    );
  });

  test('calculateResults() 메서드가 당첨 결과를 정확하게 계산해야 함', () => {
    const expectedRank = {
      ...INITIAL_RANK,
      fifth: 1, // 3개 일치 - 1개
    };

    const results = lottoResult.calculateResults();
    expect(results).toEqual(expectedRank);
  });

  test('calculateProfitRate() 메서드가 올바른 수익률을 계산해야 함', () => {
    const expectedProfitRate = (
      ((PRIZE.fifth * 1) / (ticketCount * 1000)) *
      100
    ).toFixed(1); // 수익률 계산
    expect(lottoResult.calculateProfitRate()).toBe(expectedProfitRate);
  });
});
