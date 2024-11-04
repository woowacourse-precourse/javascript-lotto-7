import ProfitRate from '../src/model/ProfitRate';

describe('수익률 클래스 테스트', () => {
  test('당첨 등수가 하나일 때 수익률을 반환한다.', () => {
    const PAID_MONEY = 5000;
    const RESULT = {
      5: 1,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };
    const EXPECTED_RESULT = '100.0';

    const profitRate = new ProfitRate(PAID_MONEY, RESULT);

    expect(profitRate.getProfitRate()).toEqual(EXPECTED_RESULT);
  });

  test('여러 등수가 당첨일 때 수익률을 반환한다.', () => {
    const PAID_MONEY = 110000;
    const RESULT = {
      5: 1,
      4: 1,
      3: 0,
      2: 0,
      1: 0,
    };
    const EXPECTED_RESULT = '50.0';

    const profitRate = new ProfitRate(PAID_MONEY, RESULT);

    expect(profitRate.getProfitRate()).toEqual(EXPECTED_RESULT);
  });

  test('같은 등수가 여러 번 당첨일 때 수익률을 반환한다.', () => {
    const PAID_MONEY = 5000;
    const RESULT = {
      5: 2,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };
    const EXPECTED_RESULT = '200.0';

    const profitRate = new ProfitRate(PAID_MONEY, RESULT);

    expect(profitRate.getProfitRate()).toEqual(EXPECTED_RESULT);
  });
});
