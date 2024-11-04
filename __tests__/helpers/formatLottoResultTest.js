import { formatLottoResult } from '../../src/helpers/formatLottoResult';

describe('formatLottoResult 테스트', () => {
  test('각 등수에 맞는 포맷된 문자열을 반환하는지 테스트', () => {
    const lottoResult = {
      fifth: { count: 5 },
      fourth: { count: 4 },
      third: { count: 3 },
      second: { count: 2 },
      first: { count: 1 },
    };

    const expectedOutput = [
      '3개 일치 (5,000원) - 5개',
      '4개 일치 (50,000원) - 4개',
      '5개 일치 (1,500,000원) - 3개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 2개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    expect(formatLottoResult(lottoResult)).toEqual(expectedOutput);
  });
});
