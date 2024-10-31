import Revenue from '../../src/domain/Revenue.js';

describe('수익률 기능 테스트', () => {
  test('수익률은 소수점 둘째 자리에서 반올림되어서 % 단위로 반환된다.', () => {
    // given
    const PAYMENT = 7000;
    const WINNING_DETAILS = [
      ['3개 일치 (5,000원)', 0],
      ['4개 일치 (50,000원)', 1],
      ['5개 일치 (1,500,000원)', 0],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
      ['6개 일치 (2,000,000,000원)', 0],
    ];
    const OUTPUT = '714.3%';

    // when
    const rate = new Revenue(WINNING_DETAILS).getRateOfReturn(PAYMENT);

    // then
    expect(rate).toBe(OUTPUT);
  });

  test('일치하는 숫자가 모두 3개 미만이면 수익률이 0.0%다.', () => {
    // given
    const PAYMENT = 1000;
    const WINNING_DETAILS = [
      ['3개 일치 (5,000원)', 0],
      ['4개 일치 (50,000원)', 0],
      ['5개 일치 (1,500,000원)', 0],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
      ['6개 일치 (2,000,000,000원)', 0],
    ];
    const OUTPUT = '0.0%';

    // when
    const rate = new Revenue(WINNING_DETAILS).getRateOfReturn(PAYMENT);

    // then
    expect(rate).toBe(OUTPUT);
  });

  test('총 당첨 금액을 구입한 로또 금액으로 나눠서 수익률을 계산한다.', () => {
    // given
    const PAYMENT = 9000;
    const WINNING_DETAILS = [
      ['3개 일치 (5,000원)', 2],
      ['4개 일치 (50,000원)', 2],
      ['5개 일치 (1,500,000원)', 1],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 2],
      ['6개 일치 (2,000,000,000원)', 1],
    ];
    const OUTPUT = '22,906,777.8%';

    // when
    const rate = new Revenue(WINNING_DETAILS).getRateOfReturn(PAYMENT);

    // then
    expect(rate).toBe(OUTPUT);
  });
});
