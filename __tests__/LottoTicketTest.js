import LottoTicket from '../src/lottomachine/LottoTicket.js';

describe('LottoTicket클래스의 기능 테스트', () => {
  const lotto = new LottoTicket([1, 2, 3, 4, 5, 6]);

  test('당첨 번호 확인 : 당첨 번호가 모두 일치할 때 6을 반환하는지 확인한다.', () => {
    const matchCount = lotto.calculateMatchCount([1, 2, 3, 4, 5, 6]);
    expect(matchCount).toBe(6);
  });

  test('당첨 번호 확인 : 당첨 번호가 모두 일치하지 않을 때 0을 반환하는지 확인한다.', () => {
    const matchCount = lotto.calculateMatchCount([7, 8, 9, 10, 11, 12]);
    expect(matchCount).toBe(0);
  });

  test('보너스 번호 확인 : 보너스 번호와 일치하는 것이 있을 때 1을 반환하는지 확인한다.', () => {
    const bonusCount = lotto.calculateBonusCount(1);
    expect(bonusCount).toBe(1);
  });
  test('보너스 번호 확인 : 보너스 번호와 일치하는 것이 없을 때 0을 반환하는지 확인한다.', () => {
    const bonusCount = lotto.calculateBonusCount(20);
    expect(bonusCount).toBe(0);
  });
});
