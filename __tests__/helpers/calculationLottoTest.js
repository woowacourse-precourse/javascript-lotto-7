import calculationLotto from '../../src/helpers/calculationLotto.js';
import { LOTTO_PRIZE } from '../../src/constants/lottoResults.js';

describe('calculationLotto 테스트', () => {
  test('count 함수가 올바른 로또 개수를 반환하는지 테스트', () => {
    const purchasePrice = 5000;
    const expectedCount = 5; // LOTTO_CONFIG.PRICE가 1000일 경우
    expect(calculationLotto.count(purchasePrice)).toBe(expectedCount);
  });

  test('result 함수가 올바른 로또 결과 객체를 반환하는지 테스트', () => {
    const lottos = [
      { calculateRank: () => 'fifth' },
      { calculateRank: () => 'fourth' },
      { calculateRank: () => 'third' },
      { calculateRank: () => 'second' },
      { calculateRank: () => 'first' },
    ];
    const winningLotto = {}; // 가상의 당첨 로또
    const bonusNumber = 7; // 가상의 보너스 번호
    const lottoResult = calculationLotto.result(
      lottos,
      winningLotto,
      bonusNumber
    );

    const expectedResult = JSON.parse(JSON.stringify(LOTTO_PRIZE));
    expectedResult.fifth.count = 1;
    expectedResult.fourth.count = 1;
    expectedResult.third.count = 1;
    expectedResult.second.count = 1;
    expectedResult.first.count = 1;

    expect(lottoResult).toEqual(expectedResult);
    expect(lottoResult.fifth.count).toBe(expectedResult.fifth.count);
    expect(lottoResult.fourth.count).toBe(expectedResult.fourth.count);
    expect(lottoResult.third.count).toBe(expectedResult.third.count);
    expect(lottoResult.second.count).toBe(expectedResult.second.count);
    expect(lottoResult.first.count).toBe(expectedResult.first.count);
  });

  test('rateOfReturn 함수가 올바른 수익률을 반환하는지 테스트', () => {
    const lottoResult = {
      fifth: { amount: 5000, count: 1 },
      fourth: { amount: 50000, count: 0 },
      third: { amount: 1500000, count: 0 },
      second: { amount: 30000000, count: 0 },
      first: { amount: 2000000000, count: 0 },
    };
    const purchasePrice = 8000;
    const expectedRateOfReturn = ((5000 / 8000) * 100).toFixed(1);

    expect(calculationLotto.rateOfReturn(lottoResult, purchasePrice)).toBe(
      expectedRateOfReturn
    );
  });
});
